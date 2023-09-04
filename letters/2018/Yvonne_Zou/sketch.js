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
      "rx1":200,
      "ry1":150,
      "rx2":-100,
      "ry2":+300,
      "ox1":200,
      "oy1":150,
      "ox2":+100,
      "oy2":+300,
      "c1x":-40,
      "c1y":+250,
      "c2x":+80,
      "c2y":0,
}

const letterB = {
      "rx1":480,
      "ry1":150,
      "rx2":0,
      "ry2":+300,
      "ox1":480,
      "oy1":200,
      "ox2":0,
      "oy2":+200,
      "c1x":+70,
      "c1y":+50,
      "c2x":0,
      "c2y":+200,
}

const letterC = {
   "rx1":800,
      "ry1":150,
      "rx2":-100,
      "ry2":+150,
      "ox1":700,
      "oy1":300,
      "ox2":+100,
      "oy2":+150,
      "c1x":+10,
      "c1y":+30,
      "c2x":0,
      "c2y":+240,
}

const colorFront  = "#199cff";
const colorBack   = [255, 240, 245];
const colorStroke = "#233f11";

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

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = posx + letterData["offsetx"];
  //let pos2y = posy + letterData["offsety"];
  let rlx = letterData["rx1"];
  let rly = letterData["ry1"];
  let rlx2 = rlx + letterData["rx2"];
  let rly2 = rly + letterData["ry2"];

  let olx = letterData["ox1"];
  let oly = letterData["oy1"];
  let olx2 = olx + letterData["ox2"];
  let oly2 = oly + letterData["oy2"];

  let ex = rlx + letterData["c1x"];
  let ey = rly + letterData["c1y"];
  let ex2 = ex + letterData["c2x"];
  let ey2 = ey + letterData["c2y"]; 

  //red
   stroke(255, 69, 0);
   strokeWeight(20);
   strokeCap(ROUND);
   line(rlx, rly, rlx2, rly2);
  
  //gold
    stroke(255, 165, 0);
    strokeCap(ROUND);
    line(olx, oly, olx2, oly2);

  //circle 1
    fill(255);
    strokeWeight(15)
    stroke(255, 215, 0);
    ellipse(ex,ey,70,70)
  //circle 2
    ellipse(ex2,ey2,70,70)
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
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
