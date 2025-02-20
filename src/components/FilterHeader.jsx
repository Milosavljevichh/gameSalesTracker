import "./../styles/header.css"

function FilterHeader({changeFilter}) {
    return (
        <div className="header">
            <div>
                <label htmlFor="filterBy">Filter by: </label>
                <select name="filterBy" id="filterBy" onChange={(e) => changeFilter(e.target.value)}>
                    <option value="Savings">Sale</option>
                    <option value="Price">Price</option>
                    <option value="Reviews">Reviews</option>
                </select>
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