import React, {useState, useEffect} from "react"
import { useCart } from '../context/CartContext'
import Button from '@mui/material/Button';


const CartItem = ({compra}) => {

    const {removeItem}=useCart()

    return (
        <div className="cardCarritoTotal">
            <img src={compra.img} alt={compra.name}/>
            <span>{compra.name}</span>
            <span>{compra.quantity}</span>
            <span>{compra.price}</span>
            <Button variant="contained" color="error" onClick={()=>removeItem(compra.id)}> Eliminar Productos </Button>
        </div>
    )
}

export default CartItem