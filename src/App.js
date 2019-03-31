import React, { Component } from 'react';
import './App.css';
import Teams from './teams.js';
import Employees from './employees.js'
import Map from './map.js'
import Canvas from './canvas.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>OFFICE MAP</header>
        <Teams/>
        <Canvas/>
        <Employees/>
      </div>
    );
  }
}

export default App;
