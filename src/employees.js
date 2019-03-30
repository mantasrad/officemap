import React, {Component} from 'react'
import App from './App.js'
import Teams from './teams.js'

class Employees extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        listOfEmployees: []
      };
    }
    render () {
      return (
        <div>This is employees div</div>
      )
    }
}

export default Employees
