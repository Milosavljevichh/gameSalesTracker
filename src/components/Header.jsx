import "./../styles/header.css"
import FilterHeader from "./FilterHeader";
import { useState } from "react";

function Header ({changeFilter}) {

    const [showFilters, setShowFilters] = useState(false)

    function toggleFilter() {
        setShowFilters(!showFilters)
    }

    return (
        <>
        <header>
            <h1>Sales Tracker</h1>
            <div className="flexContainer">
                <button className="mediumFont" onClick={() => toggleFilter()}>Filter</button>
                <div>
                    <input type="checkbox" name="onSale" id="onSale" />
                    <label className="mediumFont" htmlFor="onSale">On Sale</label>
                </div>
            </div>
        </header>
        {showFilters && <FilterHeader changeFilter={changeFilter} /> }
    </>
    )
}

export default Header;