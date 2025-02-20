import { useState } from "react";
import Header from "./Header";
import DealContainer from "./DealContainer";

function App() {
    
    const defaultApiCall = `https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=0`
    const validFilterTypes = {
        "Savings": "Savings",
        "Price": "Price",
        "Reviews": "Reviews"
    }

    const validFilterSort = {
        "Asc": "0",
        "Desc": "1",
    }
    
    const [filterBy, setFilterBy] = useState("");
    const [filterSort, setFilterSort] = useState("&desc=0");
    const [isOnSale, setIsOnSale] = useState(true)

    function changeFilter (filter) {
        console.log(filter)
        if (validFilterTypes.hasOwnProperty(filter)) {
            let str = "&sortBy="+filter;
            setFilterBy(str);
        }

        if (validFilterSort.hasOwnProperty(filter)) {
            let str = "&desc="+validFilterSort[filter];
            setFilterSort(str);
        }

        if (filter === "sale") {
            setIsOnSale(!isOnSale)
        }
    }

    function createApiCall() {
        let onSaleParam = isOnSale ? "&onSale=1" : "&onSale=0";
        return defaultApiCall + onSaleParam + filterBy + filterSort 
    }
    
    return (
        <>
            <Header changeFilter={changeFilter} />
            <main>
                <DealContainer apiCall={createApiCall()} />
            </main>
        </>
    )
}

export default App;