import React, {Component} from 'react'
import App from './App.js'
import komandos from './komandosv2.json'

class Teams extends Component {
  constructor(props) {
      super(props);
      this.state = {
        listOfTeams: komandos,
        currentTeam: []
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
this.setState({ listOfTeams: komandos, currentTeam: newestList });

         }
       }



    render () {
const globalTeam = this.state.listOfTeams[this.state.currentTeam];
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
        <div employeesTeam={this.state.listOfTeams[this.state.currentTeam]}></div>
        <ul className="emp-hidden">
        {this.state.listOfTeams[this.state.currentTeam] ? <Employees globalTeam={globalTeam} /> : console.log('false')}
        </ul>
        </div>
      )
    }
}


class Employees extends Component {
  constructor(props) {
      super(props);
      this.state = {
        receivedStuff: {}
      };
    }

    render () {
      let test = this.props.globalTeam.employees;
      return (

        <div id="employeesWrapper">
      <ul>{test.map((currentValue, index) => <li key={currentValue.id}>{currentValue.firstName + " " + currentValue.lastName}</li>)}
      </ul>
        </div>
      )
    }
}



export default Teams
