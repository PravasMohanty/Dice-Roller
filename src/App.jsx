// src/App.jsx
import React from 'react';
import Dice from './components/Dice';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Dice Roller</h1> */}
      <Dice />
    </div>
  );
}

export default App;