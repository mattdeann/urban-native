const getCrops = () => {
  return fetch("http://localhost:3001/api/v1/crops")
  .then(response => {
    return response.json();
  })
  .then(data => data)
}

const getUser = id => {
  return fetch(`http://localhost:3001/api/v1/users/${id}`)
  .then(response => {
    return response.json();
  })
  .then(data => data)
}

export {getCrops, getUser}