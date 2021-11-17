import "./itemListContainer.css";
import { Fragment } from "react";
import Item from "./Item"


const ItemList = () => {
    return (
        <Fragment>
            <section className="itemsSection">
                <Item />
            </section>
        </Fragment>
    )
}

export default ItemList;