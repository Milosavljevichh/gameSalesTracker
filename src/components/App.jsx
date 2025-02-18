import { useState } from "react";
import Header from "./Header";
import DealContainer from "./DealContainer";

function App() {
    
    const defaultApiCall = "https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=0"
    const validFilters = {
        "0": "",
        "Savings": "Savings",
        "Price": "Price",
        "Reviews": "Reviews"
    }
    
    const [filterBy, setFilterBy] = useState("");
    const [filterSort, setFilterSort] = useState("&desc=0");

    function changeFilterBy (filter) {
        
        if (validFilters.hasOwnProperty(filter)) {
            let str = "&sortBy="+filter;
            setFilterBy(str);
        }
    }

    function createApiCall() {
        return defaultApiCall + filterBy + filterSort
    }
    
    return (
        <>
            <Header changeFilter={changeFilterBy} />
            <main>
                <DealContainer apiCall={createApiCall()} />
            </main>
        </>
    )
}

export default App;