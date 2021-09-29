import React from "react";
import './card.scss'
import Loader from './../Loading/loading';
export const Card = (props) => {


    return(
        <div key={props.id+1} className="card Home__card" id={props.id} style={{width: `${props.width}`}}>
        {props.setLoading ? <Loader/>
        : <img src={props.url} className="card-img-top faded" alt="img"/>
         }
        <div className="card-body">
            <p className="card-text" style={{
                fontSize : `${props.size}`
            }}>{props.text}</p>
        </div>
        </div>
    )
}