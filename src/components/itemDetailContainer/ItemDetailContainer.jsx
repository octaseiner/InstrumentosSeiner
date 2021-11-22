import { Fragment, useEffect, useState } from "react";
import './itemDetailContainer.css';
import { ItemDetail} from "../itemDetail/ItemDetail"
import { bringData } from '../../helpers/bringData'

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState([])
    const [products, setProducts] = useState(false)

    useEffect(() => {

        setLoading(true)
        bringData()
            .then( (resp) => {
                setProducts(resp)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [products])



    return (
        
        <Fragment>
            <section className="itemDetailContainer font">
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemDetail  product={products[0]}/>
            }
            </section>
        </Fragment>
    )
}


