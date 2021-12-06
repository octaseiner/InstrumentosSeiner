import "./item.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Item = ({id, name, price, image}) => {

    return (
        <Fragment>
            <section key={id} className="item">

                <h1 className="itemName">{name}</h1>
                <img src={image} alt="{type}" />
                
                <div className="typePriceDiv">
                    <p className="itemPrice">Price: {price}</p>
                </div>

                <div>
                    <button><Link to={ `/detail/${id}` }> See More </Link></button>
                </div>

            </section>
        </Fragment>
    )
}

