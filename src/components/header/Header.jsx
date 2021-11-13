import "./header.css";
import { Fragment } from "react";
import CartWidget from "./CartWidget";

const Header = () => {
    return (
        <Fragment>
            <header>
                <nav>
                    <div>
                        <h1><a href="index.html" className="font logo navLink">The Music Store</a></h1>
                    </div>

                    <ul className="navList">
                        <li className="navItem"><a href="index.html" className="font navLink">Home</a></li>
                        <li className="navItem"><a href="index.html" className="font navLink">Products</a></li>
                        <li className="navItem"><a href="index.html" className="font navLink">Contact</a></li>
                    </ul>

                    <CartWidget />
                </nav>
            </header>
        </Fragment>
    )
}

export default Header;