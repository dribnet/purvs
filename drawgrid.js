/*
 * This is the funciton to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */

var amount = 1;
var maxLevel = 2;

/**
 * @param {p5} p 
 * @param {Number} x1 
 * @param {Number} x2 
 * @param {Number} y1 
 * @param {Number} y2 
 * @param {Number} z 
 * @param {Number} zoom 
 */
function drawGrid(p, x1, x2, y1, y2, z, zoom, level) {
  level = level || 0
  zoom = zoom || 0

  if(level == 0){
    p.background(0,0,0)
    p.noFill();
    p.colorMode(p.HSB)
    p.ellipseMode(p.CORNER)
    p.rectMode(p.CORNER)
    p.strokeCap(p.ROUND)
  }
  
  //render lower levels
  if(level < maxLevel){
    for(let x = 0; x < 2; x++){
      for(let y = 0; y < 2; y++){
        p.push()
        p.translate(255*x/2, 255*y/2)
        p.scale(0.5)
        drawGrid(p,
          p.map(x, 0, 2, x1, x2),
          p.map(x+1, 0, 2, x1, x2),
          p.map(y, 0, 2, y1, y2),
          p.map(y+1, 0, 2, y1, y2),
          z, zoom+1, level+1)
        p.translate(-255*x/2, -255*y/2)
        p.pop()
      }
    }
  }

  // debug - show border
  var color = tinycolor()
  var noiseScale=0.02; 

  let scale = (x2-x1)/255

  var padding = level == 0 ? 5 : 1;
  let min = padding;
  let max = 255-padding;

  function padMap(p){
    return min + p*(max-min)
  }

  p.stroke((zoom/3*360).mod(360), 90, 100-level/maxLevel*40)
  p.strokeWeight(10)

  function drawCurves(lines){
    let positions = [
      [0, 0], [0, 0.5], [0, 1], [0.5, 1], [1, 1], [1, 0.5], [1, 0], [0.5, 0]
    ].map(function(pos){
      pos = pos.map(padMap)
      return p.createVector(pos[0], pos[1])
    })

    for(let i = 0; i < lines; i++){
      let typeNoise = p.noise(5123+x1*noiseScale, 126+y1*noiseScale, i)

      let posI = p.floor(typeNoise*positions.length)
      let pos = positions[posI];
      positions.splice(posI, 1);

      //draw from center to point
      drawCurve(drawSine(p.createVector(padMap(0.5), padMap(0.5)), pos))
    }
  }

  let linesNoise = p.noise(x1*noiseScale, y1*noiseScale);

  drawCurves(p.floor(linesNoise*4))

  function drawSine(start, end){
    var offDir = p5.Vector.fromAngle(start.angleBetween(end)+p.PI/2)
    offDir.mult(80)
  
    return fillArray(10, 0).map((val, i, arr) => {
      let prog = (-1+i)/(arr.length-3);
      let v = p5.Vector.lerp(start, end, prog)
      let offset = (-1 + 2*p.noise(
        (x1 + v.x*scale)*noiseScale, 
        (y1 + v.y*scale)*noiseScale, 
        p.millis()/2000))

      //neutralize at edges
      offset *= p.sin(prog*p.PI)

      // let offset = 80 * p.sin(x1*y1 + scale*prog*p.TWO_PI + scale*p.millis()/5000*p.TWO_PI)
      v.add(p5.Vector.mult(offDir, offset));
  
      return v;
    })
  }

  function drawCurve(points){
    p.beginShape() 
    for(let i = 0; i < points.length; i++){
      let point = points[i.mod(points.length)]
      p.curveVertex(point.x, point.y)
    }
    p.endShape()
  }
}

/**
 * 
 * @param {number} n 
 * @param {*} val 
 */
function fillArray(n, val){
  let array = []
  for(let i = 0; i<n; i++){
    array.push(val || i)
  }
  return array;
}



//mod helper
Number.prototype.mod = function(y){
  return this - y * Math.floor(this / y)
}