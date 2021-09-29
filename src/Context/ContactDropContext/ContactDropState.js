import React from "react";
import { useState } from "react/cjs/react.development";
import { ContactDropContext } from "./ContactContext";

const ContactState = ({children}) => {

    const [ContactState, SetContactState] = useState({
        isActive: false,
    })
    const {isActive} = ContactState

    const activeHandler = () => {
        SetContactState({...ContactState, isActive: !ContactState.isActive})
    }
    return(
        <ContactDropContext.Provider value={{isActive, ContactState, activeHandler}}>
            {children}
        </ContactDropContext.Provider>
    )
}

export default ContactState;