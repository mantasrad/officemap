import React, {Component} from 'react'
import App from './App.js'
import Teams from './teams.js'
import Employee from './employee'
import komandos from './komandosv2.json'

class Employees extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        receivedStuff: {}
      };
    }


    render () {

      return (
        <div id="employeesWrapper">
        <div>List of Employees</div>
      <ul>

        </ul>
        </div>
      )
    }
}

export default Employees
