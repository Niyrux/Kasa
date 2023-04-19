import React from 'react';
import { useParams } from 'react-router-dom';
import locationsData from '../../location.json';
import NotFound from '../404/404';

function LocationSingle() {
    const { id } = useParams();
    const location = locationsData.find(l => l.id === id);

    if (!location) {
        return <NotFound />;
    }

    return (
        <div>
            <img src={location.cover} />
            <p>{location.description}</p>
            {/* Afficher d'autres détails de l'emplacement unique ici */}
        </div>
    );
}

export default LocationSingle;
