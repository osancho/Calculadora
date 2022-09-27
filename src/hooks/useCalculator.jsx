import { useRef, useState } from "react"

export const useCalculator = () => {
    const [preData, setPreData] = useState('0')
    const [data, setData] = useState('0')
    const lastOperation = useRef()

    const addData = e => {
        //existe punto decimal
        if(data.includes('.') && e === '.') return

        //numero empieza por 0
        if(data.startsWith('0')||data.startsWith('-0')) {
            if(e === '.' ){
                setData(data + e)
            }else if(e === '0' && data.includes('.')){
                setData(data + e)
            }else if(e !== '0' && !data.includes('.')){
                setData(e)
            }else if(e === '0' && !data.includes('.')){
                setData (data)
            }else{
                setData(data + e) 
            }
        }else{
            setData(data + e)
        }


    }

    const clear = () => {
        setData('0')
        setPreData('0')
    }

    const del = () => {
        const newData = data.slice(0, -1)
        if(data.includes('-')){
            data.length === 2 ? setData('0') : setData(newData)
        }else{
            data.length === 1 ? setData('0') : setData(newData)
        }
    }


    const positivoNegativo = () => {
        data.includes('-') ? setData(data.replace('-','')) : setData('-' + data) 
    }

    const switchData = () => {
        
        if(data.endsWith('.')){
            setPreData(data.slice(0, -1))
        }else{
            setPreData(data)       
        }
        setData('0')
    }

    const splitBtn = () => {
        if(preData === '0') switchData()
        lastOperation.current = 'dividir'
    }
    const multiplyBtn = () => {
        if(preData === '0') switchData()
        lastOperation.current = 'multiplicar'
    }
    const plusBtn = () => {
        if(preData === '0') switchData()
        lastOperation.current = 'sumar'
    }
    const subBtn = () => {
        if(preData === '0') switchData()
        lastOperation.current = 'restar'
    }

    const showResult = () => {
       const number1 = Number(preData)
       const number2 = Number(data)

       switch(lastOperation.current){
        case 'sumar':
            setData(`${number1 + number2}`)
            break
        case 'restar':
            setData(`${number1 - number2}`)
            break
        case 'multiplicar':
            setData(`${number1 * number2}`)
            break
        case 'dividir':
            setData(`${number1 / number2}`)
            
            break 
        default:
            break  
       }
       setPreData('0')
    }

    const percentage = () => {
        const newData = data / 100
        setData(newData)
    }

    return{
        data,
        preData,
        del,
        addData,
        clear,
        positivoNegativo,
        switchData,
        splitBtn,
        subBtn,
        plusBtn,
        showResult,
        multiplyBtn,
        percentage,
        setData,
        setPreData
    }
}