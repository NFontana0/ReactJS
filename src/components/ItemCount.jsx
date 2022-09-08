import React, {useState, useEffect} from "react"
import NavBar from "./NavBar";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ItemCount( {stock, initial} ) {
    
    //El carrito lo defini en la App.js para poder usar el totalizador de carrito directamente en el Icono que muestra el NavBar.

const [carrito, setCarrito] = useState (initial);

function onAdd() {}


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