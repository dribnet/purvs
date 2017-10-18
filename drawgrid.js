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

var colors = [
  "#ff71ce",
  "#01cdfe",
  "#05ffa1",
  "#b967ff",
  "#8694E7"
]
shuffle(colors)

var vaporWords = [
  "jazz cabbage", "JAZZ", "vapor", "euphoria", "pepsi c r y s t a l", "無用漢字", "A E S T H E T I C", "wave", "情報デスク", "VIRTUAL",
  "AOL", "Netscape", "TOKYO", "Windows95", "ultra", ".js", "Explorer"
]

/* TOUR VARIABLES (required)
/* the random number seed for the tour */
var tourSeed = 99;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [0, 631, 3872],
  [1, 637, 3858],
  [2, 590, 3786],
  [3, 602, 3755],
  [4, 599, 3755],
  [5, 597, 3756],
  [10, 594, 3758]
]

/* OPTIONAL VARIABLES */
/* what is the initial zoom level (defaults to 0) */
// var initialZoomLevel = 3;
/* what is the maximum zoom level (make this at least 10. defaults to 16) */
var maxZoomLevel = 10;

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
    p.background(0, 0, 100, 0.1)
    p.noFill();
    p.colorMode(p.HSB)
    p.ellipseMode(p.CORNER)
    p.rectMode(p.CORNER)
    p.strokeCap(p.ROUND)
    p.textAlign(p.CENTER)
    p.textFont("ArialBlack")
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
  var noiseScale=0.02; 

  let scale = (x2-x1)/255

  var padding = level == 0 ? 5 : 1;
  let min = padding;
  let max = 255-padding;

  function padMap(p){
    return min + p*(max-min)
  }

  let depth = level/maxLevel;
  let color = p.color(colors[zoom%colors.length])
  color.a = 1-depth*0.9;
  p.stroke(color)
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

  drawCurves(p.floor(linesNoise*linesNoise*8))

  let jazzNoise = p.noise(x1*zoom*123566.8, y1*zoom*123096);
  if(jazzNoise < p.min(0.03*zoom, 0.2)){
    p.push();
    p.fill(0,0,0)
    p.textSize(10 + 20*p.noise(x1*123, y1*451))
    p.noStroke()
    p.textStyle(p.noise(x1*99, y1*1001) < 0.5 ? p.NORMAL : p.ITALIC)
    p.translate(255/2, 255/2);
    p.rotate((p.noise(x1*1564123, y1*673212) < 0.2) ? p.millis()/10000*p.TWO_PI : 0);
    let word = vaporWords[p.floor(p.noise(x1*100, y1*100)*vaporWords.length)];
    p.text(word, 0, 0);
    p.pop();
  }

  function drawSine(start, end){
    var offDir = p5.Vector.fromAngle(start.angleBetween(end))
    offDir.mult(80)
  
    return fillArray(8-4*depth, 0).map((val, i, arr) => {
      let prog = (-1+i)/(arr.length-3);
      let v = p5.Vector.lerp(start, end, prog)
      let offset = (-1 + 2*p.noise(
        (x1 + v.x*scale)*noiseScale, 
        (y1 + v.y*scale)*noiseScale, 
        p.millis()/2000))

      //neutralize at edges
      offset *= p.sin(v.x/255*v.x/255*p.PI) * p.sin(v.y/255*v.y/255*p.PI)

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

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
}