import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount";

export default function ItemDetail ( {producto} ) {
    
const {id, name, price, stock, idcategory, idproduct, img} = producto

console.log(name)
    return (
    <div>
            <div className="cardDetail" style= {{border: '2px solid grey'}}>
            <p style={{ color: "red" }}>Producto: {id}</p>
            <p>Nombre: {name}</p>
            <p>Precio: {price}</p>
            {img}
            <ItemCount stock={stock} initial={0}/>
            </div>
    </div>
    );
}


