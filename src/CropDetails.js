import React from 'react';
import './CropDetails.css'



const CropDetails = ({data, id}) => {

  const thisCrop = data.find(crop => crop.id === parseInt(id))
  return (
    <div className="crop-details-container">
      <div className="crop-details-image-wrapper">
        <img className="crop-details-image" src={thisCrop.photoLinks[0]} />
      </div>
      <div className="details-text-wrapper">
        <h1 className="crop-details-name">{thisCrop.name}</h1>
        <p className="crop-details-description" >Description: {thisCrop.description}</p>
        <p className="crop-sun-requirements">Sun Requirement: {thisCrop.sunReqs}</p>
        <p className="sowing-method">Sowing Method: {thisCrop.sowingMethod}</p>
        <p className="crop-spread">Spread: {thisCrop.spread}cm</p>
        <p className="row-spacing">Row Spacing: {thisCrop.rowSpacing}cm</p>
        <p className="crop-height">Height: {thisCrop.height}cm</p>
        <p className="maturity">Days To Maturity: {thisCrop.daysToMaturity}</p>
        <div className="button-wrapper">
          <button>Back ⬅️</button>
        </div>
      </div>
    </div>
  )
}

export default CropDetails;
