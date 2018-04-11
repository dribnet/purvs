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
   "x1":250,
    "x2":175,
      "x3":290,
    "x4":275,

    "y1":250,
    "y2":175,
    "y3":200,
    "y4":305,

    "z1":180,
    "z2":250,
    "z3":320,
    "z4":250,





}

const letterB = {

   "x1":500,
    "x2":175,
      "x3":500,
    "x4":325,

    "y1":500,
    "y2":250,
    "y3":567,
    "y4":275,

    "z1":567,
    "z2":275,
    "z3":450,
    "z4":360,



}

const letterC = {
  "x1":750,
    "x2":175,
      "x3":700,
    "x4":225,

      "y1":750,
    "y2":325,
    "y3":700,
    "y4":275,

    "z1":700,
    "z2":200,
    "z3":700,
    "z4":300,
}


const colorBack   = "#e3eded";
const colorStroke = "#ffccfa";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup

  stroke(colorStroke);
  strokeWeight(6);
  noFill();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
 


 let xval1 = letterData["x1"];
 let xval2 = letterData["x2"];
  let xval3 = letterData["x3"];
 let xval4 = letterData["x4"];

 let yval1 = letterData["y1"];
 let yval2 = letterData["y2"];
  let yval3 = letterData["y3"];
 let yval4 = letterData["y4"];


 let zval1 = letterData["z1"];
 let zval2 = letterData["z2"];
  let zval3 = letterData["z3"];
 let zval4 = letterData["z4"];

  // draw two circles


 line(xval1, xval2,xval3,xval4);
 line(yval1, yval2,yval3,yval4);
 line(zval1, zval2,zval3,zval4);

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
