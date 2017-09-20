function setup () {
  createCanvas(960, 500);

  angleMode(RADIANS)
  colorMode(HSB)

  bgColor = color(0, 0, 100, 0.1)

  slider = createSlider(5, 100, 20);
  slider.position(10, 10);
  slider.style('width', '200px');
  slider.parent('cPoints')
  slider.changed(function(){
    cPoints = slider.value()
  })
}
let cPoints = 20;

function draw () {
  cPoints = 20 + 19*sin(millis()/10000*TWO_PI)
  //initial array size and elements
  push()
  translate(mouseX, mouseY)
  drawCircle(null, genWaveMap(5, 5000))
  // translate(0, -50)
  fill(0, 0, 100)
  drawCircle(50, genWaveMap(10, -400))
  pop()



  background(bgColor)
}

function drawCircle(radius, waveMap){
  radius = radius || 100
  let circle = fillArray(cPoints, radius || 100)
  //wavy offset
  .map(waveMap || (x => x))
  //circle coordinates
  .map((radius, i, arr) => {
    let ang = i/cPoints*TWO_PI
    return createVector(radius*sin(ang), -radius*cos(ang))
  })

  drawCurve(circle, CLOSE)
}

function genWaveMap(waves, interval){
  return  (radius, i) => radius+radius/10*sin(i/cPoints*TWO_PI*waves + millis()/interval*TWO_PI)
}

function drawCurve(points){
  beginShape()
  for(let i = 0; i < points.length+3; i++){
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