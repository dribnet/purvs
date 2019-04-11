const canvasWidth = 960;
const canvasHeight = 500;

//colour scheme for big circle
const colorFront1  = "#FFBFDC";
//small circle(s)
const colorFront2  = "#E60066";
//background colour
const colorBack    = "#E60066";
//colour stroke
const colorStroke  = "#E60066";

const letterA = {
  "size": 50,
  "w": 50,
  "h": 80,
  "c2offsetx": 130,
  "c2offsety": 200,
  "c3offsetx": 30,
  "c3offsety": 5
}

const letterB = {
  "size": 50,
  "w" : 50,
  "h" : 50,
  "c2offsetx": 485,
  "c2offsety": 150,
  "c3offsetx": 485,
  "c3offsety": 205
}

const letterC = {
  "size": 50,
  "w": 60,
  "h": 50,
  "c2offsetx": 860,
  "c2offsety": 180,
  "c3offsetx": 850,
  "c3offsety": 180
}


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(3.5);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size1 = letterData["size"];
  let size2 = letterData["size2"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  let w1 = letterData["w"];
  let h1 = letterData["h"];

  let w2 = letterData["w_x"];
  let h2 = letterData["h_y"];

  let c2posx = letterData["c2offsetx"];
  let c2posy = letterData["c2offsety"];

  let c3posx = letterData["c3offsetx"];
  let c3posy = letterData["c3offsety"];

  // Ellipses //
  fill(colorFront1);
  ellipse(posx, posy, 140, 140);
  fill(colorFront2);

  // letter A //
  ellipse(pos2x, pos2y, size2, size2);
  ellipse(c2posx, c2posy, w1, h1);
  ellipse(c3posx, c3posy, w1, h1);

  // letter B //
  ellipse(posx, posy, size2, size2);
  ellipse(c2posx, c2posy, w1, h1);
  ellipse(c3posx, c3posy, w1, h1);

  // letter C //
  ellipse(pos2x, pos2y, size2, size2);
  ellipse(c2posx, c2posy, w1, h1);
  ellipse(c3posx, c3posy, w1, h1);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 350, center_y-75, letterA);
  drawLetter(center_x      , center_y-75, letterB);
  drawLetter(center_x + 350, center_y-75, letterC);
}


