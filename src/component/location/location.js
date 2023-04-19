import locationsData from '../../location.json';
import { Link } from 'react-router-dom'
import './location.css'

const locations = locationsData.map(location => <LocationItem key={location.id} data={location} />);

function Location() {
    return (
        <div className='container-global-location'>
            {locations}
        </div>
    );
}

function LocationItem(props) {
    const { data } = props;
    return (
        <div className="contain-location">
            <Link to={'location/' + data.id}>
                <div  >
                    <h2>{data.title}</h2>
                </div>
            </Link >
        </div >
    );
}

export default Location;
