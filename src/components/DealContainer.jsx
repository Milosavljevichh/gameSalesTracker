import Deal from './Deal'
import "../styles/dealContainer.css"
import { useState, useEffect } from 'react';

function DealContainer({apiCall}) {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  useEffect(() => {
    fetch(apiCall, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch deals");
        }
        return response.json();
      })
      .then((data) => {
        const filteredDeals = data.filter(deal => parseFloat(deal.savings) >= 80);
        setDeals(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [apiCall]);

  if (loading) return <p>Loading deals...</p>;
  if (error) return <p>Error: {error}</p>;

    return (
        <div id='dealContainer'>
            <h1>Discover all current steam deals</h1>
            <div id="deals">
                {deals.map((deal)=>(
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
                    />
                ))}
            </div>
        </div>
    )
}

export default DealContainer;