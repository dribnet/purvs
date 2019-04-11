const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
	"pos1x": 0,
	"pos2x": -50,
	"pos3x": 0,
	"pos4x": 50,
	
	"pos1y": -70,
	"pos2y": 70,
	"pos3y": 0,
	"pos4y": 70,

	"cryspos1x": 0,
	"cryspos2x": -35,
	"cryspos3x": 0,
	"cryspos4x": 35,

	"cryspos1y": -35,
	"cryspos2y": 20,
	"cryspos3y": 10,
	"cryspos4y": 20,
}

const letterB = {
	"pos1x": 50,
	"pos2x": -50,
	"pos3x": 0,
	"pos4x": -50,
	
	"pos1y": 0,
	"pos2y": 70,
	"pos3y": 0,
	"pos4y": -70,

	"cryspos1x": 0,
	"cryspos2x": -50,
	"cryspos3x": 35,
	"cryspos4x": 35,

	"cryspos1y": 0,
	"cryspos2y": -70,
	"cryspos3y": -50,
	"cryspos4y": -50,
}

const letterC = {
	"pos1x": -50,
	"pos2x": 50,
	"pos3x": 0,
	"pos4x": 50,
	
	"pos1y": 0,
	"pos2y": 70,
	"pos3y": 0,
	"pos4y": -70,

	"cryspos1x": 0,
	"cryspos2x": -50,
	"cryspos3x": 50,
	"cryspos4x": 50,

	"cryspos1y": 0,
	"cryspos2y": 0,
	"cryspos3y": -70,
	"cryspos4y": -70,
}

const colorFront1  = "#5F5F5F";
const colorFront2  = "#009366";
const colorBack    = "#000000";
const colorStroke  = "#DEC300";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let pos1x = posx + letterData["pos1x"];
  let pos2x = posx + letterData["pos2x"];
  let pos3x = posx + letterData["pos3x"];
  let pos4x = posx + letterData["pos4x"];

  let pos1y = posy +letterData["pos1y"];
  let pos2y = posy +letterData["pos2y"];
  let pos3y = posy +letterData["pos3y"];
  let pos4y = posy +letterData["pos4y"];

  let cryspos1x = posx + letterData["cryspos1x"];
  let cryspos2x = posx + letterData["cryspos2x"];
  let cryspos3x = posx + letterData["cryspos3x"];
  let cryspos4x = posx + letterData["cryspos4x"];

  let cryspos1y = posy + letterData["cryspos1y"];
  let cryspos2y = posy + letterData["cryspos2y"];
  let cryspos3y = posy + letterData["cryspos3y"];
  let cryspos4y = posy + letterData["cryspos4y"];

  // draw 
  fill(colorFront1);
  beginShape();
  vertex(pos1x, pos1y)
  vertex(pos2x, pos2y)
  vertex(pos3x, pos3y)
  vertex(pos4x, pos4y)
  vertex(pos1x, pos1y)
  endShape()

  fill(colorFront2);
  beginShape();
  vertex(cryspos1x, cryspos1y)
  vertex(cryspos2x, cryspos2y)
  vertex(cryspos3x, cryspos3y)
  vertex(cryspos4x, cryspos4y)
  vertex(cryspos1x, cryspos1y)
  endShape()
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
