import './bandeau.css'

function Bandeau(props) {
    return (
        <div className="bandeau">
            <img src={props.background}/>
            <p>{props.title}</p>
        </div>
    );
}

export default Bandeau;