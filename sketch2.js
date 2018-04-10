const canvasWidth = 960;
const canvasHeight = 500;

const colorFront  = "#333332";
const colorBack   = "#e2e2e0";
const colorStroke = "#e2e2e0";

function setup () {

  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  rectMode(CENTER);

  fill(colorFront);
  stroke(colorStroke);

  noLoop();
}

function draw () {
  background(colorBack);

  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;
  fill(colorFront);
  rect(center_x, center_y, 150, 150);

  fill(colorStroke)
  var numVertices = 3;
  var spacing = 360 / numVertices
  translate(width/2,height/2);
  //rotate(360)
  beginShape();
  for(var i = 0; i < 25; i++){
  	var x = cos(radians(i * spacing)) * 100;
  	var y = sin(radians(i * spacing)) * 100;
  	vertex(x,y);
  }
  endShape();

}