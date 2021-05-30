import React from 'react';
import Character from './pages/characters/Character';
import logo from './assets/Logo-Marvel.png'
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <img className="logo" src={logo}/>
      <Character/>
    </div>
  );
}

export default App;
