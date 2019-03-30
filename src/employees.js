import React, {Component} from 'react'
import App from './App.js'
import Teams from './teams.js'
import darbuotojai from './darbuotojai.json'

class Employees extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        listOfEmployees: darbuotojai
      };
    }
    render () {
      return (
        <div id="employeesWrapper">
        <div>This is employees div</div>
        <ul>
          {darbuotojai.map((darbuotojas) =>
            <li key={darbuotojas.id} className="book">
            <p>{darbuotojas.firstName + " " + darbuotojas.lastName}</p>
            </li>
          )}
          </ul>
        </div>
      )
    }
}

export default Employees
