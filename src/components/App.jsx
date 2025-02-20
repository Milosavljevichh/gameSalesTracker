import { useState } from "react";
import Header from "./Header";
import DealContainer from "./DealContainer";

function App() {
    
    const defaultApiCall = `https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=0`

    const validFilterSort = {
        "Asc": "0",
        "Desc": "1",
    }
    
    const [appliedFilters, setappliedFilters] = useState({
        "Savings": false,
        "Price": false,
        "Reviews": false
    });
    const [filterSort, setFilterSort] = useState("&desc=0");
    const [isOnSale, setIsOnSale] = useState(true)

    function changeFilter (filter) {
        
        if (appliedFilters.hasOwnProperty(filter)) {
            let newObj = {...appliedFilters, [filter]: !appliedFilters[filter]}
            setappliedFilters(newObj);
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
        let filters = ""
        let onSaleParam = isOnSale ? "&onSale=1" : "&onSale=0";
        
        for (const [key, value] of Object.entries(appliedFilters)) {
            console.log(`${key}: ${value}`);
            if (value) filters += "&sortBy="+key
          }

        return defaultApiCall + onSaleParam + filters + filterSort 
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