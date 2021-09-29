import React, { useEffect } from "react";
import Slide from "../../UI/Slide/slide";
import './news.scss'
import { Card } from './../../UI/Card/card';
import { NavLink } from "react-router-dom";
import { Modal } from "../../UI/Modal/modal";

const News = (props) => {


    const styleTop = [
        'Modal', 'Modal__fadedtop'
    ]
    const styleBot = [
        'Modal', 'Modal__fadedbottom'
    ]
    useEffect(() => {
        props.modalOn();
    }, [])
    const {img, width, height, slideNumber, slideImageFit, text, url, isLoading, isModal, id} = props.newsData
    return(
        <div className="News">
            <h1>Some of sports news.</h1>
            <div className='News__slider'>
            <div className='News__cardfirst'>
                <NavLink className="News__link" to='#' activeClassName="News__active">
                <Card width={'18rem'} id={id} text={text} url={url[0].image} setLoading={isLoading}/>
                </NavLink>  
                {isModal?<Modal style = {styleTop}/>:null }
                 
            </div>
            <Slide width={width} height={height} slideImageFit={slideImageFit} slideNumber={slideNumber} data={img}/>
            <div className='News__cardsecond'>
                {isModal?<Modal style={styleBot}/>: null}
                
                <NavLink className="News__link" activeClassName="News__active" to='#'>
                <Card id={id} text={text} url={url[1].image} setLoading={isLoading}/>
                </NavLink>
                
            </div>
            </div>

            
        </div>
    )
}


export default News