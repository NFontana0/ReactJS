import React, {useState, useEffect} from "react"

export default function ItemDetail ( {producto} ) {
    


    return (
    <div>
        {producto.map((item) => (
            
            <div style= {{border: '10px solid black'}}>
            <p style={{ color: "red" }}>Producto: {item.cod}</p>
            <p>Nombre: {item.name}</p>
            <p>Precio: {item.price}</p>
            {item.img}
        </div>
            
        ))}
    </div>
    );
}


