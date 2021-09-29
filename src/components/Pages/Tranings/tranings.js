import React, { useContext } from "react";
import { TranigsContext } from "../../../Context/TranigsContext/tranigsContext";
import TrainingDrower from "./TraningDrower/traningDrower";
import './tranings.scss'

const Tranings = () => {
const {actionToggler, arr} = useContext(TranigsContext);

    return(
        <div className="Traning">
            {/* <h1>Here some trainings we recommended</h1> */}
            <div className="Trainings">
            <div className='Trainings__nav'>
            {arr.map((item, id) => {
               return (
                   <div key={id+1} className="Trainings__nav__wrapper">
                       <div onClick={() => actionToggler(id+1)} id={id+1} className={arr[id].cls.join(' ')}>
                          <h2>{item.training.toUpperCase()}</h2>  
                       </div>
                       <i className={arr[id].arrow.join(' ')}></i>
                   
                   </div>
               )
            })}
            </div>
            <TrainingDrower/>
            </div>
        
        </div>
    )
}

export default Tranings