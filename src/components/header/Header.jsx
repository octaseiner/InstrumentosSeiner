import "./header.css";
import { Fragment } from "react";
import { CartWidget } from "../cartWidget/CartWidget"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <Fragment>
            <header>
                <nav>
                    <div>
                        <h1><Link to="/" className="font logo navLink">The Music Store</Link></h1>
                    </div>

                    <ul className="navList">
                        <li className="navItem"><Link to="/" className="font navLink">Home</Link></li>
                        <li className="navItem"><Link to="products/drums" className="font navLink">Drums</Link></li>
                        <li className="navItem"><Link to="products/bass" className="font navLink">Bass</Link></li>
                        <li className="navItem"><Link to="products/synth" className="font navLink">Synth</Link></li>
                        <li className="navItem"><Link to="products/mic" className="font navLink">Mic</Link></li>
                    </ul>

                    <CartWidget />
                </nav>
            </header>
        </Fragment>
    )
}
