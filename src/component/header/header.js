import image from '../../img/LOGO.png'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="App-header">
            <img src={image} />
            <ul>
                <Link to='/'>Accueil</Link>
                <Link to='/a-propos'>A Propos</Link>
            </ul>
        </header>
    );
}

export default Header;