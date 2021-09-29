import React, { useContext } from "react";
import { ContactDropContext } from "../../Context/ContactDropContext/ContactContext";
import "./contactDrop.scss"
import DropItem from "./DropItem/dropItem";

const Contact = () => {
const {isActive} = useContext(ContactDropContext)
const style = ['Contacts','container']
if (isActive) style.push('Contacts__show')
if (!isActive) style.push('Contacts__hide')
    return(
        <div className={style.join(" ")}>
            <DropItem/>
        </div>
    )
}

export default Contact;