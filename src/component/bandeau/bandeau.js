import './bandeau.css'
import image from '../../img/logo_footer.png'

function Bandeau(props) {
    return (
        <div className="bandeau">
            <img src={props.background}/>
            <p>{props.title}</p>
        </div>
    );
}

export default Bandeau;