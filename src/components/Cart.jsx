import React, {useState, useEffect} from "react"
import { useCart } from '../context/CartContext'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import CartItem from "./CartItem";

const Cart = () => {

    const {cart, cartTotal, clear}=useCart()
    const navegar = useNavigate()

    return (
        <div>
            {
                !cart.length
                ?<div>
                    <h2>Tu carrito esta vacio</h2>
                    <h4>Te invitamos a ver nuestros productos</h4>
                    <button onClick={()=>navegar('/')}>Mira nuestros productos</button>
                </div>
                :<div className="cardCarritoTotal2">
                <h2>Tu carrito:</h2>
                    {cart.map ((compra)=> <CartItem key={compra.id} compra={compra}/>)}
                    <span>Total a pagar : ${cartTotal()}</span>
                    <div className="cardCarritoTotal3">
                    <Button variant="outlined" color="error" onClick={clear}> Vaciar Carrito </Button>
                    <Button variant="outlined" color="success"> Terminar Compra </Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart