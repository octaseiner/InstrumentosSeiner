import "./itemCount.css";
import { Fragment, useState } from "react";


const ItemCount = () => {

    const [number, setNumber] = useState(0)

    const plus = () => {
        setNumber (number + 1)
    }

    const minus = () => {
        if(number === 0){
            return;  
        }

        setNumber (number - 1)
    }


    return (
        <Fragment>
            <section className="itemCount">
                <div className="numberCount">
                    <button className="minus" onClick={minus}> - </button>
                    <p className="counter">
                        {`${number}`}
                    </p>
                    <button className="plus" onClick={plus}> + </button>
                </div>

                <div className="addButton">
                    <button className="addToCart">Add to cart</button>
                </div>

            </section>
        </Fragment>
    )
    
}

export default ItemCount;