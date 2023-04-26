import locationsData from '../../location.json';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Pleine from '../../img/etoile-pleine.png';
import Vide from '../../img/etoile-vide.png';

function Rating() {
    const { id } = useParams();
    const location = locationsData.find(l => l.id === id);
    const [current, setCurrent] = useState(location.rating);

    if (!location) {
        return ' ';
    }

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= current) {
            stars.push(<img key={i} src={Pleine} alt="star" onClick={() => setCurrent(i)} />);
        } else {
            stars.push(<img key={i} src={Vide} alt="star" onClick={() => setCurrent(i)} />);
        }
    }

    return (
        <div>
            <div>
                {stars}
            </div>
        </div>
    );
}

export default Rating;
