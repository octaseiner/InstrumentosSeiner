import { Fragment, useContext, useEffect, useState } from "react";
import './itemDetailContainer.css';
import { ItemDetail} from "../itemDetail/ItemDetail"
import { bringData } from '../../helpers/bringData'
import { useParams } from "react-router";
import { CartContext } from "../../context/Context";

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState([])
    const [item, setItem] = useState(false)
    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        bringData()
        .then( (resp) => {
                if(!itemId){
                    console.log("no hay id");
                }
                else{
                    setItem( resp.find( prod => prod.id === Number(itemId) ) );
                }
            })
            .catch( (error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [itemId])

    // const onAdd = (number) => {
    //     console.log({...item, quantity: number})
    //     if (quantity > 0) {
    //         addCart(products)
    //     }
    //         // setCart(true)
    // }


    return (
        
        <Fragment>
            <section className="itemDetailContainer font">
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemDetail  {...item}/>
                    // : <ItemDetail  product={item} onAdd={onAdd} cart={cart}/>
            }
            </section>
        </Fragment>
    )
}


