import "./../styles/header.css"
import FilterHeader from "./FilterHeader";
import { useState } from "react";

function Header ({changeFilter}) {

    const [showFilters, setShowFilters] = useState(false)

    return (
        <>
        <header>
            <h1>Sales Tracker</h1>
            <input type="search" id="titleSearch" placeholder="Search title..." />
            <div className="flexContainer">
                <button className="mediumFont" onClick={() => setShowFilters(!showFilters)}>Filter</button>
                <div>
                    <input type="checkbox" name="onSale" id="onSale" defaultChecked onChange={(e) => (changeFilter("sale"))} />
                    <label className="mediumFont" htmlFor="onSale">On Sale</label>
                </div>
            </div>
        </header>
        {showFilters && <FilterHeader changeFilter={changeFilter} /> }
    </>
    )
}

export default Header;