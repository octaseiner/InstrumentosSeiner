import "./header.css";
import { Fragment } from "react";

const CartWidget = () => {
    return (
        <Fragment>
            <section>
                <button>
                    <i class="fas fa-shopping-cart"></i>
                    <div className="none"></div>
                </button>
            </section>
        </Fragment>
    )
}

export default CartWidget;