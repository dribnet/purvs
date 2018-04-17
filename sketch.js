
const colorQuad = [200, 200, 200];
const colorCircle = [0, 0, 0];
const colorBack = [255, 255, 255];

const canvasWidth = 960;
const canvasHeight = 500;

const ballSize = 80;

const arrowLP = [-120, 100];
const arrowTP = [0, -100];
const arrowRP = [120, 100];
const arrowBP = [0, 40];

/* 
 * my nine variables per letter are:
 *
    stretch x: stretches the arrow shape on the original x axis
    stretch y: stretches the arrow shape on the original y axis
	tilt: rotates the arrow in degrees
    ball1(2) vis: visibility of the ball
    ball1(2) x: x axis position of ball
    ball1(2) y: y axis position of ball
 *
 */

const letterA = {
	"stretch X": 0,
	"stretch Y": 0,
	"tilt": 0,
	"visibility1": 0,
	"position1 X": 0,
	"position1 Y": 0,
	"visibility2": 0,
	"position2 X": 0,
	"position2 Y": 0,
}

const letterB = {
	"stretch X": 30,
	"stretch Y": -30,
    "tilt": -90,
	"visibility1": 1,
    "position1 X": 70,
	"position1 Y": -70,
	"visibility2": 1,
    "position2 X": 70,
	"position2 Y": 70,
}

const letterC = {
	"stretch X": 30,
	"stretch Y": -30,
	"tilt": -90,
	"visibility1": 0,
	"position1 X": 0,
	"position1 Y": 0,
	"visibility2": 0,
	"position2 X": 0,
	"position2 Y": 0,
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  stretchx = letterData["stretch X"];
  stretchy = letterData["stretch Y"];
  tilt = letterData["tilt"];
  posx1 = posx + letterData["position1 X"];
  posy1 = posy + letterData["position1 Y"];
  vis1 = letterData["visibility1"];
  posx2 = posx + letterData["position2 X"];
  posy2 = posy + letterData["position2 Y"];
  vis2 = letterData["visibility2"];

  angleMode(DEGREES);
  noStroke();
  
  //draw 2 black circles
  fill(colorCircle);
  drawBall(vis1, posx1, posy1);
  drawBall(vis2, posx2, posy2);
 
  //draw arrow quad
  fill(colorQuad);
  push();
  translate(posx, posy);
  rotate(tilt);
  quad(arrowLP[0] - stretchx, arrowLP[1], arrowTP[0], arrowTP[1] - stretchy, arrowRP[0] + stretchx, arrowRP[1], arrowBP[0], arrowBP[1]);
  pop();
}

function drawBall(v, x, y){
  if(v==1){
	ellipse(x, y, ballSize, ballSize);
  }
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

