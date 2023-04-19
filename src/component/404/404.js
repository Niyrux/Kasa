import './404.css'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="error404">
            <div>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div>
                <Link to='/'> Retourner sur la page d'accueil</Link>
            </div>
        </div>
    )
}

export default NotFound