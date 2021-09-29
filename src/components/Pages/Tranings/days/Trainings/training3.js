import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { TranigsContext } from "../../../../../Context/TranigsContext/tranigsContext";
import ProgressBar from "../../../../UI/ProgressBar/ProgressBar";
import './training1.scss'


const TrainingThree = () => {

const {state} = useContext(TranigsContext)

const [number, setNumber] = useState(0)
const [value, setValue] = useState([
    {id: 1, val:0, isVal: false},
    {id: 2, val:0, isVal: false},
    {id: 3, val:0, isVal: false},
    {id: 4, val:0, isVal: false},
    {id: 5, val:0, isVal: false},
    {id: 6, val:0, isVal: false}
])
const checker = (id) => {
    const status = [...value]
    status[id-1].isVal?status[id-1].isVal=false : status[id-1].isVal = true
    setValue(status)
    const some = value.filter(item => item.isVal)
    setNumber(Math.round((100/value.length)*some.length))
}

    return(
        <div className='Trainings__display'>
          
           <div>
               <div>
                   <h2>Legs:</h2>
                    {state.trainigThree.tranings[1].legs.map((item, i) => {
                       return(
                        <div key={i + 1} className="Trainings__display__cont">
                        <h3 className='Trainings__display__cont__item'>{item.name}:</h3>
                        <h3>{item.times}</h3>
                        <div className="form-check ">
                                <input onChange={()=>checker(item.id)} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                        </div>
                         </div>
                       )                   
                    })}
               </div>
               <hr/>
               <div>
                   <h2>Shoulders:</h2>
                   <div>
                       {state.trainigThree.tranings[2].shoulders.map((item, i) => {
                           return(
                            <div key={i + 1} className="Trainings__display__cont">
                            <h3 className='Trainings__display__cont__item'>{item.name}:</h3>
                            <h3>{item.times}</h3>
                            <div className="form-check ">
                                    <input onChange={()=>checker(item.id)} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                            </div>
                             </div>
                           )
                       })}
                   </div>
               </div>
               <hr/>
               <div>
                   <h2>Abs</h2>
                   <div>
                   {state.trainigThree.tranings[0].abs.map((item, i) => {
                           return(
                            <div key={i + 1} className="Trainings__display__cont">
                            <h3 className='Trainings__display__cont__item'>{item.name}:</h3>
                            <h3>{item.times}</h3>
                            <div className="form-check ">
                                    <input onChange={()=>checker(item.id)} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                            </div>
                             </div>
                           )
                       })}
                   </div>
               </div>
           </div>
                
           
           <ProgressBar bgcolor= "rgb(75, 193, 211)" completed= {number}/> 
        </div>
    )
}

export default TrainingThree;