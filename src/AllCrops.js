import React, { useState } from 'react';
import './AllCrops.css';

const AllCrops = () => {
    
    return (
        <main>
            <h2>Farmer's Market</h2>
            <section className='crops-grid'>
                <div className='seed-packet'>
                    <p>Seed Packet</p>
                </div>
                <div className='seed-packet'>
                    <p>Seed Packet</p>
                </div>
                <div className='seed-packet'>
                    <p>Seed Packet</p>
                </div>
                <div className='seed-packet'>
                    <p>Seed Packet</p>
                </div>
                <div className='seed-packet'>
                    <p>Seed Packet</p>
                </div>
            </section>
        </main>
    );
}

export default AllCrops;