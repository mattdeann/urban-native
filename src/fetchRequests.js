const getCrops = () => {
  return fetch("http://localhost:3000/api/v1/crops")
  .then(response => response.json())
  .then(data => data.crops)
}

export default getCrops