import { Fragment, useContext } from "react";
// import { Link } from "react-router-dom";
import { CartContext } from "../../context/Context";
import { CartItem } from "./CartItem";

export const Cart = () => {

    const {cart, clearCart, totalPrice} = useContext(CartContext)


    return (
        <Fragment>
            {/* {
                cart.lenght > 0
                ? <> */}
                    <h2> Cart </h2>
                    <section>
                        {
                            cart.map((prod) => <CartItem {...prod}/>)
                        }
                    </section>

                    <div>
                        <h3>Total price: ${totalPrice()}</h3>
                    </div>

                    <div>
                        <button onClick={clearCart}>Empty</button>
                        <button>Finish buying</button>
                    </div>
                {/* </>
                // : <>
                    <h2> Your cart is empty </h2>
                    <Link to="/">Return to Home</Link>
                </>
            } */}
        </Fragment>
    )
}