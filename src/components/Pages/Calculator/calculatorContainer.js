import React, {  useState } from "react";
import Calculator from "./calculator";


export const CalculatorContainer = () => {

    const [calc, setCalc] = useState({
        endtime: '2022-03-01',
        id: 1,
        gender: 'Male',
        weight: '',
        height: '',
        age: '',
        ratio: [
            {type: "Low activity", id: 1, index: 1.2},
            {type: "Slow activity", id: 2, index: 1.375},
            {type: "Medium activity", id: 3, index: 1.55},
            {type: "Hight activity", id: 4, index: 1.725}   
        ],
        result: 0,
    })
    const [result, setResult] = useState({
        res: null
    })
    
    const onGenderChange = () => {
        if(calc.gender === "Male") {
            setCalc({...calc, gender: 'Female'})
        } else {
            setCalc({...calc, gender: 'Male'})
        }
        showResult()
    }
   
    const onAgeChange = (e) => {
        setCalc({...calc, age: e.target.value.trim()})
        showResult()
    }
    const onWeightChange = (e) => {
        setCalc({...calc, weight: e.target.value.trim()})
        showResult()
    }
    const onHeightsChange = (e) => {
        setCalc({...calc, height: e.target.value.trim()})
        showResult()
        
    }
    const changeRatioHandler = () => {
        setCalc({...calc, id:calc.id + 1})
        if (calc.id > 3) setCalc({...calc, id: 1})
        showResult()
        
    }
    const showResult = () => {
        const ratioType = calc.ratio.filter(ratio => calc.id === ratio.id)
        let resultation 
        if (calc.gender === 'male') {
            resultation = Math.round((88.36 + (13.4 * calc.weight) + (4.8 * calc.height) - (5.7 * calc.age)) * ratioType[0].index)
        } else {
            resultation = Math.round((447.6 + (9.2 * calc.weight) + (3.1 * calc.height) - (4.3 * calc.age)) * ratioType[0].index)
        }
        if(!calc.age || !calc.height || !calc.weight) {
            setResult({...result, res: '...'})
        } else {
            setResult({...result, res: resultation})
        }
        
    }
    return(
        <Calculator endtime={calc.endtime} result={result} showResult={showResult} calc={calc} changeRatioHandler ={changeRatioHandler} onGenderChange={onGenderChange}  onHeightsChange={onHeightsChange} onWeightChange={onWeightChange} onAgeChange={onAgeChange}/>
    )
}