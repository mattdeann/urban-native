import React from 'react';
import './Crop.css';

const Crop = ({id, name, image}) => {
    return (
        <div className='seed-packet'>
            <h3>{name}</h3>
            <img src={image} alt={`${name}`}></img>
            <p className="footnote">© Urban Native</p>
        </div>
    );
}

export default Crop;