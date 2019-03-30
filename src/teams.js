import React, {Component} from 'react'
import App from './App.js'
import Employees from './employees.js'

class Teams extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        listOfTeams: []
      };
    }
    render () {
      return (
        <div>
        <div>This is teams div</div>
        <Employees/>
        </div>
      )
    }
}

export default Teams
