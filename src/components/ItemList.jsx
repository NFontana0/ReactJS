import React, {useState, useEffect} from "react"
import Item from "./Item";

export default function ItemList( {productos} ) {
    


    return (
    <div className="cardContainer">
        {productos.map((item) => (
            <Item productos={productos} item={item} idproduct={item.idproduct} />
        ))}
    </div>
    );
}




