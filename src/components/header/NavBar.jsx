import "./navbar.css";
import { Fragment } from "react/cjs/react.production.min";

const Header = () => {
    return (
        <Fragment>
            <header>
                <nav>
                    <div>
                        <h1><a href="index.html" className="font">The Music Store</a></h1>
                    </div>

                    <ul>
                        <li><a href="index.html" className="font">Home</a></li>
                        <li><a href="index.html" className="font">Products</a></li>
                        <li><a href="index.html" className="font">Contact</a></li>
                    </ul>

                </nav>
            </header>
        </Fragment>
    )
}

export default Header;