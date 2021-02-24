import React from 'react';
import './AllCrops.css';
import Crop from './Crop';

const AllCrops = () => {
    
    return (
        <main>
            <h2>Farmer's Market</h2>
            <section className='crops-grid'>
                <Crop />
                <Crop />
                <Crop />
                <Crop />
                <Crop />
            </section>
        </main>
    );
}

export default AllCrops;