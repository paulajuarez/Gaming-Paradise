import React, { useState } from "react";
import moment from "moment";
import './ItemCount.css';

const Contador = () => {

    const [click, setClick] = useState(0);
    const [fechayhora, setfechayhora] = useState(null);

    const cClicks = () => {
        setClick(click + 1);
        setfechayhora( moment().format("dddd, MMMM Do YYYY, h:mm:ss") )
    };

    return(
        <div className="contenedor-contador">
            <button className="button" onClick ={cClicks}> Clickeame </button>
                <p className="text">Me clickeaste: {click} veces</p>
                <p className="text">El último click fue {fechayhora} </p>
        </div>
    );
};

export default Contador;