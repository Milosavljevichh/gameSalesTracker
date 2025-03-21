import "../styles/gameSearchCard.css"

function Game({dealID, title, thumb, salePrice}) {
    
    let newThumb = resizeThumb(thumb.lastIndexOf("/"), "/header.jpg")

    function resizeThumb(pos, size) {
        return thumb.slice(0, pos) + size
    }
    
    return (
        
        <article className='gameCard'>
            <a href={`https://www.cheapshark.com/redirect?dealID=${dealID}`} target='blank'>
            
            <div className="gameContent">
                <img src={newThumb} alt={title} onError={(e) => e.target.src = thumb} className="thumb" loading="lazy"  />
                <h2 className="marginTop title">{title}</h2>
                <h3 className="gamePriceTag">{salePrice}$</h3>
            </div>
            </a>
        </article>
    )
}

export default Game;