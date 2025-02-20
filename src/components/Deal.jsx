function Deal({dealID, title, ratingText, thumb, savings, salePrice, originalPrice,ratingCount, storeId}) {

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
            <img src={newThumb} alt={title} onError={(e) => e.target.src = thumb}  />
            <div className="cardContent">
                <div>
                    <h2 className="marginTop title">{title}</h2>
                    <p>Steam Rating: <span className="accentColor">{ratingText}</span> </p>
                    <p>Rating Count: <span className="accentColor">{ratingCount}</span></p>
                </div>
                <div className="flexContainer justifyBetween marginTop">
                    <div className="tag">
                        <h2 className="saleTag">-{Math.trunc(savings)}%</h2>
                        <h3 className="priceTag">{salePrice}$</h3>
                        <h5 className="originalPrice">{originalPrice}$</h5>
                    </div>
                </div>
            </div>
            </a>
        </article>
    )
}

export default Deal;