import React from 'react';
import logo from './assets/Logo-Marvel.png'
import "./App.css";
import Comics from './pages/comics/Comics';

const App = () => {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo"/>
      <Comics/>
    </div>
  );
}

export default App;
