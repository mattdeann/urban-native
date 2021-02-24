import React from 'react';
import './AllCrops.css';
import Crop from './Crop';

const AllCrops = ({data}) => {
    const crops = data.map(crop => {
        return (
            <Crop 
                id={crop.id}
                name={crop.name}
                image={crop.photoLinks[0]}
                key={crop.key}
            />
        )
    })

    return (
        <main>
            <h2>Farmer's Market</h2>
            <section className='crops-grid'>
                {crops}
            </section>
        </main>
    );
}

export default AllCrops;