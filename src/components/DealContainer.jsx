import Deal from './Deal'
import "../styles/dealContainer.css"
import { useState, useEffect } from 'react';
import Game from './Game';

function DealContainer({apiCall, changePage, pageNum}) {
  const [deals, setDeals] = useState([]);
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let isDeal
  (apiCall.slice(35, 40).includes("deals")) ? isDeal = true : isDeal = false 
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
//odvojiti u utlitiy sve api calls
  useEffect(() => {
    setLoading(true)

    fetch(apiCall, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch deals");
        }
        return response.json();
      })
      .then((data) => {
        setDeals(data);
      })
      .then(
         isDeal && (fetch("https://www.cheapshark.com/api/1.0/stores", requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch deals");
          }
          return response.json();
        })
        .then((data) => {
          setStores(data)
          setLoading(false)
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        })
      ))
        .then((data) => {
          setStores(data)
          setLoading(false)
        })
  }, [apiCall]);


  if (loading) return <div className="loader"></div>;
  if (error) return <p>Error: {error}</p>;

    return (
        <div id='dealContainer'>
            <div className='flexContainer justifyBetween'>
              <h1>Discover all current steam deals</h1>
              <div>
                <button className='pageBtn' onClick={()=>(changePage(-1))}>&#8592;</button>
                <span>{pageNum + 1}</span>
                <button className='pageBtn' onClick={()=>(changePage(1))}>&#8594;</button>
              </div>
            </div>
            <div id="deals">
              {isDeal ? (
                deals.map((deal)=>(
                    <Deal 
                    key={deal.dealID}
                    dealID={deal.dealID}
                    title={deal.title}
                    ratingText={deal.steamRatingText}
                    thumb={deal.thumb}
                    savings={deal.savings} 
                    salePrice={deal.salePrice}
                    originalPrice={deal.normalPrice}
                    ratingCount={deal.steamRatingCount}
                    storeId={deal.storeID}
                    // storeLogo={stores.find((store) => store.storeID == deal.storeID).images.banner}
                    storeName={stores.find((store)=>store.storeID == deal.storeID).storeName}
                    />
                ))) : (
                  deals.map((game)=>(
                    <Game 
                    dealID={game.cheapestDealID}
                    title={game.external}
                    thumb={game.thumb}
                    salePrice={game.cheapest}
                    />
                  ))
                )
              }
            </div> 
            <div className='marginTop marginBottom flexContainer'>
              <button className='pageBtn' onClick={()=>(changePage(-1))}>&#8592;</button>
              <span>{pageNum + 1}</span>
              <button className='pageBtn' onClick={()=>(changePage(1))}>&#8594;</button>
            </div>
        </div>
    )
}

export default DealContainer;