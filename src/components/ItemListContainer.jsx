import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <p>{greeting}, Tutora! </p>
            <hr />
            <ItemCount stock = {5} initial = {1} onAdd = {0}/>
        </div>
    )
}

export default ItemListContainer;
