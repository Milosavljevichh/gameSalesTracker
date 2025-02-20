function Deal({dealID, title, ratingText, thumb, savings, salePrice, originalPrice,ratingCount, storeId, storeLogo}) {

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
                <img src={newThumb} alt={title} onError={(e) => e.target.src = thumb} className="thumb"  />
                <div className="textContent">
                    <h2 className="marginTop title">{title}</h2>

                <div className="idkContainer">
                    <div>
                        <p>Steam Rating:  </p>
                        <p>Rating Count: </p>
                    </div>
                    <div>
                        <p className="accentColor">{ratingText ? ratingText : "Not Available"}</p>
                        <p className="accentColor">{ratingCount}</p>
                    </div>
                    <div className="tag">
                        <h2 className="saleTag">-{Math.trunc(savings)}%</h2>
                        <h3 className="priceTag">{salePrice}$</h3>
                        <h5 className="originalPrice">{originalPrice}$</h5>
                    </div>
                    <img className="logo" src={"https://www.cheapshark.com"+storeLogo} alt="store" />
                </div>


                </div>
            </div>
            </a>
        </article>
    )
}

export default Deal;