import "./cartWidget.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    return (
        <Fragment>
            <section className="sectionCartWidget">
                <button className="cartButton">
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <div className="none cartCounter"></div>
                    </Link>
                </button>
            </section>
        </Fragment>
    )
}
