import React from "react"
import Boton from '../components/Boton'
import { useCalculator } from "../hooks/useCalculator"
import './calculator.css'

export const Calculator = () => {

    const {
        data,
        preData,
        del,
        addData,
        clear,
        positivoNegativo,
        splitBtn,
        subBtn,
        plusBtn,
        showResult,
        multiplyBtn,
        percentage
    } = useCalculator()

    return(
        <div className="fondo">
            <div className="content">
                {
                    (preData !== '0') && (<div className="resultadoAnt">{preData}</div>)
                }
                {}
                <div 
                    data-testid="result"
                    className={`resultado ${preData === '0' ? 'paddingPre' : '' }`.trimEnd()}
                >
                    {data}
                </div>

                <div className="fila">
                    <Boton click = {clear}>C</Boton>
                    <Boton click = {positivoNegativo}>+/-</Boton>
                    <Boton click = {percentage}>%</Boton>
                    <Boton click = {splitBtn}>/</Boton>
                </div>
                <div className="fila">
                    <Boton click = {addData}>7</Boton>
                    <Boton click = {addData}>8</Boton>
                    <Boton click = {addData}>9</Boton>
                    <Boton click = {multiplyBtn}>*</Boton>
                </div>
                <div className="fila">
                    <Boton click = {addData}>4</Boton>
                    <Boton click = {addData}>5</Boton>
                    <Boton click = {addData}>6</Boton>
                    <Boton click = {subBtn}>-</Boton>
                </div>
                <div className="fila">
                    <Boton click = {addData}>1</Boton>
                    <Boton click = {addData}>2</Boton>
                    <Boton click = {addData}>3</Boton>
                    <Boton click = {plusBtn}>+</Boton>
                </div>
                <div className="fila">
                    <Boton click = {addData}>0</Boton>
                    <Boton click = {addData}>.</Boton>
                    <Boton click = {del}>del</Boton>
                    <Boton click = {showResult}>=</Boton>
                </div>
            </div>
        </div>
    )
}