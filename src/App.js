import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import MyGarden from './MyGarden/MyGarden';
import AllCrops from './AllCrops';
import getCrops from './fetchRequests';
import {crops} from './mockData';

function App() {
  const [crops, setCrops] = useState([])

  useEffect(() => {
    console.log(getCrops())
    
  }, [])

  return (
    <>
      <Header />
      <MyGarden />
      <AllCrops data={crops}/>
    </>
  );
}

export default App;
