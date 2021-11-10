import "./header.css";
import { Fragment } from "react";

const CartWidget = () => {
    return (
        <Fragment>
            <section class="sectionCartWidget">
                <button className="cartButton">
                    <i class="fas fa-shopping-cart"></i>
                    <div className="none cartCounter"></div>
                </button>
            </section>
        </Fragment>
    )
}

export default CartWidget;