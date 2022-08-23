import React, {useState, useEffect} from "react"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';

export default function Icon({ cant }) {
    return (
    <>
      <ShoppingCartCheckoutIcon />  ({cant}) 
    </>
    )
}