import React from "react";
import { useState } from "react/cjs/react.development";
import { NavbarContext } from "./navBarContext";


const NavbarState = ({children}) => {

    const [navState, setNavState] = useState({
        isOpen: false
    })
    const menuToggler = () => {
        setNavState({...navState, isOpen: !navState.isOpen})
    }
    const {isOpen} = navState
    return(
        <NavbarContext.Provider value={{isOpen, menuToggler}}>
            {children}
        </NavbarContext.Provider>
    )
}


export default NavbarState