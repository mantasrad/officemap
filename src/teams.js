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
        <div>TEAMS</div>
        <ul className="teamList">
        {this.state.listOfTeams.map((team)=>
          <li key={team.id} className="komanda">
          <p>{team.name}</p>
          </li>
        )}
        </ul>
        </div>
      )
    }
}

export default Teams
