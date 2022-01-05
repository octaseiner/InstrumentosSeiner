import "./itemListContainer.css";
import { Fragment, useEffect, useState } from "react";
import { ItemList } from "../itemList/ItemList"
import { useParams } from "react-router";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const { brandId } = useParams()

    useEffect(() => {

        setLoading(true)

        const productsRef = collection(db, "products")

        const q = brandId    ? query(productsRef, where("brand", "==", brandId))
                            : productsRef

        getDocs(q)
            .then((collection) => {
                const items = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProducts(items)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [brandId])

    return (
        <Fragment>
            <div className="mainSection">
                <h1 className="name font">The Cymbal Store</h1>
                <section className="listProducts font">
                {
                    loading 
                        ? <h2 className="">Loading...</h2> 
                        : <ItemList className="" products={products}/>
                }
                </section>
            </div>
        </Fragment>
    )
}
