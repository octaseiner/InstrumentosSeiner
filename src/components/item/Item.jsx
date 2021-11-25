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
                    <p className="itemPrice">Price: {product.price}</p>
                </div>

                <div>
                    <button> See More</button>
                </div>
                <section className="itemCountSection">
                    <ItemCount />
                </section>
            </section>
        </Fragment>
    )
}

