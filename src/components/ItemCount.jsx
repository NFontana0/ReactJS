import React, {useState, useEffect} from "react"
import Button from '@mui/material/Button';

export default function ItemCount( {stock, initial, onAdd, carrito, setCarrito} ) {
    
const agregar = () => {
    if(carrito < stock) {
        setCarrito(carrito + 1);
    } else {
        alert("No tenemos mas stock!");
}
};

const sacar = () => {
    if(carrito > initial) {
        setCarrito(carrito - 1);
    } else {
        alert("el Carrito no puede ser negativo!");
}
};


return (

    <>
    <div>
        <Button variant="contained" color="error" onClick={sacar}> - </Button>

        <Button variant="contained" color="success" onClick= {agregar}> + </Button>
    </div>        
        <div className="d-flex justify-content-center mt-2">
            <Button variant="contained" color="secondary" onClick={() => { onAdd();}}>
            Sub-total : {carrito}
            </Button>
        </div></>
    )
}