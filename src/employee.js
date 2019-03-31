import React, {Component} from 'react'
import App from './App.js'
import Teams from './teams.js'
import Employees from './employees.js'
import komandos from './komandosv2.json'

class Employee extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        employeeData: []
      };
    }

    render () {
      return (

        <div id="employeeWrapper">
        </div>
      )
    }
}

export default Employee
