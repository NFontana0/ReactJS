import React, {useState, useEffect} from "react"
import NavBar from "./NavBar";

export default function ItemCount( {item, onAdd, carrito, setCarrito}) {
    
    //El carrito lo defini en la App.js para poder usar el totalizador de carrito directamente en el Icono que muestra el NavBar.

const agregar = () => {
    if(carrito < item.stock) {
        setCarrito(carrito + 1);
    } else {
        alert("No tenemos mas stock!");
}
};

const sacar = () => {
    if(carrito >  item.initial) {
        setCarrito(carrito - 1);
    } else {
        alert("el Carrito no puede ser negativo!");
}
};



    return (

    <>
    <h1>Carrito: {carrito}</h1>
        <button
            onClick= {agregar}>
            Sumar Carrito</button>
        
        <button
            onClick={sacar}>
            Restar Carrito</button>
            
            
        <div className="d-flex justify-content-center mt-2">
            <button
            variant="outline-secondary"
            onClick={() => {
                onAdd();
            }}
            >
            Agregar al carrito: {carrito}
            </button>
        </div>     


        <div>Hola Futer</div></>
    )
}