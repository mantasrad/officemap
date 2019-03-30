import React, {Component} from 'react'
import App from './App.js'
import Employees from './employees.js'
import Teams from './teams.js'

class Canvas extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image

    img.onload = () => {
      ctx.drawImage(img, 0, 0)
    }
  }
  render() {
      return(
        <div>
          <canvas ref="canvas" width={2063} height={2070} />
          <img ref="image" src={require('./officemap.jpg')} className="hidden" />
        </div>
      )
    }
  }
  export default Canvas
