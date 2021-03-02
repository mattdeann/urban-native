import React from 'react';
import './Crop.css';
import { Link } from 'react-router-dom'

const Crop = ({id, name, image}) => {
    return (
      <Link to={`/${id}`} id={id} aria-label={name}>
        <div className='seed-packet'>
            <h3 className={name}>{name}</h3>
            <img src={image} alt={`${name}`}></img>
            <p className="footnote">© Urban Native</p>
        </div>
      </Link>
    );
}

export default Crop;
