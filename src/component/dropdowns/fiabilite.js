import React from 'react'
import image from '../../img/arrow.png'
import './dropdown.css'

function Fiabilite() {

    const DropTop = document.querySelector('.drop-down-top');


    return (
        <div className="container-dropdown">
            <div className="drop-down-top">
                <p>Fiabilité</p>
                <img src={image} />
            </div>
            <div className="drop-down-bot"></div>
        </div>
    )
}

export default Fiabilite