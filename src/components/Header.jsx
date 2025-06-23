// Header.jsx
import "./../styles/header.css";
import FilterHeader from "./FilterHeader";
import SearchBar from "./SearchBar";
import { useState } from "react";

function Header({ changeFilter, handleSearch, isDeal, toggleTheme }) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <header>
        <h1>Sales Tracker</h1>
        <SearchBar handleSearch={handleSearch} />
        <div className="flexContainer">
          {/* <button className="mediumFont" onClick={toggleTheme}>
            Toggle Theme
          </button> */}
          {/* <button disabled={!isDeal} className="mediumFont" onClick={() => setShowFilters(!showFilters)}>
            Filter
          </button> */}
          <div>
            <input disabled={!isDeal} type="checkbox" name="onSale" id="onSale" defaultChecked onChange={() => changeFilter("sale")} />
            <label className="mediumFont" htmlFor="onSale">On Sale</label>
          </div>
        </div>
      </header>
      {showFilters && <FilterHeader changeFilter={changeFilter} />}
    </>
  );
}

export default Header;
