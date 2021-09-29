import React from "react";
import {useState } from "react/cjs/react.development";
import Slide from "../../UI/Slide/slide";
import './about.scss';
import Loader from './../../UI/Loading/loading';


const About = () => {
const width = "800px"
const height = '400px'
const [data, setData] = useState([
    {image: "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Fitness/Galleries/10+Fitness+Tips/Muscle-confusion-is-the-only-way-to-go..jpg",
     caption: "Dextrity"   
    },
    {image: "http://www.personaltrainerfds.com/wp-content/uploads/2019/12/circuit_training_01.jpg",
    caption: "Agility"   
    },
    {image: "https://marino.magneto.fit/assets/images/slider/3.jpg",
    caption: "Strong"   
    },
    {image: "https://www.fitnesslife.ua/images/good_001_2_ok.jpg?crc=303679984",
     caption: "Elastity"   
    },
    ])
 


    return (
        <div className='About'>
            <div className='About__goal'>
                <h1>Our goal is to help you become better.<br/> Believe in yourself.</h1>
            </div>
            {data.length === 0 ? <Loader/> : <Slide width={width} height={height} slideNumber={false} data={data}/>}
            
            
        </div>
    )
}

export default About;