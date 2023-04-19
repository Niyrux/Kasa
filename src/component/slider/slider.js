import React from 'react'
import { useParams } from 'react-router-dom';
import locationsData from '../../location.json';

function Slider() {
    const { id } = useParams();
    const location = locationsData.find(l => l.id === id);

    if (!location) {
        return <div>Location not found</div>;
    }
    const imagesSlider = location.pictures;
    const image = imagesSlider.map((img) =>
        <li>{img}</li>
    )
    return (
        <div>{image}</div>

    )
}

export default Slider