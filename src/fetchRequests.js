const getCrops = () => {
  return fetch("https://urban-native-api.herokuapp.com/api/v1/crops")
  .then(response => {
    return response.json();
  })
  .then(data => data)
}

const getUser = id => {
  return fetch(`https://urban-native-api.herokuapp.com/api/v1/users/${id}`)
  .then(response => response.json())
  .then(data => data)
}

export {getCrops, getUser}