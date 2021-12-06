import "./itemCount.css";
import { Fragment } from "react";



export const ItemCount = ({counter, setCounter, handleAdd, max}) => {

    const plus = () => {
        if(counter===max){
            return
        } else if (counter < max){
            setCounter( counter + 1 );
        }
    }

    const minus = () => {
        if(counter===0){
            return
        }else if (counter > 0){
            setCounter( counter - 1 );
        }
        
    }

    const checkZero = () => {
        return (counter === 0);
    }

    const checkStock = () => {
        return (counter >= max);
    }
    
    const checkAddCart = () => {
        return ((counter === 0 || counter > max));
    }


    return (
        <Fragment>
            <section className="itemCount">
                <div className="numberCount">
                    <button className="minus" disabled={checkZero()}  onClick={minus}> - </button>
                    <p className="counter" onChange={checkZero, checkStock, checkAddCart}>
                        {`${counter}`}
                    </p>
                    <button className="plus" disabled={checkStock()} onClick={plus}> + </button>
                </div>

                <div className="addButton">
                    <button className="addToCart" disabled={checkAddCart()} onClick={handleAdd}> Add to cart</button>
                </div>
            </section>
        </Fragment>
    )
    
}
