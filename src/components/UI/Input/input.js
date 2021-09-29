import React from "react";


export const Input = (props) => {


    return(
    <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">@</span>
        <input type="number" className="form-control" style={{
            width: '5rem'
        }} placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
    </div>
    )
}