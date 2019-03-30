import React, { Component } from 'react';
import './App.css';
import Teams from './teams.js';
import Employees from './employees.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Teams/>
        </header>
      </div>
    );
  }
}

export default App;
