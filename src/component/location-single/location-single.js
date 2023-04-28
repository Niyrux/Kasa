import React from 'react';
import { useParams } from 'react-router-dom';
import locationsData from '../../location.json';
import NotFound from '../404/404';
import Slider from '../slider/slider';
import Rating from '../rating/rating';
import Tags from '../tags/tags';
import './location-single.css'
import '../../index.css'

function LocationSingle() {
    const { id } = useParams();
    const location = locationsData.find(l => l.id === id);

    if (!location) {
        return <NotFound />;
    }

    return (
        <div>
            <Slider />
            <div className='container-single'>
                <div className='details'>
                    <h2 className='nomarge'>{location.title}</h2>
                    <p className='nomarge'>{location.location}</p>
                    <Tags/>
                </div>

                <div className='profil-host'>
                    <div className='host'>
                        <p>{location.host.name}</p>
                        <img src={location.host.picture} />
                    </div>
                    <Rating /> 
                </div>
            </div>
        </div>
    );
}

export default LocationSingle;
