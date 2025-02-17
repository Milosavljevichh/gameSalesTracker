import "./../styles/header.css"

function Header () {
    return (
        <header>
            <h1>Sales Tracker</h1>
            <div className="flexContainer">
                <button className="mediumFont">Filter</button>
                <div>
                    <input type="checkbox" name="onSale" id="onSale" />
                    <label className="mediumFont" htmlFor="onSale">On Sale</label>
                </div>
            </div>
        </header>
    )
}

export default Header;