import { Fragment, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../../context/Context";
import { validarDatos } from "../../helpers/validaciones";
import { collection, Timestamp, writeBatch, addDoc, query, where, documentId, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import Swal from "sweetalert2";
import "./checkout.css";

export const Checkout = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext)
    
    const [values, setValues] = useState({
        name: "",
        surname: "",
        email: "",
        emailConfirm: ""
    })

    const handleInputChange = (e) => {
        setValues ({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        /* VALIDO DATOS */
        if (!validarDatos(values)) {
            return
        }

        /* OBJETO DE ORDEN */
        const order = {
            buyer: {...values},
            items: cart,
            total: totalPrice(),
            date: Timestamp.fromDate( new Date() )
        }

        /* BATCH DE ACTUALIZACION */
        const batch = writeBatch(db)

        /* REFERENCIAS A OREDENES Y PRODUCTOS EN FIREBASE*/
        const orderRef = collection(db, "orders")
        const productsRef = collection(db, "products")

        /* QUERY PARA QUE ME TRAIGAN DOCUMENTOS QUE COINCIDAN CON ID DEL CARRITO */
        const q = query(productsRef, where(documentId(), "in", cart.map(el => el.id)))

        /* ARRAY VACIO DONDE PUSHEARE LO QUE ESTA SIN SOTCK */
        const outOfStock = []

        /* GUARDO LA INFO DE Q EN PRODUCTS */
        const products = await getDocs(q)

        /*  */
        products.docs.forEach((doc) => {
            /* POR CADA DOCUMENTO BUSCO SU COPIA EN EL CARRITO PARA COMPARAR */
            const itemToUpdate = cart.find((prod) => prod.id === doc.id)

            /* SI STOCK >= CANTIDAD DE ITEM EN EL CARRITO*/
            if (doc.data().stock >= itemToUpdate.counter) {

                /* ORDEN DE ACTUALIZACION */
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.counter
                })
            } else {
                /* PUSHEO UNA COPIA DE QUE ES LO QUE ESTA SIN STOCK */
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {
            /* SI ESTA VACIO*/
            /* AGREGO DOCUMENTO */
            addDoc(orderRef, order)
                .then((res) => {
                    /* COMMITEO */
                    batch.commit()

                    Swal.fire({
                        icon: "succes",
                        title: "Su orden ha sido registrada",
                        text: `su numero de orden es: ${res.id}`
                })
                clearCart()
            })
        } else {
            /* SINO ALERT DE LO QUE ESTA SIN STOCK */
            Swal.fire({
                icon: "error",
                title: "No hay stock de los siguientes productos:",
                text: outOfStock.map(el => el.name).join(",")
            })
        }
    }



    return (

        <Fragment>

            {cart.length === 0 
                ? <Navigate to="/"/>
                :

                <div className="checkout">
                    <h2>Checkout</h2>
                    
                    
                    <form className="checkoutForm" onSubmit={handleSubmit}>
                        <input 
                            className="checkoutInput"
                            onChange={handleInputChange}
                            name="name"
                            value={values.name}
                            type="text"
                            placeholder="name"
                        />
                        {values.name.length < 4 && <small className="error">Invalid name</small>}
                    
                        <input 
                            className="checkoutInput"
                            onChange={handleInputChange}
                            name="surname"
                            value={values.surname}
                            type="text"
                            placeholder="surname"
                        />
                        {values.surname.length < 4 && <small className="error">Invalid surname</small>}
                    
                        <input 
                            className="checkoutInput"
                            onChange={handleInputChange}
                            name="email"
                            value={values.email}
                            type="email"
                            placeholder="email"
                        />
                        {values.email.length < 4 && <small className="error">Invalid email</small>}
                    
                        <input 
                            className="checkoutInput"
                            onChange={handleInputChange}
                            name="emailConfirm"
                            value={values.emailConfirm}
                            type="emailConfirm"
                            placeholder="email confirm"
                        />
                        {values.emailConfirm !== values.email && <small className="error">Invalid email</small>}
                    
                        <button className="button" type="submit">Send</button>
                    </form>
                </div>
            }
        </Fragment>
    )
}




