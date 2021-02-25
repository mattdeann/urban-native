import React from 'react';



const CropDetails = ({data, id}) => {
  console.log(id)
  const thisCrop = data.find(crop => crop.id === parseInt(id))
  console.log('Single crop', thisCrop)
  return (
    <div>
      <img src={thisCrop.photoLinks[0]} />
    </div>
  )
}

export default CropDetails;
