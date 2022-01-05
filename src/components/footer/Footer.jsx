import "./footer.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <Fragment>
            <footer>
                <div>
                    <h1><Link to="/" className="font logo navLink">The Cymbal Store</Link></h1>
                </div>

                <div>
                    <p>Created by Octavio Seiner</p>
                </div>
            </footer>
        </Fragment>
    )
}