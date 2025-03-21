function Deal({dealID, title, ratingText, thumb, savings, salePrice, originalPrice,ratingCount, storeId, storeLogo, storeName}) {

    let steamId = "1"
    
    let newThumb = storeId == steamId
        ? resizeThumb(thumb.lastIndexOf("/"), "/header.jpg")
        : thumb; 

    function resizeThumb(pos, size) {
        return thumb.slice(0, pos) + size
    }
    
    return (
        
        <article className='dealCard'>
            <a href={`https://www.cheapshark.com/redirect?dealID=${dealID}`} target='blank'>

            
            <div className="cardContent">
                <div className="imgContainer">
                    <img src={newThumb} alt={title} onError={(e) => e.target.src = thumb} className="thumb" loading="lazy"  />
                    <h2 className="marginTop title">{title}</h2>
                </div>
                <div className="textContent">
                    <div>
                        <p>Steam Rating:  <span className="defaultAccentColor">{ratingText ? ratingText : "Not Available"}</span></p>
                        <p>Rating Count: <span className="defaultAccentColor">{ratingCount}</span></p>
                        <p>Store: <span className="defaultAccentColor">{storeName}</span></p>
                    </div>
                    <div className="tag">
                        <h2 className="saleTag">-{Math.trunc(savings)}%</h2>
                        <h3 className="priceTag">{salePrice}$</h3>
                        <h5 className="originalPrice">{originalPrice}$</h5>
                    </div>
                {/* <div className="idkContainer">
                    <img className="logo" src={"https://www.cheapshark.com"+storeLogo} alt="store" />
                </div> */}
                </div>
            </div>
            </a>
        </article>
    )
}

export default Deal;