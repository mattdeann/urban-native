import React from 'react';
import './MyGarden.css';
import Crop from '../Crop';

function MyGarden({data, user}) {
  // const [crops, setCrops] = useState([])

  // useEffect(() => {
  //   console.log(getCrops())
  //   getCrops()
  //   .then(result => {
  //     return setCrops(result)
  //   })
  // }, [])
  const crops = data;
  console.log(user)

  const filteredCrops = () => {
    const userCrops = [];
      const currentUser = user;
      console.log(user)
      if (currentUser.myGarden) {
        currentUser.myGarden.forEach(cropId => {
          userCrops.push(crops.find(crop => {
            return crop.id === cropId
          }))
        })
      }
      return userCrops;
    }

  const currentUserGarden = filteredCrops().map(crop => {
    return (
      crop && <Crop
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
