import { useState, useEffect } from "react";

function Deal({dealID, title, ratingText, thumb, savings, salePrice, originalPrice,ratingCount, storeId, storeLogo, storeName}) {
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
    const [isTablet, setIsTablet] = useState(() => window.innerWidth > 768 && window.innerWidth <= 1024);

    useEffect(() => {
    const checkScreenSize = () => {
        const width = window.innerWidth;
        setIsMobile(width <= 768);
        setIsTablet(width > 768 && width <= 1024);
    };

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    function resizeThumb(pos, size) {
        return thumb.slice(0, pos) + size
    }

    function checkForSteamThumb() {
        return storeId == steamId
        // ? resizeThumb(thumb.lastIndexOf("/"), "/header.jpg")
        ? thumb
        : thumb; 
    }

    const steamId = "1"
    
    let newThumb = isMobile ? resizeThumb(thumb.lastIndexOf("/"), "/capsule_184x69.jpg") : isTablet ? resizeThumb(thumb.lastIndexOf("/"), "/capsule_231x87.jpg") : checkForSteamThumb()
    
    return (
        
        <article className='dealCard'>
            <a href={`https://www.cheapshark.com/redirect?dealID=${dealID}`} target='blank'>

            
            <div className="cardContent">
                <div className="imgContainer">
                    <img src={newThumb} alt={title} onError={(e) => e.target.src = thumb} className="thumb" loading="lazy"  />
                    <div>
                        <h2 className="marginTop title">{title}</h2>
                        <div className="tag">
                            <h2 className="saleTag">-{Math.trunc(savings)}%</h2>
                            <h3 className="priceTag">{salePrice}$</h3>
                            <h5 className="originalPrice">{originalPrice}$</h5>
                        </div>
                    </div>
                </div>
                <div className="textContent">
                    <div className="textInfo">
                        <p>Steam Rating:  <span className="defaultAccentColor">{ratingText ? ratingText : "Not Available"}</span></p>
                        <p>Rating Count: <span className="defaultAccentColor">{ratingCount}</span></p>
                        <p>Store: <span className="defaultAccentColor">{storeName}</span></p>
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