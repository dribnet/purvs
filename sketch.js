const canvasWidth = 960;
const canvasHeight = 500;


const letterA = {
  "size": 100,

  "offsetx":  50,
  "offsety": -11,
  "offsetx1": 20,
  "offsety1": 45,
  "offsetx2": 80,
  "offsety2": 45,

  "rotate":  180,
  "rotate2": 180,
  "rotate3": 180,
}

const letterB = {
  "size": 100,

   "offsetx":  20,
   "offsety": -20,
   "offsetx1": 20,
   "offsety1": 20,
   "offsetx2": 0,
   "offsety2": 0,

   "rotate":  270,
   "rotate2": 270,
   "rotate3": 270,

}

const letterC = {
  "size": 100,

    "offsetx":  13,
    "offsety": -40,
    "offsetx1": 50,
    "offsety1": -20,
    "offsetx2": 13,
    "offsety2": 40,

    "rotate":  270,
    "rotate2": 90,
    "rotate3": 270,
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

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  let pos1x = posx + letterData["offsetx"];
  let pos1y = posy + letterData["offsety"];
  let rotate = letterData["rotate"];

  let pos2x = posx + letterData["offsetx1"];
  let pos2y = posy + letterData["offsety1"];
  let rotate2 = letterData["rotate2"];

  let pos3x = posx + letterData["offsetx2"];
  let pos3y = posy + letterData["offsety2"];
  let rotate3 = letterData["rotate3"];

  let size = letterData["size"];


 drawSqr(pos1x,pos1y,size,rotate);
 drawSqr(pos2x,pos2y,size,rotate2);
  drawSqr(pos3x,pos3y,size,rotate3);

}
function drawSqr(x,y,size,rotation,color,sc) {

//noStroke();
stroke(2);
  let a = pow(size,2);
  let b = pow(size/2, 2);
  let sqrHeight = sqrt(a-b);
  let centreY = cos(floor(30))* size/2;

  x1 = - size/3;
  y1 = - centreY/2;
  x2 =  size/2;
  y2 = - centreY;
  x3 = 0;
  y3 =  sqrHeight - centreY;

translate(x,y);
rotate(radians(rotation));
  fill(255);
  triangle(x1,y1,x2,y2, x3, y3);
  fill(255);
    ellipse(0,0,10,10)

     rotate(radians(-rotation));
    translate(0-x,0-y);


}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
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
