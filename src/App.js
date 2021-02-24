import React from 'react';
import './App.css';
import Header from './Header/Header';
import MyGarden from './MyGarden/MyGarden';
import AllCrops from './AllCrops';
import {crops} from './mockData';

function App() {

  return (
    <>
      <Header />
      <MyGarden />
      <AllCrops data={crops}/>
    </>
  );
}

export default App;
