import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState ([])

    const addItem = (item) => {
        const existInCart = cart.find((prod) => prod.id === item.id)
        if(existInCart){
            const carritoActualizado = cart.map((prod)=>{
                if(prod.id === item.id){
                    return {...prod, quantity:prod.quantity + item.quantity}
                }else {
                    return prod
                }
                
            })
            setCart(carritoActualizado)
        }else{

        setCart([...cart, item])
    }
    }
    const clear = () => {
        setCart([])
    }
    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id !== id))
    }
    const isInCart = (id) => {
        return cart.some((prod)=> prod.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acu, prod) => acu += prod.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acu, prod) => acu += prod.price * prod.quantity, 0)
    }

    return (
        <CartContext.Provider value={{cart, clear, removeItem, isInCart, addItem, cartQuantity, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)