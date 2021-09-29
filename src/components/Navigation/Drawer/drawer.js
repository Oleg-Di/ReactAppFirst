import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavbarContext } from "../../../Context/NavBarContext/navBarContext";
import Backdrop from "../../UI/Backdrop/backdrop";
import './drawer.scss'

const Drawer = () => {

    const {isOpen, menuToggler} = useContext(NavbarContext)
    const cls = [
        'Drawer'
    ]
    if(!isOpen) {
        cls.push('Drawer__close')
    }

    return(
        <>
        <nav className={cls.join(' ')}>
            <ul>
                <NavLink className="Header__items__link" onClick={menuToggler} to='/calc' activeClassName="NavActive">Calculator</NavLink>
                <NavLink className="Header__items__link" onClick={menuToggler} to='/trainings' activeClassName="NavActive">Trainings</NavLink>
                <NavLink className="Header__items__link" onClick={menuToggler} to='/nutrition' activeClassName="NavActive">Nutrition</NavLink>
                <hr/>
                <NavLink className="Header__items__link" onClick={menuToggler} to='/rec' activeClassName="NavActive">Recomendations</NavLink>
            </ul>
        </nav>
        {isOpen? <Backdrop/>: null}
        </>
    )
}

export default Drawer;