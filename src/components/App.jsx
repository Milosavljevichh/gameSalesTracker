import { useState } from "react";
import Header from "./Header";
import DealContainer from "./DealContainer";

function App() {
    
    const defaultApiCall = `https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=30&lowerPrice=0&sortBy=Savings`
    const validFilterTypes = {
        "Savings": "Savings",
        "Price": "Price",
        "Reviews": "Reviews"
    }

    const validFilterSort = {
        "Asc": "0",
        "Desc": "1",
    }
    
    const [filterBy, setFilterBy] = useState("Savings");
    const [filterSort, setFilterSort] = useState("&desc=0");
    const [isOnSale, setIsOnSale] = useState(true)
    const [currentPage, setCurrentPage] = useState(0)

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
        }
    }

    function changePage(ind){
        if (currentPage == 0 && ind < 0) return;
        setCurrentPage(currentPage + ind)
    }

    function createApiCall() {
        let onSaleParam = isOnSale ? "&onSale=1" : "&onSale=0";
        return defaultApiCall + onSaleParam + filterBy + filterSort  +  "&pageNumber=" +    currentPage
    }
    
    return (
        <>
            <Header changeFilter={changeFilter} />
            <main>
                <DealContainer apiCall={createApiCall()} changePage={changePage} pageNum={currentPage} />
            </main>
        </>
    )
}

export default App;