import React, {useState, useEffect} from "react"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';

export default function Icon({ carrito }) {
    return (
    <>
      <ShoppingCartCheckoutIcon />  ({carrito}) 
    </>
    )
}