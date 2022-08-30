import React, {useState, useEffect} from "react"
import Item from "./Item";

export default function ItemList( {productos} ) {
    


    return (
    <div>
        {productos.map((item) => (
            <Item productos={productos} item={item} />
        ))}
    </div>
    );
}




