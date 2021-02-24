import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import MyGarden from './MyGarden/MyGarden';
import AllCrops from './AllCrops';
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
      <MyGarden data={crops} user={user}/>
      <AllCrops data={crops}/>
    </>
  );
}

export default App;
