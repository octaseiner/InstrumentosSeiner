import "./itemListContainer.css";
import { Fragment } from "react";
import { Item } from "./Item";


export const ItemList = ({products}) => {
    return (
        <Fragment>
            <section className="itemsSection">
                {products.map((prod) => <Item product={prod} />)}
            </section>
        </Fragment>
    );
}

