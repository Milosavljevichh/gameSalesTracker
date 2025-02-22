import "./../styles/header.css"

function FilterHeader({changeFilter}) {
    return (
        <div className="header">
            <div>
                <input defaultChecked type="radio" radioGroup="filters" name="filters" id="savings" value={"Savings"} onChange={(e) => (changeFilter(e.target.value))} />
                <label className="mediumFont" htmlFor="savings">Sale</label>
            </div>
            <div>
                <input type="radio" radioGroup="filters" name="filters" id="price" value={"Price"} onChange={(e) => (changeFilter(e.target.value))} />
                <label className="mediumFont" htmlFor="price">Price</label>
            </div>
            <div>
                <input type="radio" radioGroup="filters" name="filters" id="reviews" value={"Reviews"} onChange={(e) => (changeFilter(e.target.value))} />
                <label className="mediumFont" htmlFor="reviews">Reviews</label>
            </div>
            <div>
                <label htmlFor="filterOrder">Filter by: </label>
                <select name="filterOrder" id="filterOrder" onChange={(e) => changeFilter(e.target.value)}>
                    <option value="Asc">Ascending</option>
                    <option value="Desc">Descending</option>
                </select>
            </div>
        </div>
    )
}

export default FilterHeader;