import "./itemListContainer.css";
import { Fragment } from "react";


const ItemListContainer = ({greeting}) => {
    return (
        <Fragment>
            <h1 className="name font">The Music Store</h1>
            <section className="listProducts font">
                {greeting}
            </section>
        </Fragment>
    )
}

export default ItemListContainer;