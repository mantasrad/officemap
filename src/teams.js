import React, {Component} from 'react'
import App from './App.js'
import Employees from './employees.js'
import komandos from './komandosv2.json'

class Teams extends Component {
  constructor(props) {
      super(props);
      this.state = {
        listOfTeams: komandos
      };
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
      if (e.target.getAttribute('data-nr')){
let oldList = this.state.listOfTeams;
let newList;
var newestList

newList = Object.keys(oldList);
newestList = newList.filter(bam => bam === e.target.getAttribute('data-nr'));
console.log(newestList);
         }
       }

    render () {

      return (
        <div>
        <div>TEAMS</div>
        <ul className="teamList">


{Object.keys(this.state.listOfTeams).map((key) =>
  <li key={this.state.listOfTeams[key].id} className="komanda" >
  <button key={this.state.listOfTeams[key].id} data-nr={this.state.listOfTeams[key].id} onClick={this.handleClick}>{this.state.listOfTeams[key].name}</button>

    </li>
)
}
        </ul>
        </div>
      )
    }
}

export default Teams
