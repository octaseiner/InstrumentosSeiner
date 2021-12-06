import "./cartWidget.css";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Context";

export const CartWidget = () => {

    const {totalAmount} = useContext(CartContext)

    return (
        <Fragment>
            <section className="sectionCartWidget">
                <Link className="cartLink" to="/cart">
                    <button className="cartButton">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cartCounter">{totalAmount()}</span>
                    </button>
                </Link>
            </section>
        </Fragment>
    )
}
