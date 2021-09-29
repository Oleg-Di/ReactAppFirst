import React, { useContext } from "react";
import { TranigsContext } from "../../../../Context/TranigsContext/tranigsContext";
import TrainingOne from "../days/Trainings/training1";
import TrainingTwo from "../days/Trainings/training2";
import TrainingThree from "../days/Trainings/training3";
import './traningDrower.scss'

const TrainingDrower = () => {
    const {state} = useContext(TranigsContext)
    const cls = [
        'TrainingDrawer'
    ]
    if(!state.active) {
        cls.push('TrainingDrawer__close')
    }
    if (state.id === 1) cls.push('TrainingDrawer__backone')
    if (state.id === 2) cls.push('TrainingDrawer__backtwo')
    if (state.id === 3) cls.push('TrainingDrawer__backthree')

    let trainingShow;
    if(state.id === 1) trainingShow = <TrainingOne/>
    if(state.id === 2) trainingShow = <TrainingTwo/>
    if(state.id === 3) trainingShow = <TrainingThree/>
    

    return(
    
            <div className={cls.join(' ')}>
             {trainingShow}
             
            </div>
        
    )
}
export default TrainingDrower