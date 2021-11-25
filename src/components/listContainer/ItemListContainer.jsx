import "./itemListContainer.css";
import { Fragment, useEffect, useState } from "react";
import { ItemList } from "../itemList/ItemList"
import { bringData } from '../../helpers/bringData'
import { useParams } from "react-router";


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const { typeId } = useParams()

    useEffect(() => {

        setLoading(true)
        bringData()
            .then( (resp) => {

                if (!typeId) {
                    setProducts(resp)
                } else { 
                    setProducts(resp.filter((prod => prod.type === typeId)))
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [typeId])

    return (
        <Fragment>
            <h1 className="name font">The Music Store</h1>
            <section className="listProducts font">
            {
                loading 
                    ? <h2 className="">Loading...</h2> 
                    : <ItemList className="" products={products}/>
            }
            </section>
        </Fragment>
    )
}
