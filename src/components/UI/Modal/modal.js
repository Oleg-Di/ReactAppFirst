import React from "react";
import './modal.scss'

export const Modal = (props) => {


    return(
        <div key={props.id} className={props.style.join(' ')}>
            <div className="Modal__wrapper Ula ">
                <h2>Just do it!!</h2>
                <h3>Let your dreams come true!!!</h3>
                <p>Antonia Elena weiß, was es bedeutet, hart für einen gesunden und kräftigen Körper zu arbeiten. Mit viel Energie und Disziplin hat sie es geschafft</p>
            </div>
        </div>
     
    )
}