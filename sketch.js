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
"offsetx": -20,
"offsety": 30,

"offsetx2": 20,
"offsety2": 30,

"offsetx3": 0,
"offsety3": 0,

"rotate": 0,
}

const letterB = {
 "offsetx": -20,
"offsety": 30,

"offsetx2": 20,
"offsety2": 30,

"offsetx3": 0,
"offsety3": 60,


"rotate": 90,
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
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {


  // determine parameters for second circle
  let ox = letterData["offsetx"];
  let oy = letterData["offsety"];

  let ox2 = letterData["offsetx2"];
  let oy2 = letterData["offsety2"];

  let ox3 = letterData["offsetx3"];
  let oy3 = letterData["offsety3"];

 // let rot = radians(letterData["rotate"])





drawTri(posx+ox, posy+oy);
drawTri(posx+ox2, posy+oy2);
drawTri(posx+ox3, posy+oy3);
  // draw 3 triangles
 

 

}
function drawTri(x1,y1) {


  // determine parameters for second circle
  //let size2 = letterData["size"];
let x2 = x1 -20;
let y2 = y1 + 30;
let x3 = x1 +20;
let y3 = y1 +30;




  // draw a triangle


  triangle(x1,y1,x2,y2,x3,y3);


 

}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
 

 //drawLetter(center_x-250, center_y, letterA);

 drawLetter(center_x-250, center_y, letterA);

 drawLetter(center_x, center_y, letterB);

    //drawTri(center_x-250, center_y, letterA);
  //drawLetter(center_x      , center_y, 10, letterB);
 // drawLetter(center_x + 250, center_y, 10, letterC);


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
