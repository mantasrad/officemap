import React, {Component} from 'react'
import App from './App.js'
import Employees from './employees.js'
import Teams from './teams.js'
class Canvas extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image
    const elemLeft = canvas.offsetLeft
    const elemTop = canvas.offsetTop
    const elements = []
    var i=0
    var r

    img.onload = () => {
      ctx.drawImage(img, 0, 0)

ctx.stroke();
canvas.addEventListener('click', function() { }, false);
canvas.addEventListener('click', function(event) {
   let xVal = event.pageX - elemLeft
   let yVal = event.pageY - elemTop;
   elements.forEach(function(ele) {
      if (yVal > ele.top && yVal < ele.top + ele.height && xVal > ele.left && xVal < ele.left + ele.width) {
         console.log(xVal + " " + yVal);
      }
   });
 }, false);

 elements.push({
   colour:"#1C2128",
   width: 40,
   height: 40,
   left: 520,
   top: 847
 },
 {
   colour:"#1C2128",
   width: 40,
   height: 40,
   left: 600,
   top: 850
 });

 canvas.onmousemove = function(event) {
   var rect = this.getBoundingClientRect(),
         x = event.clientX - rect.left,
         y = event.clientY - rect.top,
         i = 0, r;

        while(r = elements[i++]) {
        ctx.beginPath();
        ctx.rect(r.left, r.top, r.width, r.height);


if (ctx.isPointInPath(x,y)){
  ctx.fillStyle = "red"
} else {
  ctx.fillStyle = "blue";
}

    ctx.fill();
}
};

};
};

  render() {
      return(
        <div id="canvasWrapper">
          <canvas ref="canvas" width={2063} height={2070} />
          <img ref="image" src={require('./officemap.jpg')} className="hidden" />
          <button></button>
        </div>
      )
    }
  }
  export default Canvas
