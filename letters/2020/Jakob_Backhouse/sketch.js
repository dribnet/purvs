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
  "sizex": 20,
  "sizey": 100,

  "offsetrectx": 37,
  "offsetrecty": -50,
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
  // "triangleTranslatex":0,
  // "triangleTranslatey":-100,
  // "rotateTriangle":0,
  // "scaleTriangle":1
}

const letterB = {
  "sizex": 20,
   "sizey": 190,
  "offsetrectx": 0,
  "offsetrecty": -140,
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
  // "triangleTranslatex":-300,
  // "triangleTranslatey":-500,
  // "rotateTriangle":0,
  // "scaleTriangle":1


}


const letterC = {
  "sizex": 20,
   "sizey": 100,

  "offsetrectx":0,
  "offsetrecty": -50,
    "trianglePoint1ax": 50,
  "trianglePoint1ay":100,
    "trianglePoint2ax": 50,
  "trianglePoint2ay": 100,
    "trianglePoint3ax": 0,
  "trianglePoint3ay": 100,
      "trianglePoint1bx": 15,
  "trianglePoint1by":-50,
    "trianglePoint2bx": 0,
  "trianglePoint2by": 50,
    "trianglePoint3bx": 0,
  "trianglePoint3by": -40,
     "trianglePoint1cx": 0,
  "trianglePoint1cy": 0,
    "trianglePoint2cx": 0,
  "trianglePoint2cy": 0,
    "trianglePoint3cx": 0,
  "trianglePoint3cy": 0,
  // "triangleTranslatex":-680,
  // "triangleTranslatey":-212,
  // "rotateTriangle":3,
  // "scaleTriangle":1

}

const colorFront1  = "#a83232";
const colorFront2  = "#1f0b02";
const colorBack    = "#ff8000";
const colorStroke  = "#e4f7f5";

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
  // let translatex = posx + letterData["triangleTranslatex"]
  // let translatey = posy + letterData["triangleTranslatey"]
  // let rotateTri = letterData["rotateTriangle"]
  // let scaleTri = letterData["scaleTriangle"]




  // draw two circles
  angleMode(DEGREES)
  fill(colorFront1);


  triangle(postri1ax, postri1ay-50, postri2ax+50,postri2ay-100,postri3ax+100,postri3ay-50);

  triangle(postri1bx, postri1by, postri2bx+50,postri2by-50,postri3bx+100,postri3by);

  triangle(postri1cx, postri1cy+50, postri2cx+50,postri2cy,postri3cx+100,postri3cy+50);
 
  fill(colorFront2)
  push();
  strokeWeight(0.1)
  stroke(colorStroke)

  // triangle(posx, posy, posx+50,posy-50,posx+100,posy);
  // triangle(posx, posy+50, posx+50,posy,posx+100,posy+50);
  // triangle(posx, posy+100, posx+50,posy+50,posx+100,posy+100);
  fill(colorFront2);

  rect(pos2x, pos2y, size2x, size2y);
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
