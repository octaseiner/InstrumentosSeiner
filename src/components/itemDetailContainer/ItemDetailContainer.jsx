import { Fragment, useEffect, useState } from "react";
import './itemDetailContainer.css';
import { ItemDetail} from "../itemDetail/ItemDetail"
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState([])
    const [item, setItem] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, "products", itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            }) 
            .finally(() => {
                setLoading(false);
            })
    }, [itemId])

    return (
        
        <Fragment>
            <section className="itemDetailContainer font">
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemDetail  {...item}/>
            }
            </section>
        </Fragment>
    )
}

