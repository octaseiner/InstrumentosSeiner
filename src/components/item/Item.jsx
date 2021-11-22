import "./item.css";
import { Fragment } from "react";
import { ItemCount } from "../itemCount/ItemCount";

export const Item = ({product}) => {

    return (
        <Fragment>
            <section key={product.id} className="item">
                <h1 className="itemName">{product.name}</h1>
                <img src={product.image} alt="{product.type}" />
                
                <div className="typePriceDiv">
                    <p className="itemType">Type: {product.type}</p>
                    <p className="itemPrice">Price: {product.price}</p>
                </div>

                <section className="itemCountSection">
                    <ItemCount />
                </section>
            </section>
        </Fragment>
    )
}

