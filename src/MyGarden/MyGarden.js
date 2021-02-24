import React from 'react';
import './MyGarden.css';
import {crops, users} from '../mockData';
import Crop from '../Crop';

function MyGarden() {
  const currentUser = users[2];
  const filteredCrops = () => {
    const userCrops = [];
    currentUser.myGarden.forEach(cropId => {
      userCrops.push(crops.find(crop => {
        return crop.id === cropId
      }))
    })
    console.log(userCrops);
    return userCrops;
  }

  const currentUserGarden = filteredCrops().map(crop => {
    return (
      <Crop 
        id={crop.id}
        name={crop.name}
        image={crop.photoLinks[0]}
        key={crop.id}
      />
    )
  })

  return (
    <article className="my-garden">
      <h1 className="my-garden-header">My Garden</h1>
      <section className="my-crops">
        {currentUserGarden}
      </section>
    </article>
  )
}

export default MyGarden;