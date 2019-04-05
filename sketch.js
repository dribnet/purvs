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
    "arcsize1": 70,
    "arcsize2": 40,
    "x_arc1": 10,
    "y_arc1": 10,
    "x_arc2": 10,
    "y_arc2": 10,
    "deg_arc1": 110,
    "deg_arc2": 70,
    "deg_arc3": 100,
    "deg_arc4": 200,
    "linex1": 100,
    "linex2": 100,
    "linex3": 100,
    "linex4": 200,
    "liney1": 100,
    "liney2": 100,
    "liney3": 100,
    "liney4": 200
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

const colorFront1  = "#ffffff";
const colorFront2  = "#ffffff";
const colorBack    = "#000000";
const colorStroke  = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(1.5);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  angleMode(DEGREES)
  // determine parameters for second circle
let size2 = letterData["size"];
let x_arc1 = posx + letterData["x_arc1"];
let y_arc1 = posy + letterData["y_arc1"];
let x_arc2 = posx + letterData["x_arc2"];
let y_arc2 = posy + letterData["y_arc2"];
let arcsize1 =letterData["arcsize1"];
let arcsize2 =letterData["arcsize2"];
let deg_arc1 =letterData["deg_arc1"];
let deg_arc2 =letterData["deg_arc2"];
let deg_arc3 =letterData["deg_arc3"];
let deg_arc4 =letterData["deg_arc4"];

let linex1 = posx + letterData["linex1"];
let liney1 = posy + letterData["liney1"];
let linex2 = posx + letterData["linex2"];
let liney2 = posy + letterData["liney2"];
let linex3 = posx + letterData["linex3"];
let liney3 = posy + letterData["liney3"];
let linex4 = posx + letterData["linex4"];
let liney4 = posy + letterData["liney4"];
  print(int(letterData["liney2"]));
  // draw arcs
  noFill();
  strokeWeight(10)
  arc(x_arc1,y_arc1,arcsize1,arcsize1,deg_arc1,deg_arc2);
  arc(x_arc2,y_arc2,arcsize2,arcsize2,deg_arc3,deg_arc4);    
//ellipse(100,100,100,100)
  line(linex1,liney1,linex2,liney2)
  line(linex3,liney3,linex4,liney4)
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
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
