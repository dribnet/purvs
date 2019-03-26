const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "size": 50,
  "wid": 50,
  "hei": 100,
  "offsetx": 50,
  "offsety": 40,
  "b2offsetx": 130,
  "b2offsety": 210,
}

const letterB = {
  "size": 50,
  "wid" : 50,
  "hei" : 100,
  "offsetx":50,
  "offsety": 40,
  "b2offsetx": 499,
  "b2offsety": 162,
  "tilt": 58
}

const letterC = {
  "size": 50,
  "wid": 100,
  "hei": 50,
  "offsetx": 50,
  "offsety": 50,
  "b2offsetx": 860,
  "b2offsety": 180
}

//big circle
const colorFront1  = "#FFAD00";
//small circle
const colorFront2  = "#386466";
//background
const colorBack    = "#386466";
const colorStroke  = "#386466";


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

  let wid2 = letterData["wid_x"];
  let hei2 = letterData["hei_y"];

  let b2posx = letterData["b2offsetx"];
  let b2posy = letterData["b2offsety"];

  let tilt = letterData["tilt"];

  //let b3posx = letterData["b3offsetx"];
  //let b3posy = letterData["b3offsety"];

  // Ellipses //
  fill(colorFront1);
  ellipse(posx, posy, 140, 140);
  fill(colorFront2);

  // letter A //
  ellipse(pos2x, pos2y, size2, size2);
  ellipse(b2posx, b2posy, wid1, hei1);

  // letter B //
  ellipse(posx, posy, size2, size2);
  ellipse(b2posx, b2posy, wid1, hei1, tilt);
  //ellipse(b3posx, b3posy, wid1, hei1);

  // letter C //
  ellipse(pos2x, pos2y, size2, size2);
  ellipse(b2posx, b2posy, wid1, hei1);
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
