import "./itemList.css";
import { Fragment } from "react";
import { Item } from "../item/Item";


export const ItemList = ({products}) => {
    return (
        <Fragment>
            <section className="itemsSection">
                {products.map((prod) => <Item {...prod} />)}
            </section>
        </Fragment>
    );
}

