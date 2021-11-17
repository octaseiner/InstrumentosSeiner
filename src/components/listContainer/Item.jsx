import "./itemListContainer.css";
import { Fragment } from "react";
import ItemCount from "../itemCount/ItemCount";
import drum from "../components/media/drum.jpg"

const products = [
    {
        name: "Solidrums Nativa",
        image: drum,
        type: "Drum",
        price: "$100.000",
        id: 1
    },

    {
        name: "Ibanez GSR 200",
        image: "",
        type: "Bass",
        price: "$60.000",
        id: 2
    },

    {
        name: "Korg Minilogue",
        image: "",
        type: "Synth",
        price: "$80.000",
        id: 3
    },

    {
        name: "Shure SM57",
        image: "",
        type: "Microphone",
        price: "$20.000",
        id: 4
    },
]

const Item = () => {
    return (
        <Fragment>
            {
                products.map((product) => {
                    return (
                        <section key={product.id} className="item">
                            <h1 className="itemName">{product.name}</h1>
                            <img src={product.drum} alt="drums" />
                            <div className="typePriceDiv">
                                <p className="itemType">Type: {product.type}</p>
                                <p className="itemPrice">Price: {product.price}</p>
                            </div>
                            <section className="itemCountSection">
                                <ItemCount />
                            </section>
                        </section>
                    )
                })
            }
        </Fragment>
    )
}

export default Item;