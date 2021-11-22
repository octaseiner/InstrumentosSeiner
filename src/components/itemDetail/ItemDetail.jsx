import "./itemDetail.css";
import { Fragment } from "react";
import { ItemCount } from "../itemCount/ItemCount";

export const ItemDetail = ({product}) => {
    return (
        <Fragment>
            <section key={product.id} className="itemDetail">
                <h1 className="itemName">{product.name}</h1>
                <img src={product.image} alt="{product.type}" />
                
                <div className="typePriceDiv">
                    <p className="itemType">Type: {product.type}</p>
                    <p className="itemPrice">Description: {product.description}</p>
                    <p className="itemPrice">Price: {product.price}</p>
                </div>

                <section className="itemCountSection">
                    <ItemCount />
                </section>
            </section>
        </Fragment>
    )
}