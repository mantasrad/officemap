import React, {Component} from 'react'
import App from './App.js'
import Teams from './teams.js'
import komandos from './komandosv2.json'

class Employees extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        listOfEmployees: komandos
      };
    }
    render () {
      return (

        <div id="employeesWrapper">
        <div>This is employees div</div>
        <ul>
        {Object.keys(this.state.listOfEmployees).map((key) =>
          <li key={this.state.listOfEmployees[key].id} className="komanda">
          {console.log(this.state.listOfEmployees[key].id)}

            </li>
        )
        }
          </ul>
        </div>
      )
    }
}

export default Employees
