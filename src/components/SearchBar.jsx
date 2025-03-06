function SearchBar({handleSearch}) {

    return (
        <input type="search" id="titleSearch" placeholder="Search title..." onChange={(e)=>handleSearch(e.target.value)} />
    )
}

export default SearchBar;