import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext'

export default function ItemDetail ( {productDetail} ) {
    
const {id, name, price, stock, img, descripcion} = productDetail;
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
        img,
        descripcion,
        quantity:carrito
    }
    setCompra(true)
    addItem(purchase)
}

    return (
    <div>
            <div className="cardDetail" style= {{border: '2px solid grey'}}>
            <p style={{ color: "red" }}>Producto: {name}</p>
            <p>Descripcion: {descripcion}</p>
            <p>Precio: {price}</p>
            <img src= {img} />
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


