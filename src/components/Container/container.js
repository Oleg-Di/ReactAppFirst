import React from 'react'
import "./container.scss"

const Container = ({children}) => {

    return (
        <div  className="container pt-4">
            {children}
        </div>
    )
}

export default Container;