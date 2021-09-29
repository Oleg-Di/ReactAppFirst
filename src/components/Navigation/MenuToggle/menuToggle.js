import React, { useContext } from "react";
import { NavbarContext } from "../../../Context/NavBarContext/navBarContext";
import './menuToggle.scss'


const MenuToggle = () => {

    const {isOpen, menuToggler} = useContext(NavbarContext)


    
    const cls = [
        'MenuToggle',
        'fa'
    ]
    if (isOpen) {
        cls.push('fa-times')
        cls.push('MenuToggle__open')
    } else {
        cls.push('fa-bars')
    }

    return(
        <i className={cls.join(' ')} onClick={menuToggler}/>
   
    )
}

export default MenuToggle;