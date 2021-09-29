import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContactDropContext } from "../../../Context/ContactDropContext/ContactContext";
import "./headerItems.scss"

const HeaderItems = () => {
const {activeHandler, isActive} = useContext(ContactDropContext)
const classes = [
    'fa'
]
if(isActive) {
    classes.push('fa-angle-down')
} else{
    classes.push('fa-angle-right')
}


    return (
        <div className='Header__items'>
            
            <NavLink className="Header__items__link" activeClassName="NavActive" to='/' exact >Home</NavLink>
            <NavLink className="Header__items__link" activeClassName="NavActive" to='/about'  >About</NavLink>
            <NavLink className="Header__items__link" activeClassName="NavActive" to='/news'  >News</NavLink>
            <div className='with_icon'>
            <NavLink className='Header__items__link' activeClassName="NavActive" activeStyle={{
                color: "white"
            }} to='#' onClick={activeHandler} >Contacts</NavLink>
            <i className={classes.join(' ')}></i>
            </div>
           
        </div>
    )
}

export default HeaderItems