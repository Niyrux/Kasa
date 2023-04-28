import React, { useState } from 'react'
import image from '../../img/arrow.png'
import './dropdown.css'

function Dropdown(props) {

 

    return (
        <div className="container-dropdown">
            <div className="drop-down-top">
                <p>{props.title}</p>
                <img src={image} />
            </div>
            <div className="drop-down-bot"></div>
        </div>
    )
}

export default Dropdown