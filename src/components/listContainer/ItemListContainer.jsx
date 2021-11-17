import "./itemListContainer.css";
import { Fragment } from "react";
import ItemList from "./ItemList"


const ItemListContainer = ({greeting}) => {
    return (
        <Fragment>
            <h1 className="name font">The Music Store</h1>
            <section className="listProducts font">
                {greeting}
            </section>

            <ItemList />
        </Fragment>
    )
}

export default ItemListContainer;