import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './home.scss'
import { Card } from './../../UI/Card/card';

const Home = (props) => {

useEffect(() => {
    setTimeout(props.loading, 1000)
}, [props.loading])

    return (
        <div className='Home'>
            <h1>Get fit & healthy.</h1>
            <p>Try to change your mind, body, life.</p>
            <div className='Home__cards'>
            {props.state.img.map((item, id)=> {
                return (<Card width={'18rem'} key={id+1} id={id} text={item.text} url={item.url} setLoading={props.state.setLoading}/>)   
            })}
            </div>
            <hr/>
            <div className='Home__social'>
                {props.state.social.map((item, id)=> <Link to='/' key={id+1} ><img  alt='img' src={item.url}></img></Link>)}
            </div>
        </div>
    )
}

export default Home;