import React from "react";
import { TimerContainer } from "../../UI/Timer/timerContainer";

import './calculator.scss'


const Calculator = (props) => {


    return(
        <div>
            <div className='Calculator'>
                <h1>Calculate your calories</h1>
                <h2>Choose your activity and gender:</h2>
                <div className="Calculator__buttons">
                {props.calc.ratio.filter(item => props.calc.id === item.id).map(item => 
                <button type='button' className="Calculator__buttons__button btn btn-primary" onClick={ props.changeRatioHandler} key = {item.id + 1} id={item.id}>{item.type}</button>)}
                <button type='button' className="Calculator__buttons__button btn btn-secondary" onClick={props.onGenderChange}>{props.calc.gender}</button>
            </div>
                <h2>Fill all fields...</h2>
            <div className="Calculator__inputs">
                <input className="Calculator__inputs__input" type='number' placeholder='Enter your age...' value={props.calc.age} onChange={(e) => props.onAgeChange(e)}/>
                <input className="Calculator__inputs__input" type='number' placeholder='Enter your weight...' value={props.calc.weight} onChange={(e) => props.onWeightChange(e)}/>
                <input className="Calculator__inputs__input" type='number' placeholder='Enter your height...' value={props.calc.height} onChange={(e) => props.onHeightsChange(e)}/>
            </div>
                <h2>Result:</h2>
                <h3 className='Calculator__res'>{props.result.res?props.result.res:'...'}</h3>
            </div>
            <div className='Timer'>
                 <h2>Hurry up to put your body in order for summer!</h2>  
                 <h2>Summer will begin in:</h2>
                 <TimerContainer endtime={props.endtime}/> 
            </div>
        </div>
    
    )
}


export default Calculator;