import React, {useState, useEffect} from "react"
import { useCart } from '../context/CartContext'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';


const CartWidget = () => {

    const {cartQuantity}=useCart()

    return (
        <div>
            <ShoppingCartCheckoutIcon />
            <span>{cartQuantity() || ''}</span>
        </div>
    )
}

export default CartWidget