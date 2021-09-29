import React, { useReducer } from "react";
import { TranigsContext } from "./tranigsContext";
import { traningsReducer } from './traningsReducer';
import { ACTIVE_HANDLER, DISACTIVE_HANDLER, ID_CHANGER } from './../Types/types';



const TraningsState = ({children}) => {
const initialState = {
    progressBar: 0,
    isChecked: false,
    id: 1,
    active : true,
    trainigOne : {
        images: {
            chestIMG: '',
            armsIMG: '',
            absIMG: ''
        },
        id: 1,
        active: false,
        tranings: [
           
            {abs:[
               
                {name: 'Ab rollouts', times: '4xMAX', img: '', id:1}
            ]},
            {chest:[
                
                {name: 'Bench press', times: '6xMAX', img:'', id:2},
                {name: 'Incline bench press', times: '4x10', img: '', id:3}
            ]},
            {arms:[
                {biceps: [
                    {name: 'Bicep curls', times: '4x8', img:'', id:4},
                    {name: 'Bicep isolate', times: '4x8', img:'', id:5},
                    {name: 'Bicep scott', times: '4x8', img:'', id:6}
                ]},
            ]}
        ]
    },
    trainigTwo : {
        id: 2,
        tranings: [
           
            {abs:[
               
                {name: 'Ab rollouts', times: '4xMAX', img: '', id:1}
            ]},
            {back:[
                
                {name: 'Pull-ups', times: '6xMAX', img:'', id:2},
                {name: 'Chin-ups', times: '4x10', img: '', id:3}
            ]},
            {arms:[
                {triceps: [
                    {name: 'Skull crushers', times: '4x8', img:'', id:4},
                    {name: 'Tricep isolate', times: '4x8', img:'', id:5},
                    {name: 'Tricep ropes', times: '4x8', img:'', id:6}
                ]}
            ]}
        ]
    },
    trainigThree : {
        id: 3,
        tranings: [
           
            {abs:[
               
                {name: 'Ab rollouts', times: '4xMAX', img: '', id:1}
            ]},
            {legs:[ 
                {name: 'Deadlifts', times: '6xMAX', img:'', id:2},
                {name: 'Back squats', times: '4x10', img: '', id:3}
            ]},
            {shoulders:[
                    {name: 'Overhead press', times: '4x8', img:'', id:4},
                    {name: 'Push press', times: '4x8', img:'', id:5},
                    {name: 'Bent-over rows', times: '4x8', img:'', id:6}
                
            ]}
        ]
    }
}
const [state, dispatch] = useReducer(traningsReducer, initialState)
const arr = [
    {training: 'Training 1', cls:['Trainings__nav__wrapper__item'], arrow:['fas', 'fa-chevron-right', 'fa-6x', 'Trainings__nav__wrapper__arrow']},
    {training: 'Training 2', cls:['Trainings__nav__wrapper__item'], arrow:['fas', 'fa-chevron-right', 'fa-6x', 'Trainings__nav__wrapper__arrow']},
    {training: 'Training 3', cls:['Trainings__nav__wrapper__item'], arrow:['fas', 'fa-chevron-right', 'fa-6x', 'Trainings__nav__wrapper__arrow']}
]

if(state.active && state.id === 1) {
    arr[0].cls.push('Trainings__nav__wrapper__item__active');
    arr[0].arrow.push('Trainings__nav__wrapper__arrow__show')
}
if(state.active && state.id === 2) {
    arr[1].cls.push('Trainings__nav__wrapper__item__active');
    arr[1].arrow.push('Trainings__nav__wrapper__arrow__show')
}
if(state.active && state.id === 3) {
    arr[2].cls.push('Trainings__nav__wrapper__item__active');
    arr[2].arrow.push('Trainings__nav__wrapper__arrow__show')
}


const actionToggler = (id) => {
    dispatch({
        type: ID_CHANGER,
        payload: id
    })
    if(state.id === id && state.active){
     dispatch({
         type: DISACTIVE_HANDLER
     })
    }else{
        dispatch({
            type: ACTIVE_HANDLER
            })
    }
  


}



    return(
        <TranigsContext.Provider value={{state, actionToggler, arr}}>
            {children}
        </TranigsContext.Provider>
    )
}

export default TraningsState