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
  "size": 80,
  "offsetx": 0,
  "offsety": 35
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const colorFront  = "#199cff";
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  // main_canvas = createCanvas(canvasWidth, canvasHeight);
  // main_canvas.parent('canvasContainer');
createCanvas(960, 500);
  // color/stroke setup
  // fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

// function drawLetter(posx, posy, scale, letterData) {
//   // determine parameters for second circle
//   let size2 = letterData["size"];
//   let pos2x = posx + letterData["offsetx"];
//   let pos2y = posy + letterData["offsety"];

//   // draw two circles
//   ellipse(posx, posy, 150, 150);
//   ellipse(pos2x, pos2y, size2, size2);
// }

function draw () {
  // clear screen
  background(0);

  // // compute the center of the canvas
  // let center_x = canvasWidth / 2;  
  // let center_y = canvasHeight / 2;

  // // draw the letters A, B, C from saved data
  // drawLetter(center_x - 250, center_y, 10, letterA);
  // drawLetter(center_x      , center_y, 10, letterB);
  // drawLetter(center_x + 250, center_y, 10, letterC);
  push();
  translate(width / 8, height / 4);
  bottoml(0, height / 4, 120, 250, 220, 0, TWO_PI-QUARTER_PI)
  handlel(-60, 0, -60, height / 4, 0, 0, 60, height / 4, 220);
  topl(0, 0, 120, 250, 220, 0, TWO_PI-QUARTER_PI);
  pop();



  push();
  translate(width / 2, height / 4);
  bottoml(0, height / 4, 120, 250, 220, 0, TWO_PI);
  handlel(0, 0, -60, height / 4, 0, 0, 60, height / 4, 220);
  topl(0, 0, 30, 220, 220, TWO_PI-QUARTER_PI, PI+QUARTER_PI);
  pop();

  push();
  translate(7 * width / 8, height / 4);
  bottoml(0, height / 4, 120, 100, 100, 0, TWO_PI-QUARTER_PI);
  handlel(-60, height / 5, -60, height / 4, -60, height / 5, -60, height / 4, 100);;
  topl(0, height / 5, 120, 250, 220, 0, TWO_PI-QUARTER_PI);
  pop();
}

function topl(x, y, r, cf, cs, radians1, radians2) {
  stroke(cs);
  fill(cf);
  arc(x, y, r, r / 2, radians1, radians2);

}

function handlel(x, y, x1, y1, x2, y2, x3, y3, cs){

  stroke(cs);
  line(x, y, x1, y1);
  line(x2, y2, x3, y3);

}

function bottoml(x, y, r, cf, cs,radians1, radians2) {
  
  stroke(cs);
  fill(cf);
  arc(x, y, r, r / 2, radians1, radians2);
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
