import React from "react";
import "../Navbar/Navbar.css";

const ItemListGreeting = (props) => {
    return(
        <div className="greetings-contenedor">
            <h2> {props.greetings} </h2>
        </div>
    );
};

export default ItemListGreeting;