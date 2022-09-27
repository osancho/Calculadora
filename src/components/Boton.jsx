import React from "react";
import './boton.css'

const Boton = (props) => {
    const esIgual = e => {
        return  (e === '=') 
    }
    return(
        <div
            data-testid="botonCalc"
            className={`boton ${esIgual(props.children) ? 'operador' : '' }`.trimEnd()}
            onClick={() => props.click(props.children)}
        >
            {props.children}
        </div>
    )
}

export default Boton