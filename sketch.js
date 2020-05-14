  const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetrectx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "sizex": 20,
  "sizey": 90,
  "offsetrectx": 37,
  "offsetrecty": 10,
  "trianglePoint1ax": 68, //small
  "trianglePoint1ay": 80,
    "trianglePoint2ax": 50,
  "trianglePoint2ay": 80,
    "trianglePoint3ax": 20,
  "trianglePoint3ay": 100,
      "trianglePoint1bx": 0, //big
  "trianglePoint1by": 50,
    "trianglePoint2bx": -10,
  "trianglePoint2by": 0,
    "trianglePoint3bx": 0,
  "trianglePoint3by": -20,
     "trianglePoint1cx": 0,
  "trianglePoint1cy": 0,
    "trianglePoint2cx": 0,
  "trianglePoint2cy": 0,
    "trianglePoint3cx": -20,
  "trianglePoint3cy": 0,
}

const letterB = {
  "sizex": 20,
   "sizey": 190,
  "offsetrectx": 0,
  "offsetrecty": -90,
    "trianglePoint1ax": 0,
  "trianglePoint1ay": 0,
    "trianglePoint2ax": 0,
  "trianglePoint2ay": 0,
    "trianglePoint3ax": 0,
  "trianglePoint3ay": 0,
      "trianglePoint1bx": 0,
  "trianglePoint1by": 0,
    "trianglePoint2bx": 0,
  "trianglePoint2by": 0,
    "trianglePoint3bx": 0,
  "trianglePoint3by": -20,
     "trianglePoint1cx": 0,
  "trianglePoint1cy": 0,
    "trianglePoint2cx": 0,
  "trianglePoint2cy": -10,
    "trianglePoint3cx": 0,
  "trianglePoint3cy": 0,
}

const letterC = {
  "sizex": 20,
   "sizey": 100,
  "offsetrectx":0,
  "offsetrecty": 0,
    "trianglePoint1ax": 80,
  "trianglePoint1ay": 82,
    "trianglePoint2ax": 50,
  "trianglePoint2ay": 120,
    "trianglePoint3ax": 0,
  "trianglePoint3ay": 100,
     "trianglePoint1bx": 0,
  "trianglePoint1by": -50,
    "trianglePoint2bx": 0,
  "trianglePoint2by": 50,
    "trianglePoint3bx": 0,
  "trianglePoint3by": -50,
     "trianglePoint1cx": 0,
  "trianglePoint1cy": 0,
    "trianglePoint2cx": 0,
  "trianglePoint2cy": 0,
    "trianglePoint3cx": 0,
  "trianglePoint3cy": 0,
}

// const letterC = {
//   "sizex": 50,
//    "sizey": 100,
//   "offsetrectx": 0,
//   "offsetrecty": 0
// }

// const letterC = {
//   "sizex": 50,
//    "sizey": 100,
//   "offsetrectx": 0,
//   "offsetrecty": 0
// }

const colorFront1  = "#a83232";
const colorFront2  = "#000000";
const colorBack    = "#ff8000";
const colorStroke  = "#ff007b";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
noStroke()

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2x = letterData["sizex"];
  let size2y = letterData["sizey"];
  let pos2x = posx + letterData["offsetrectx"];
  let pos2y = posy + letterData["offsetrecty"];
  let postri1ax = posx + letterData["trianglePoint1ax"];
  let postri1ay = posy + letterData["trianglePoint1ay"];
  let postri2ax = posx + letterData["trianglePoint2ax"];
  let postri2ay = posy + letterData["trianglePoint2ay"];                                                            
  let postri3ax = posx + letterData["trianglePoint3ax"];
  let postri3ay = posy + letterData["trianglePoint3ay"];
  let postri1bx = posx + letterData["trianglePoint1bx"];
  let postri1by = posy + letterData["trianglePoint1by"];
  let postri2bx = posx + letterData["trianglePoint2bx"];
  let postri2by = posy + letterData["trianglePoint2by"];
  let postri3bx = posx + letterData["trianglePoint3bx"];
  let postri3by = posy + letterData["trianglePoint3by"];
  let postri1cx = posx + letterData["trianglePoint1cx"];
  let postri1cy = posy + letterData["trianglePoint1cy"];
  let postri2cx = posx + letterData["trianglePoint2cx"];
  let postri2cy = posy + letterData["trianglePoint2cy"];
  let postri3cx = posx + letterData["trianglePoint3cx"];
  let postri3cy = posy + letterData["trianglePoint3cy"];

  // draw two circles
  fill(colorFront1);
  triangle(postri1ax, postri1ay, postri2ax+50,postri2ay-50,postri3ax+100,postri3ay);
  triangle(postri1bx, postri1by+50, postri2bx+50,postri2by,postri3bx+100,postri3by+50);
  triangle(postri1cx, postri1cy+100, postri2cx+50,postri2cy+50,postri3cx+100,postri3cy+100);
  fill(colorFront2)
  push();
  strokeWeight(0.1)
  stroke(colorStroke)
  rect(pos2x, pos2y, size2x, size2y);
  pop();
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 300, center_y, letterA);
  drawLetter(center_x -50     , center_y, letterB);
  drawLetter(center_x + 200, center_y, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
