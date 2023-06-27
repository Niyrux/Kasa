import image from '../../assets/img/LOGO.png'
import './header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="App-header">
            <img src={image} alt='logo' />
            <ul>
                <NavLink activeclassname="active" to='/'>Accueil</NavLink>
                <NavLink activeclassname="active" to='/a-propos'>A Propos</NavLink>
            </ul>
        </header>
    );
}

export default Header;