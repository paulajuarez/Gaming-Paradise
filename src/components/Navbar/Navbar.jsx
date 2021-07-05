import React from "react";
import "./Navbar.css";
import Cart from "./Cart/Cart";

const Navbar = () => {
    return(
            <nav className="nav">
                <ul className="categories">
                    <li className="item"><h1>GameParadise</h1></li>
                    <li className="item"><a href="#">INICIO</a></li>
                    <li className="item"><a href="#">TIENDA</a></li>
                    <li className="item"><a href="#">INFORMACIÓN</a></li>
                    <li className="item"><a href="#">PREGUNTAS FRECUENTES</a></li>
                    <li className="item"><Cart/></li>
                </ul>
            </nav>
    );
};

export default Navbar;