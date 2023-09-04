const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "x": [0,100,50,0],
  "y": [0,0,25,0],
  "shp": [1,1,3,0],
}

const letterB = {
  "x": [0,50,50,0],
  "y": [0,25,75,0],
  "shp": [1,3,3,0],
}

const letterC = {
  "x": [50,75,0,0],
  "y": [50,50,0,0],
  "shp": [2,6,0,0]
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  rectMode(CORNERS);
  ellipseMode(CENTER);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let x = letterData["x"];
  let y = letterData["y"];
  let shp = letterData["shp"];

  for (i=0;i<4;i++) {
    if (shp[i] == 0) {

    } else if (shp[i] == 1) {
      fill(0);
      rect(posx+x[i],posy+y[i],posx+x[i]+5,posy+y[i]+100);
    } else if (shp[i] == 2) {
      fill(0);
      ellipse(posx+x[i],posy+y[i],100,100);
    } else if (shp[i] == 3) {
      fill(0);
      ellipse(posx+x[i],posy+y[i],50,50);
    } else if (shp[i] == 4) {
      fill(255);
      rect(posx+x[i],posy+y[i],posx+x[i]+5,posy+y[i]+100);
    } else if (shp[i] == 5) {
      fill(255);
      ellipse(posx+x[i],posy+y[i],100,100);
    } else if (shp[i] == 6) {
      fill(255);
      ellipse(posx+x[i],posy+y[i],50,50);
    }
  }
  // ellipse(posx,posy,50,50);
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
