import { createContext, useState } from "react";

export const CartContext = createContext()



export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item) => {
        setCart( [...cart, item] )
    }

    const removeItem = (itemId) => {
        setCart( cart.filter(prod => prod.id !== itemId))
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalAmount = () => {
        return cart.reduce((totalCounter, prod) => totalCounter + prod.counter, 0)
    };

    const totalPrice = () => {
        return cart.reduce((totalCounter, prod) => totalCounter + (prod.price * prod.counter), 0)
    };

    return (
        <CartContext.Provider value={ {
            cart,
            addItem,
            removeItem,
            clearCart,
            isInCart,
            totalAmount,
            totalPrice
        }}>

            {children}

        </CartContext.Provider>
    )
}