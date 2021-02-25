import React from 'react'



const CropDetails = ({data, id}) => {
  const thisCrop = data.find(crop => crop.id === id)
  return (
    <div>
      <img src={thisCrop.photoLinks[0]} />
    </div>
  )
}

export default CropDetails;
