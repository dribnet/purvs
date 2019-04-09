const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "wid": 50,
  "hei": 180,
  "b2offsetx": 105,
  "b2offsety": 155,
  "b3offsetx": 105,
  "b3offsety": 155,
  "b4offsetx": 105,
  "b4offsety": 155,
}

const letterB = {
  "wid" : 80,
  "hei": 40,
  "b2offsetx": 450,
  "b2offsety": 125,
  "b3offsetx": 450,
  "b3offsety": 125,
  "b4offsetx": 450,
  "b4offsety": 180
}

const letterC = {
  "wid": 100,
  "hei": 100,
  "b2offsetx": 820,
  "b2offsety": 120,
  "b3offsetx": 820,
  "b3offsety": 120,
  "b4offsetx": 820,
  "b4offsety": 120
}

//big circle
const colorFront1  = "#F1A334";
//small circle
const colorFront2  = "#3c4c6c";
//background
const colorBack    = "#3c4c6c";
const colorStroke  = "#3c4c6c";


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

  let wid1 = letterData["wid"];
  let hei1 = letterData["hei"];

  let b2posx = letterData["b2offsetx"];
  let b2posy = letterData["b2offsety"];

  let b3posx = letterData["b3offsetx"];
  let b3posy = letterData["b3offsety"];

  let b4posx = letterData["b4offsetx"];
  let b4posy = letterData["b4offsety"];

  // Ellipses //
  fill(colorFront1);
  ellipse(posx, posy, 130, 180);
  fill(colorFront2);

  // letter A //
  rect(pos2x, pos2y, size2, size2);
  rect(b2posx, b2posy, wid1, hei1);
  rect(b3posx, b3posy, wid1, hei1);
  rect(b4posx, b4posy, wid1, hei1);

  // letter B //
  rect(posx, posy, size2, size2);
  rect(b2posx, b2posy, wid1, hei1);
  rect(b3posx, b3posy, wid1, hei1);
  rect(b4posx, b4posy, wid1, hei1);

  // letter C //
  rect(pos2x, pos2y, size2, size2);
  rect(b2posx, b2posy, wid1, hei1);
  rect(b3posx, b3posy, wid1, hei1);
  rect(b4posx, b4posy, wid1, hei1);
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

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
