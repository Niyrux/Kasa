import React from 'react';
import { useParams } from 'react-router-dom';
import locationsData from '../../location.json';

function LocationSingle() {
    const { id } = useParams();
    const location = locationsData.find(l => l.id === id);

    if (!location) {
        return <div>Location not found</div>;
    }

    return (
        <div>
            <h1>{location.title}</h1>
            <p>{location.description}</p>
            {/* Afficher d'autres détails de l'emplacement unique ici */}
        </div>
    );
}

export default LocationSingle;
