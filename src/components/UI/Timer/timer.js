import React, { useRef } from "react";
import './timer.scss'
import Loader from './../Loading/loading';

const Timer = (props) => {
const jop = useRef()
// console.dir(jop.current?.onBlur?.dasd);
    return(
        <div ref={jop} className='Timer__wrapper'>
            <div className="Timer__wrapper__block">
                <h3>Days</h3>
                <div className='Timer__wrapper__block__item'>{
                    props.timer.days === ''? <Loader/> : <p>{props.getZero(props.timer.days)}</p>
                }
                </div>
                
            </div>
            <div className="Timer__wrapper__block">
                <h3>Hours</h3>
               <div className='Timer__wrapper__block__item'>{
                   props.timer.hours === "" ? <Loader/> : <p>{props.getZero(props.timer.hours)}</p>
               }
                </div> 
            </div>
            <div className="Timer__wrapper__block">
                <h3>Minutes</h3>
               <div className='Timer__wrapper__block__item'> {
                   props.timer.minutes === ""? <Loader/> : <p>{props.getZero(props.timer.minutes)}</p>
               }
                 </div> 
            </div>
            <div className="Timer__wrapper__block">
                <h3>Seconds</h3>
               <div className='Timer__wrapper__block__item'>{
                   props.timer.seconds === "" ? <Loader/> : <p>{props.getZero(props.timer.seconds)}</p>
               }
                </div> 
            </div>
            
        </div>
    )
}

export default Timer