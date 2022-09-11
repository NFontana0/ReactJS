import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext'

export default function ItemDetail ( {producto} ) {
    
const {id, name, price, stock, idcategory, idproduct, img} = producto
const [compra, setCompra] = useState (false);
const [carrito, setCarrito] = useState (0);
const navegar = useNavigate()
const{addItem}=useCart()

const onAdd = () => {
    let purchase = {
        id, 
        name,
        price,
        stock,
        idcategory,
        idproduct,
        img,
        quantity:carrito
    }
    setCompra(true)
    addItem(purchase)
}

    return (
    <div>
            <div className="cardDetail" style= {{border: '2px solid grey'}}>
            <p style={{ color: "red" }}>Producto: {id}</p>
            <p>Nombre: {name}</p>
            <p>Precio: {price}</p>
            {img}
            { !compra
            ? <ItemCount stock={stock} initial={0} onAdd={onAdd} carrito={carrito} setCarrito={setCarrito}/>
            :   <div className="d-flex justify-content-center mt-2">
            <Button variant="contained" color="secondary" onClick={() => navegar ('/cart')}>
            Ir al carrito : {carrito}
            </Button>
            <Button variant="contained" color="primary" onClick={() => navegar ('/')}>
            Seguir comprando
            </Button>
                </div>}
            </div>
    </div>
    );
}


