import { useState } from "react";
import lista from "./items";
import ListView from "./ListView";


function List() {
    let [items, setItems] = useState(lista);

    function filterItems(searchPattern) {
        if (searchPattern === "") {
            setItems(lista);
        } else {
            let newItems = filterITemsBySearchPattern(searchPattern);
            setItems(newItems);
        }
    }

    function filterITemsBySearchPattern(searchPattern) {
        let filterItems = lista.filter( item => item.toLowerCase().includes(searchPattern.toLowerCase()));
        return filterItems;
    }

    return(
        <ListView elements={items} funcFilterItems={filterItems} />
    );    
}

export default List;