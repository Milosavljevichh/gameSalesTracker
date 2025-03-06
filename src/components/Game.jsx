function Game({dealID, title, thumb, salePrice}) {
    
    let newThumb = resizeThumb(thumb.lastIndexOf("/"), "/header.jpg")

    function resizeThumb(pos, size) {
        return thumb.slice(0, pos) + size
    }
    
    return (
        
        <article className='dealCard'>
            <a href={`https://www.cheapshark.com/redirect?dealID=${dealID}`} target='blank'>
            
            <div className="cardContent">
                <img src={newThumb} alt={title} onError={(e) => e.target.src = thumb} className="thumb" loading="lazy"  />
                <div className="textContent">
                    <h2 className="marginTop title">{title}</h2>

                <div className="idkContainer">
                    <div className="tag">
                        <h3 className="priceTag">{salePrice}$</h3>
                    </div>
                </div>


                </div>
            </div>
            </a>
        </article>
    )
}

export default Game;