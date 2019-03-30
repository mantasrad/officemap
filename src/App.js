import React, { Component } from 'react';
import './App.css';
import Teams from './teams.js';
import Employees from './employees.js'
import Map from './map.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Map/>
        </header>
      </div>
    );
  }
}

export default App;
