import "./itemCount.css";
import { Fragment, useState } from "react";



export const ItemCount = ({stock, onAdd}) => {


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

    const checkZero = () => {
        return (number === 0);
    }

    const checkStock = () => {
        return (number >= stock);
    }
    
    const checkAddCart = () => {
        return ((number === 0 || number > stock));
    }


    return (
        <Fragment>
            <section className="itemCount">
                <div className="numberCount">
                    <button className="minus" disabled={checkZero()}  onClick={minus}> - </button>
                    <p className="counter">
                        {`${number}`}
                    </p>
                    <button className="plus" disabled={checkStock()} onClick={plus}> + </button>
                </div>

                <div className="addButton">
                    <button className="addToCart" disabled={checkAddCart()} onClick={() => onAdd(number)}> Add to cart</button>
                </div>
            </section>
        </Fragment>
    )
    
}
