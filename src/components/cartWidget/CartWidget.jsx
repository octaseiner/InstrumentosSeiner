import "./cartWidget.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Context";

export const CartWidget = () => {

    const {totalAmount, cart} = useContext(CartContext)

    return (
        <section className={cart.length === 0 ? 'hidden widget' : 'sectionCartWidget widget'}>
            <Link className="cartLink" to="/cart">
                <button className="cartButton">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cartCounter">{totalAmount()}</span>
                </button>
            </Link>
        </section>
    )
}
