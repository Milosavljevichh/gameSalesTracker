import Deal from './Deal'
import "../styles/dealContainer.css"

function DealContainer() {

    let dummyObj = {
        "internalName": "DEUSEXHUMANREVOLUTIONDIRECTORSCUT",
        "title": "Deus Ex: Human Revolution - Director's Cut",
        "metacriticLink": "/game/pc/deus-ex-human-revolution---directors-cut",
        "dealID": "HhzMJAgQYGZ%2B%2BFPpBG%2BRFcuUQZJO3KXvlnyYYGwGUfU%3D",
        "storeID": "1",
        "gameID": "102249",
        "salePrice": "2.99",
        "normalPrice": "19.99",
        "isOnSale": "1",
        "savings": "85.042521",
        "metacriticScore": "91",
        "steamRatingText": "Very Positive",
        "steamRatingPercent": "92",
        "steamRatingCount": "17993",
        "steamAppID": "238010",
        "releaseDate": 1382400000,
        "lastChange": 1621536418,
        "dealRating": "9.6",
        "thumb": "https://cdn.cloudflare.steamstatic.com/steam/apps/238010/header.jpg"
      }

    return (
        <div id='dealContainer'>
            <h1>Discover all current steam deals</h1>
            <Deal title={dummyObj.title} ratingText={dummyObj.steamRatingText} thumb={dummyObj.thumb} savings={dummyObj.savings} salePrice={dummyObj.salePrice} originalPrice={dummyObj.normalPrice} ratingCount={dummyObj.steamRatingCount} />
        </div>
    )
}

export default DealContainer;