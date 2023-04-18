import image from '../../img/LOGO.png'
import './header.css'

function Header() {
    return (
        <header className="App-header">
            <img src={image} />
            <ul>
                <li>Accueil</li>
                <li>A Propos</li>
            </ul>
        </header>
    );
}

export default Header;