import React, { useContext } from "react";
import { ContactDropContext } from "../../../Context/ContactDropContext/ContactContext";
import './dropItem.scss'

const DropItem = () => {
    const {activeHandler} = useContext(ContactDropContext)

    return (
        <div className='DropItem'>
            <div>
                <p>Adress:</p>
                <p>Tel: <a href="tel:+380977971173"> +380977971173 </a></p>
            </div>
            <div>
                <p>WorkingTime: Su - Sa, 7 - 19</p>
            </div>
            <i onClick={activeHandler} className="fa fa-times DropItem__close"></i>
        </div>
    )
}

export default DropItem;