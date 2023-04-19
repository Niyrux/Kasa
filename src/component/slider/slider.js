import React from 'react'
import { useParams } from 'react-router-dom';
import locationsData from '../../location.json';
import NotFound from '../404/404';
function Slider() {
    const { id } = useParams();
    const location = locationsData.find(l => l.id === id);

    if (!location) {
        return '';
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