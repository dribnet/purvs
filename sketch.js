const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my ten variable per letter are:
 *
	arc Start: start angle of the ring between 0 and 360 degrees
	arc End: end angle of the ring between 0 and 360 degrees
	length1: length of first line
	tilt1: tilt angle of  first line
	position X1: x pos of first line
	position Y1: y pos of first line
	length2: length of second line
	tilt2: tilt angle of second line
	position X2: x pos of second line
	position Y2: y pos of second line
 *
 */

const letterA = {
    "arcStart": 120,
	"arcEnd": 330,
	"length1": 200,
	"tilt1": 20,
	"positionX1": 50,
	"positionY1": 50,
	"length2": 0,
	"tilt2": 0,
	"positionX2": 0,
	"positionY2": 0
}

const letterB = {
    "arcStart": -100,
	"arcEnd": 100,
	"length1": 250,
	"tilt1": 90,
	"positionX1": 0,
	"positionY1": -120,
	"length2": 130,
	"tilt2": 0,
	"positionX2": 0,
	"positionY2": 0
 }
 
const letterC = {
    "arcStart": 45,
	"arcEnd": -45,
	"length1": 0,
	"tilt1": 0,
	"positionX1": 0,
	"positionY1": 0,
	"length2": 0,
	"tilt2": 0,
	"positionX2": 0,
	"positionY2": 0
 }

const colorBack = "#e3eded";
const colorRing = "#C8C8C8";
const colorLine = "#000000";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(letterData) {
  // determine parameters for second circle
  let start = letterData["arc Start"];
  let end = letterData["arc End"];
  let length1 = letterData["length1"];
  let tilt1 = letterData["tilt1"];
  let posx1 = letterData["position X1"];
  let posy1 = letterData["position Y1"];
  let length2 = letterData["length2"];
  let tilt2 = letterData["tilt2"];
  let posx2 = letterData["position X2"];
  let posy2 = letterData["position Y2"];

  //draw line underneath ring
  if(length1>0){
	drawLine(length1, tilt1, posx1, posy1);
  }
  
  stroke(colorRing);
  strokeWeight(10);
  //draw ring
  arc(50, 100, 150, 150, start, end); 
  
  strokeWeight(2);
  stroke(colorLine);
  //draw line above ring
  if(length2>0){
	drawLine(length2, tilt2, posx2, posy2);
  }
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(letterA);
  //drawLetter(letterB);
  //drawLetter(letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}