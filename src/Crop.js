import React from 'react';
import './Crop.css';
import { Link } from 'react-router-dom'

const Crop = ({id, name, image, toggleFavorite}) => {
    return (
        <div className='seed-packet'>
          <section className="seed-packet-top">
            <h3>{name}</h3>
            <article onClick={() => toggleFavorite(id)} className="toggle">Add to Garden</article>
          </section>
          <Link to={`/${id}`} id={id} aria-label={name}>
            <img className = "crop-image" src={image} alt={`${name}`} />
          </Link>
          <p className="footnote">© Urban Native</p>
        </div>
    );
}

export default Crop;
