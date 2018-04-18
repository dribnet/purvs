const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my eight variable per letter are:
 *
    line1(2) length: length of line
    line1(2) tilt: angle in degrees of line
    line1(2) x: x axis position of line
    line1(2) y: y axis position of line
 *
 */

const letterA = {
	"position1 X": 0,
	"position1 Y": -85,
	"tilt1": 0,
	"length1": 100,
	"position2 X": 0,
	"position2 Y": 0,
	"tilt2": 0,
	"length2": 0,
}

const letterB = {
	"position1 X": -10,
	"position1 Y": -85,
	"tilt1": -30,
	"length1": 100,
	"position2 X": -10,
	"position2 Y": -85,
	"tilt2": 25,
	"length2": 200,
}

const letterC = {
	"position1 X": 35,
	"position1 Y": -40,
	"tilt1": -105,
	"length1": 150,
	"position2 X": 40,
	"position2 Y": -50,
	"tilt2": 19,
	"length2": 150,
}

const colorFront = [0, 0, 0];
const colorBack = [255, 255, 255];

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  posx1 = posx + letterData["position1 X"];
  posy1 = posy + letterData["position1 Y"];
  tilt1 = letterData["tilt1"];
  len1 = letterData["length1"];
  posx2 = posx + letterData["position2 X"];
  posy2 = posy + letterData["position2 Y"];
  tilt2 = letterData["tilt2"];
  len2 = letterData["length2"];

  angleMode(DEGREES);
  
  //background triangle
  noStroke();
  fill(colorFront);
  triangle(posx, posy, posx + 150, posy, posx, posy - 180);
  
  //white stripes
  fill(colorBack);
  push();
  translate(posx1, posy1);
  rotate(tilt1);
  rect(0, 0, len1, 10);
  pop();
  push();
  translate(posx2, posy2);
  rotate(tilt2);
  rect(0, 0, len2, 10);
  pop();
  
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
