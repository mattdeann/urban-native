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

  const filteredCrops = () => {
    const userCrops = [];
      const currentUser = user;
      console.log(currentUser)
      if (currentUser.my_garden) {
        currentUser.my_garden.forEach(cropId => {
          userCrops.push(crops.find(crop => {
            return crop.id === cropId
          }))
        })
      }
      console.log(userCrops);
      return userCrops;
    }

  const currentUserGarden = filteredCrops().map(crop => {
    return (
      crop && <Crop
        id={crop.id}
        name={crop.name}
        image={crop.photo_links[0]}
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
