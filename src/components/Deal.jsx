function Deal({title, ratingText, thumb, savings, salePrice, originalPrice,ratingCount}) {

    let thumbnailSize = "/header.jpg"
    let pos = thumb.lastIndexOf("/")
    thumb = thumb.slice(0, pos) + thumbnailSize
    
    return (
        <article className='dealCard'>
            <img src={thumb} alt="deal thumbnail" />
            <h2 className="marginTop title">{title}</h2>
            <div className="flexContainer justifyBetween marginTop">
                <div>
                    <p>Steam Rating: <span className="accentColor">{ratingText}</span> </p>
                    <p>Rating Count: <span className="accentColor">{ratingCount}</span></p>
                </div>
                <div className="tag">
                    <h2 className="saleTag">-{Math.trunc(savings)}%</h2>
                    <h3 className="priceTag">{salePrice}$</h3>
                    <h5 className="originalPrice">{originalPrice}$</h5>
                </div>
            </div>
        </article>
    )
}

export default Deal;