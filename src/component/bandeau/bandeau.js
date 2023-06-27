import './bandeau.css'

function Bandeau(props) {
    return (
        <div className="bandeau">
            {props.background ? <img src={props.background} alt='bandeau' /> : null}

            {props.title ? <p>{props.title}</p> : null}
        </div>
    );
}

export default Bandeau;