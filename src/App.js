import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import MyGarden from './MyGarden/MyGarden';
import AllCrops from './AllCrops';
import CropDetails from './CropDetails'
import { Route, Switch } from 'react-router-dom';
import {getCrops, getUser} from './fetchRequests';

function App() {
  const [crops, setCrops] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    getCrops()
    .then(result => {
      setCrops(result)
    })
    getUser(4)
    .then(result => {
      setUser(result)
    })
  }, [])

  return (
    <>
      <Header />
      <Route exact path="/" render={() => {
      return (
      <>
        <MyGarden data={crops} user={user} />
        <AllCrops data={crops} />
      </>
      )
    }}/>
    <Route path="/:id" render={ ( { match }) => <CropDetails data={crops} id={match.params.id}/>} />
    </>
  );
}

export default App;
