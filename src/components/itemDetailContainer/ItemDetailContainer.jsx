import { Fragment, useEffect, useState } from "react";
import './itemDetailContainer.css';
import { ItemDetail} from "../itemDetail/ItemDetail"
import { bringData } from '../../helpers/bringData'
import { useParams } from "react-router";

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState([])
    const [item, setItem] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)
        bringData()
        .then( (resp) => {
                if(!itemId){
                    console.log("no hay id")
                }
                else{
                    setItem( resp.find( prod => prod.id === Number(itemId) ) );
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])



    return (
        
        <Fragment>
            <section className="itemDetailContainer font">
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemDetail  product={item}/>
            }
            </section>
        </Fragment>
    )
}


