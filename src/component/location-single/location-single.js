import React from 'react';
import { useParams } from 'react-router-dom';
import locationsData from '../../location.json';
import NotFound from '../404/404';
import Slider from '../slider/slider';
import Rating from '../rating/rating';
import Tags from '../tags/tags';

function LocationSingle() {
    const { id } = useParams();
    const location = locationsData.find(l => l.id === id);

    if (!location) {
        return <NotFound />;
    }

    return (
        <div>
            <Slider />
            <div>
                <div>
                    <h2>{location.title}</h2>
                    <p>{location.location}</p>
                </div>

                <div>
                    <p>{location.host.name}</p>
                    <img src={location.host.picture} />
                </div>
            </div>
            <Rating />
            <Tags />


        </div>
    );
}

export default LocationSingle;
