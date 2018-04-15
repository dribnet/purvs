var x = 0
var y = 0
var r = 120
var c = 0
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  translate(width / 2, height / 4);
  strokeWeight(6);
  bottom()
  handle();
  top();


function bottom() {  
  stroke(230);
  fill(255);
  arc(x, y + height / 4, r, r / 2, 0, TWO_PI-QUARTER_PI);
}
  
function handle(){
  stroke(255);
  line(x - r/2, y, x - r/2, y + height / 4);
  line(TWO_PI-QUARTER_PI, TWO_PI-QUARTER_PI, x + r/2, y + height / 4);
}

function top() {
  stroke(230);
  // stroke(255, 255, 255, 150);
  fill(240);
  // arc(x, y, r, r / 2, 0, PI);
  arc(x, y, 120, 60, 0, TWO_PI-QUARTER_PI);
  // arc(x, y + height / 4, r, r /2, TWO_PI-QUARTER_PI, PI+QUARTER_PI);
}
  
}