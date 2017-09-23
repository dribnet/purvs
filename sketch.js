function setup () {
  createCanvas(960, 500);

  angleMode(RADIANS)
  colorMode(HSB)

  bgColor = color(0, 0, 0, 1)
}

let size = 1;
let gridSize = 40;

function draw () {
  fill(0,0,0,0)
  stroke(0,0,0)
  strokeWeight(0.4)
  noStroke();

  // let gridSize = 25+5*st(10007+st(2023)+st(4061))

  let modX = gridSize*2*t(2000)
  let modY = gridSize*2*t(5000)
  let fX = makeMap(-gridSize*4, width+gridSize*4);
  let fY = makeMap(-gridSize*4, height+gridSize*4);

  background(bgColor)
  let i = Math.floor(millis()/5000)+Math.floor(millis()/2000)
  for(let x = modX-gridSize*4; x < width+gridSize*4+modX; x+= gridSize*2){
    for(let y = modY-gridSize*4; y < height+gridSize*4+modY; y += gridSize*2){
      i++;

      let fx = fX(x)
      let fy = fY(y)
      if(1 < fx)
        console.log(fx)
      translate(x, y)
      let heightI = 8000+fx*3000
      // let heightI = 5000

      let radius = gridSize*(1.4 -0.5*ct(heightI/2) -0.8*ct(heightI*6));

      if(gridSize*2 < radius){
        let alpha = Math.min((radius-gridSize*2)/(gridSize*2), 1);
        fill(0, 0, i%2 == 0 ? 0 : 100, 1-alpha*0.8)
      } else{
        fill(0, 0, i%2 == 0 ? 0 : 100)
      }

      drawCircle(radius, 
        genWaveMap(1+Math.floor(t(heightI*2)*4), 0.25*st(heightI)), 
        t(heightI*4)*TWO_PI)

      translate(-x, -y)
    }
  }
}

function makeMap(low, high){
  return val => (val-low)/(high-low)
}

/**
 * 
 * @param {Number} radius
 * @param {ForEachCallback} waveMap 
 * @param {Number} offset 
 */
function drawCircle(radius, waveMap, offset){
  radius = radius || 100
  waveMap = waveMap || (x => x)
  offset = offset || 0

  let points = 24

  let circle = fillArray(points, radius)
  //wavy offset
  .map(waveMap)
  //circle coordinates
  .map((radius, i, arr) => {
    let ang = i/points*TWO_PI+offset
    return createVector(radius*sin(ang), -radius*cos(ang))
  })

  drawCurve(circle)
}

function t(period){
  return millis().mod(period)/period
}

function st(period){
  return sin(t(period)*TWO_PI)
}

function ct(period){
  return cos(t(period)*TWO_PI)
}

/**
 * generates the wave over the radius of a circle
 * @param {number} waves 
 * @param {Number} height 
 * @returns {ForEachCallback}
 */
function genWaveMap(waves, height){
  height = height || 0.2
  return (radius, i, arr) => radius+radius*height*cos(i/arr.length*TWO_PI*waves)
}

function drawCurve(points){
  beginShape()
  for(let i = -1; i < points.length+2; i++){
    let point = points[i.mod(points.length)]
    curveVertex(point.x, point.y)
  }
  endShape()
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

function fillArray(n, val){
  let array = []
  for(let i = 0; i<n; i++){
    array.push(val || i)
  }
  return array;
}

//mod helper
Number.prototype.mod = function(y){
  return this - y * floor(this / y)
}