import React, {Component} from 'react'
import App from './App.js'
import Employees from './employees.js'
import Teams from './teams.js'

class Map extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       listOfTeams: []
  //     };
  //   }
    render () {
      return (
        <div>
        <div className="mapdiv">MAPS DIV</div>
        <Teams/>
        <Employees/>
        </div>
      )
    }
}

export default Map
