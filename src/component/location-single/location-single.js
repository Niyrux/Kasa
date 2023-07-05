import React from 'react';
import { useParams } from 'react-router-dom';
import locationsData from '../../location.json';
import NotFound from '../404/404';
import Slider from '../slider/slider';
import Rating from '../rating/rating';
import Tags from '../tags/tags';
import './location-single.css'
import '../../index.css'
import Dropdown from '../dropdowns/dropdown';

function LocationSingle() {
    const { id } = useParams();
    const location = locationsData.find(l => l.id === id);

    if (!location) {
        return <NotFound />;
    }

    let equipements = location.equipments;
    equipements = equipements.map((equipemen, index) =>
        <li key={index}>{equipemen} </li>

    )

    let description = location.description;



    return (
        <div>
            <Slider />
            <div className='container-single'>
                <div className='details'>
                    <h2 className='nomarge'>{location.title}</h2>
                    <p className='nomarge'>{location.location}</p>
                    <Tags />
                </div>

                <div className='profil-host'>
                    <div className='host'>
                        <p>{location.host.name}</p>
                        <img alt='head-hosting' src={location.host.picture} />
                    </div>
                    <Rating />

                </div>

            </div>
            <div className="container-dropdown-single">
                <Dropdown title={"Equipements"} content={equipements} />
                <Dropdown title={"Description"} content={description} />
            </div>
        </div>
    );
}

export default LocationSingle;
