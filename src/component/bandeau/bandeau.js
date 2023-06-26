import './bandeau.css'

function Bandeau(props) {
    return (
        <div className="bandeau">
           {props.background ?  <img src={props.background}/> : null}
            
           {props.title ? <p>{props.title}</p> : null }
        </div>
    );
}

export default Bandeau;