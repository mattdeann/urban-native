import React from 'react';
import './Crop.css';

const Crop = ({id, name, image}) => {
    return (
        <div className='seed-packet'>
            <h3>{name}</h3>
            <img src={image} alt={`Photo of ${name}`}></img>
        </div>
    );
}

export default Crop;