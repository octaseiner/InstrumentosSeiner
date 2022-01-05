import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Context";
import { CartItem } from "./CartItem";
import "./cart.css";

export const Cart = () => {

    const {cart, clearCart, totalPrice} = useContext(CartContext)


    return (
        <Fragment>
            {
                cart.length > 0
                ? <div className="cart">
                    <h2 className="cartTittle"> Cart </h2>
                    <section>
                        {
                            cart.map((prod) => <CartItem key={prod.id} {...prod}/>)
                        }
                    </section>

                    <div className="totalPrice">
                        <h3>Total price: ${totalPrice()}</h3>

                        <div>
                            <button className="button" onClick={clearCart}>Empty</button>
                            <button className="button finishBuyingButton"><Link className="link" to="/checkout">Finish buying</Link></button>
                        </div>
                    </div>
                </div>
                : <div className="cart">
                    <h2> Your cart is empty </h2>
                    <button className="button"><Link className="link" to="/">Return to Home</Link></button>
                </div>
            }
        </Fragment>
    )
}