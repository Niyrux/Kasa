import locationsData from '../../location.json';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Tags() {
    const { id } = useParams();
    const location = locationsData.find(l => l.id === id);
    const tags = location.tags
    tags.forEach(tag => {
        return <div>{tag}</div>
    });

    if (!location) {
        return ' ';
    }
    return (
        <div>{location.tags}</div>
    )
}

export default Tags;