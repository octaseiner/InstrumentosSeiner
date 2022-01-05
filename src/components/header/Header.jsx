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
                        <h1><Link to="/" className="font logo navLink">The Cymbal Store</Link></h1>
                    </div>

                    <ul className="navList">
                        <li className="navItem"><Link to="/" className="font navLink">Home</Link></li>
                        <li className="navItem"><Link to="products/zildjian" className="font navLink">Zildjian</Link></li>
                        <li className="navItem"><Link to="products/sabian" className="font navLink">Sabian</Link></li>
                        <li className="navItem"><Link to="products/stagg" className="font navLink">Stagg</Link></li>
                    </ul>

                    <CartWidget />
                </nav>
            </header>
        </Fragment>
    )
}
