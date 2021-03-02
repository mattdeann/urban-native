import React from 'react';
import './AllCrops.css';
import Crop from './Crop';

function AllCrops({data, user, toggleFavorite}) {
  const crops = () => {
    if (data) {
      return data.map(crop => {
        return (
          <Crop 
            id={crop.id}
            user={user}
            name={crop.name}
            image={crop.photo_links[0]}
            key={crop.id}
            toggleFavorite={toggleFavorite}
          />
        )
      })
    }
  } 
    
  return (
      <main>
          <h2>Farmer's Market</h2>
          <section className='crops-grid'>
              {crops()}
          </section>
      </main>
  );
}

export default AllCrops;