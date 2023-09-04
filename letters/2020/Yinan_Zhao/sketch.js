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
    "x1": 39.5,
    "y1": 4,
    "hy1":20,
    "sw1": 1.4,

    "x2":7.5,
    "y2":20,
    "hy2":91.5,
    "sw2":8,
    
    "x3":8.5,
    "y3":194,
    "hy3":130,
    "sw3":4.5,

    "ly":130.4

}

const letterB = {
  "x1": 2.5,
  "y1": 100,
  "hy1":59,
  "sw1": 4.6,

  "x2":25,
  "y2":71,
  "hy2":96,
  "sw2":6.7,
    
  "x3":1.5,
  "y3":149,
  "hy3":100,
  "sw3":4.6,

  "ly":88.8
}

const letterC = {
  "x1": 30.5,
  "y1": 70,
  "hy1":36,
  "sw1": 2.5,

  "x2":3,
  "y2":33,
  "hy2":99,
  "sw2":6.2,
    
  "x3":25,
  "y3":198,
  "hy3":158,
  "sw3":2.5,

  "ly":100
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#384061";
const colorStroke  = "#233f11";
const blue  = "#384061";
const yellow = "#F2D28A";
const dark = "#B38800";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup


  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for quads & lines

  let x1 = letterData["x1"];//top quad width 
  let y1 = letterData["y1"];//top quad height
  let hy1 = letterData["hy1"];//top quad horizontal symmetry line (y position)
  let sw1 =letterData["sw1"];//top quad strokeweight
  
  let x2 = letterData["x2"];//middle quad width
  let y2 = letterData["y2"];//middle quad height
  let hy2 = letterData["hy2"];//middle quad y position (horizontal symmetry line)
  let sw2 =letterData["sw2"];

  let x3 = letterData["x3"];//bottom quad width
  let y3 = letterData["y3"];//bottom quad height
  let hy3 = letterData["hy3"];//bottom quad y position
  let sw3 =letterData["sw3"];//bottom quad strokeweight

  let ly = letterData["ly"];//y position for group of lines

  push();
  translate(posx, posy);

  //frame--------------------------------------------  
  rectMode(RADIUS);
  stroke(yellow);
  strokeWeight(2);
  noFill();
  var a = 50;
  rect(50,100,a,100);

  //lines---------------------------------------------
  for(i = 0;i<=6;i++){
    // var g = 6*i;
    // line(0+g,ly-3*i,100-g,ly-3*i);
    // line(0+g,ly+3*i,100-g,ly+3*i);
    stroke(yellow);
    strokeWeight(1);
    strokeCap(ROUND);
    line(0,ly+3*i,100,ly+3*i);//parallel lines with same width

  }
  
  //main body-------------------------------------------
  strokeCap(SQUARE);

  noFill();

  stroke(yellow);
  strokeWeight(sw2);
  quad(50,y2,x2,hy2,50,hy2*2-y2,100-x2,hy2);//middle quad

  stroke(blue);
  strokeWeight(sw2-4);
  quad(50,y2,x2,hy2,50,hy2*2-y2,100-x2,hy2);//blue quad following Mquad

  stroke(yellow);
  strokeWeight(sw1);
  quad(50,y1,x1,hy1,50,hy1*2-y1,100-x1,hy1);//top quad
  
  stroke(yellow);
  strokeWeight(sw3);
  quad(50,y3,x3,hy3,50,hy3*2-y3,100-x3,hy3);//bottom quad

  pop();

}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 300, center_y-100, letterA);
  drawLetter(center_x -50  , center_y-100, letterB);
  drawLetter(center_x + 200, center_y-100, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
