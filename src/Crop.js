import React from 'react';
import './Crop.css';
import { Link } from 'react-router-dom'

const Crop = ({id, name, image}) => {
    return (
      <Link to={`/crops/${id}`} id={id} aria-label={name}>
        <div className='seed-packet'>
            <h3>{name}</h3>
            <img src={image} alt={`Photo of ${name}`}></img>
        </div>
      </Link>
    );
}

export default Crop;
