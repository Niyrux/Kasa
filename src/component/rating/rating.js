import locationsData from '../../location.json';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Pleine from '../../assets/img/etoile-pleine.png';
import Vide from '../../assets/img/etoile-vide.png';
import './rating.css'

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
            stars.push(<img className='star' key={i} src={Pleine} alt="star" onClick={() => setCurrent(i)} />);
        } else {
            stars.push(<img className='star' key={i} src={Vide} alt="star" onClick={() => setCurrent(i)} />);
        }
    }

    return (
        <div className='stars'>
            {stars}
        </div>
    );
}

export default Rating;
