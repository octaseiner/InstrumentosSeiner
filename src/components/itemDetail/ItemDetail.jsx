import "./itemDetail.css";
import { Fragment, useContext, useState } from "react";
import { ItemCount } from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Context";



export const ItemDetail = ({name, brand, id, price, description, image, type, stock}) => {

    const {isInCart, addItem} = useContext(CartContext)
    const [counter, setCounter] = useState(1)
    const [added, setAdded] = useState(false)


    const handleAdd = () => {
        if (counter > 0)
        addItem({
            id,
            name,
            price,
            image,
            brand,
            type,
            counter
        })

        setAdded(true)
    }






    return (
        <Fragment>
            <section key={id} className="itemDetail">
                <h1 className="itemName">{brand} {type}</h1>
                <img src={image} alt="{type}" />
                
                <div className="typePriceDiv">
                    <p className="itemType">Type: {type}</p>
                    <p className="itemPrice">Description: {description}</p>
                    <p className="itemPrice">Price: ${price}</p>
                </div>

                <div className="itemCountSection">
                    {!isInCart(id) 
                        ?   <ItemCount 
                                max={stock} 
                                counter={counter} 
                                setCounter={setCounter} 
                                handleAdd={handleAdd} 
                            />
                        : <button className="button"><Link className="link" to="/cart"> Buy </Link></button>
                    }
                </div>

            </section>
        </Fragment>
    )
}