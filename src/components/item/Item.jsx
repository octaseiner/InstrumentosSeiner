import "./item.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Item = ({id, brand, type, price, image}) => {

    return (
        <Fragment>
            <section key={id} className="item">

                <img src={image} alt="{type}" />
                
                <div className="typePriceDiv">
                    <h1 className="itemName">{brand} - {type}</h1>
                    <p className="itemPrice">Price: ${price}</p>
                    <Link className="button" to={ `/detail/${id}` }> See More </Link>
                </div>

            </section>
        </Fragment>
    )
}

