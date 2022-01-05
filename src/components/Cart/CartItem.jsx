import { React, useContext }  from "react"
import { CartContext } from "../../context/Context"
import "./cart.css";

export const CartItem = ({brand, image, type, price, id, counter}) => {

    const {removeItem} = useContext(CartContext)

    return (
        <div>
            <div className="cartItem">
                <img src={image} alt={image} />
                <h3>{brand} - {type} (ID: #{id})</h3>
                <p> ${price}</p>
                <p>Count: {counter}</p>
                <button className="button" onClick={() => {removeItem(id)}}>Delete</button>
            </div>
        </div>
    )
}