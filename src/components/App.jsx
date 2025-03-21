import { useEffect, useState } from "react";
import Header from "./Header";
import DealContainer from "./DealContainer";

function App() {
    
    const defaultApiCall = `https://www.cheapshark.com/api/1.0/`
    const dealsLink = "deals?storeID=1&pageSize=25&lowerPrice=0"

    const validFilterTypes = {
        "Savings": "Savings",
        "Price": "Price",
        "Reviews": "Reviews"
    }

    const validFilterSort = {
        "Asc": "0",
        "Desc": "1",
    }
    
    const [filterBy, setFilterBy] = useState("&sortBy=Savings");
    const [filterSort, setFilterSort] = useState("&desc=0");
    const [isOnSale, setIsOnSale] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)
    const [searchTerm, setSearchTerm] = useState("")
    const [isDeal, setIsDeal] = useState(false)
    const [modifiedApiCall, setModifiedApiCall] = useState("")

      // Check if 'apiCall' includes "deals" and set the isDeal state accordingly
      useEffect(() => {
        setIsDeal(modifiedApiCall.slice(35, 40).includes("deals"));
      }, [modifiedApiCall]);

      useEffect(()=>{
        setModifiedApiCall(createApiCall())
      }, [filterBy,filterSort,isOnSale,currentPage,searchTerm])

    function changeFilter (filter) {
        
        if (validFilterTypes.hasOwnProperty(filter)) {
            let str = "&sortBy="+filter;
            setFilterBy(str);
            setCurrentPage(0)
        }

        if (validFilterSort.hasOwnProperty(filter)) {
            let str = "&desc="+validFilterSort[filter];
            setFilterSort(str);
        }

        if (filter === "sale") {
            setIsOnSale(!isOnSale)
            setCurrentPage(0)
        }
    }

    function changePage(ind){
        if (currentPage == 0 && ind < 0) return;
        setCurrentPage(currentPage + ind)
    }

    function createApiCall() {
        let onSaleParam = isOnSale ? "&onSale=1" : "&onSale=0";
        if(!searchTerm) {
            return defaultApiCall + dealsLink + onSaleParam + filterBy + filterSort  +  "&pageNumber=" +    currentPage
        } else {
            return defaultApiCall + "games?title=" + searchTerm
        }
    }

    function handleSearch(term) {
        setSearchTerm(term);
    }

    return (
        <>
            <Header changeFilter={changeFilter} handleSearch={handleSearch} isDeal={isDeal} />
            <main>
                <DealContainer apiCall={createApiCall()} changePage={changePage} pageNum={currentPage} isDeal={isDeal} />
            </main>
        </>
    )
}

export default App;