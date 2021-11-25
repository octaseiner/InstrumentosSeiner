import "./item.css";
import { Fragment } from "react";
import { ItemCount } from "../itemCount/ItemCount";
import { Link } from "react-router-dom";

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
                    <button><Link to={ `/detail/${product.id}` }> See More </Link></button>
                </div>

                <section className="itemCountSection">
                    <ItemCount />
                </section>

            </section>
        </Fragment>
    )
}

