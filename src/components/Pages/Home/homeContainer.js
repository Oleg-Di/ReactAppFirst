import React from "react";
import { useState } from "react/cjs/react.development";
import Home from "./home";
import facebook from './img/facebook-logo.svg';
import vk from './img/vk.svg'
import instagram from './img/instagram.svg'
import youtube from './img/youtube.svg'

const HomeContainer = () => {

    const [homeState, setHomeState] = useState({
        img: [
           
            {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfwbcUFeTuJpZpHp8G7f8CFK3PZYIGbfMAw&usqp=CAU',
             text: 'Fitness & Exercises'   
            },
            {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9DGJigL7_Tj3Jp2Mae2Ea0pCmT93OZNTs_A&usqp=CAU',
            text: 'Tranings & Education'   
           },
           {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLO3_2EDxyOdDr_TVGPGACCJkMj9jNLDb3jA&usqp=CAU',
           text: 'Workouts & Lifting'   
          },
          {url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPi03f2MLlKpsrvhGPn0VqceGOcavo39HK3Q&usqp=CAU',
          text: 'Diets & Healthy type of life'   
         },
        ],
        setLoading: true,
        social: [
            {url: facebook},
            {url: vk},
            {url: instagram},
            {url: youtube}
        ]
    })
    
    const loading = () => {
        setHomeState({...homeState, setLoading: false})
    }
    

    return(
        <Home loading={loading}  state={homeState} 
        />
    )
}

export default HomeContainer