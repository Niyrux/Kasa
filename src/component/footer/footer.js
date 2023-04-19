import React from 'react'
import image from '../../img/logo_footer.png'
import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <img src={image} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer