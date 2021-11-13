import "./header.css";
import { Fragment } from "react";

const CartWidget = () => {
    return (
        <Fragment>
            <section className="sectionCartWidget">
                <button className="cartButton">
                    <i className="fas fa-shopping-cart"></i>
                    <div className="none cartCounter"></div>
                </button>
            </section>
        </Fragment>
    )
}

export default CartWidget;