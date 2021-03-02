import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import MyGarden from './MyGarden/MyGarden';
import AllCrops from './AllCrops';
import CropDetails from './CropDetails'
import { Route, Switch } from 'react-router-dom';
import GrowInfo from './GrowInfo/GrowInfo';
import {getCrops, getUser} from './fetchRequests';

function App() {
  const [crops, setCrops] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    getCrops()
    .then(result => {
      setCrops(result)
    })
    getUser(3)
    .then(result => {
      setUser(result)
    })
  }, [])

  const toggleFavorite = (id) => {
    console.log('click')
    console.log(id)
    if (user.my_garden.includes(id)) {
      const index = user.my_garden.indexOf(id)

      user.my_garden.splice(index, 1)
    } else {
      user.my_garden.push(id)
    }
    console.log(user.my_garden)
  }

  return (
    <>
      <Header />
      <Route exact path="/" render={() => {
      return (
      <>
        <MyGarden data={crops} user={user} toggleFavorite={toggleFavorite} />
        <AllCrops data={crops} toggleFavorite={toggleFavorite} />
      </>
      )
    }}/>
    <Route path="/:id" render={ ( { match }) => <CropDetails data={crops} id={match.params.id}/>} />
    </>
  );
}

export default App;
