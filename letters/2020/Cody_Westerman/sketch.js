const canvasWidth = 960;
const canvasHeight = 500;



const letterA = {
  "size": 150,
  "sizeW": 150,
  "offsetx": 50,
  "offsety": -25,
  "rectL": 110,
  "rectW": 40,
  "radi": 3,
  "ellPosx":240,
  "ellPosy":250
}

const letterB = {
  "size": 150,
  "sizeW": 150,
  "offsetx": -100,
  "offsety": -105,
  "rectL": 190,
  "rectW": 40,
  "radi": 3,
  "ellPosx":470,
  "ellPosy":250

}

const letterC = {
  "size": 180,
  "sizeW": 180,
  "offsetx": 0,
  "offsety": -45,
  "rectL": 95,
  "rectW": 80,
  "radi": 24,
  "ellPosx":720,
  "ellPosy":250

}

const colorFront1  = "#F15025";
const colorFront2  = "#FFFFFF";
const colorBack    = "#2176AE";
const colorStroke  = "#000000";

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
  let size2 = letterData["size"];
  let size3 = letterData["sizeW"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let rectLen = letterData["rectL"];
  let rectWid = letterData["rectW"];
  let rectRad = letterData["radi"];
  let posEllx = letterData["ellPosx"];
  let posElly = letterData["ellPosy"];

  // draw two circles
  fill(colorFront1);
  ellipse(posEllx, posElly, size2, size3);
  fill(colorFront2);
  rect(pos2x, pos2y, rectWid, rectLen, rectRad);
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