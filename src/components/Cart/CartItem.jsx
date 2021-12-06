import { React, useContext }  from "react"
import { CartContext } from "../../context/Context"

export const CartItem = ({name, price, id, counter}) => {

    const {removeItem} = useContext(CartContext)

    return (
        <div>
            <h3>{name} (#{id})</h3>
            <p>Price: ${price}</p>
            <p>{counter}</p>
            <button onClick={() => {removeItem(id)}}>Delete</button>
        </div>
    )
}