import React, { useContext } from "react";
import { NavbarContext } from "../../../Context/NavBarContext/navBarContext";
import './backdrop.scss'

const Backdrop = () => {
    const {menuToggler} = useContext(NavbarContext)
    return(
        
        <div className='Backdrop' onClick={menuToggler}></div>
    )
}

export default Backdrop