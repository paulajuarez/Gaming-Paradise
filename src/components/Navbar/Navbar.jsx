import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return(
        <nav>
            <ul className="categories">
                <li className="item"><a href="#">INICIO</a></li>
                <li className="item"><a href="#">TIENDA</a></li>
                <li className="item"><a href="#">INFORMACIÓN</a></li>
                <li className="item"><a href="#">PREGUNTAS FRECUENTES</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;