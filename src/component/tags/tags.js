import locationsData from '../../location.json';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Tags() {
    const { id } = useParams();
    const location = locationsData.find(l => l.id === id);
    const tags = location.tags;

    if (!location) {
        return ' ';
    }

    const tagElements = tags.map(tag => <div className='tag' key={tag}>{tag}</div>);

    return (
        <div  className='tags'>
            {tagElements }
        </div>
    );
}

export default Tags;
