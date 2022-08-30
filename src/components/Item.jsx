import React, {useState, useEffect} from "react"

export default function Item( {item} ) {

    
    return (
        <div style= {{border: '10px solid black'}}>
            <p style={{ color: "red" }}>Producto: {item.cod}</p>
            <p>Nombre: {item.name}</p>
            <p>Precio: {item.price}</p>
        </div>
    );
}

