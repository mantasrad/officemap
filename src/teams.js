import React, {Component} from 'react'
import App from './App.js'
import Employees from './employees.js'
import komandos from './komandos.json'

class Teams extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        listOfTeams: komandos
      };
    }
    render () {
      return (
        <div>
        <div>This is teams div</div>
        </div>
      )
    }
}

export default Teams
