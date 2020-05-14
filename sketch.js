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

const height_difference = "2.7027";

const letterA = {

  "DivideHeight": height_difference*37,
  "offsetx": 0,
  "offsety": 100,
  "arcStart": -200,
  "arcFinish": 20,
  "arc2Start": 0,
  "arc2Finish":180,
  //"Divide": -95
}

const letterB = {

  "DivideHeight": height_difference*36,
  "offsetx": 0,
  "offsety": 100,
  "arcStart": 20,
  "arcFinish": 200,
  "arc2Start": 0,
  "arc2Finish":180,
  //"Divide":-20
}

const letterC = {

  "DivideHeight": height_difference*35,
  "offsetx": 30,
  "offsety": 100,
  "arcStart": 0,
  "arcFinish": 800,
  "arc2Start": 0,
  "arc2Finish":180,
  //"Divide":-50
}


const colour_DarkSquare = "#c9c9c9";
const colour_LightSquare = "#ededed";

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#333333";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(0);

  angleMode (DEGREES);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
 
  var posx = 0
  var posy = 75
  let xpos1 = letterData["xpos1"];
  let ypos1 = letterData["ypos1"];
  let xpos2 = letterData["xpos2"];
  let ypos2 = letterData["ypos2"];
  let Size1 = letterData["size1"];
  let Size2 = letterData["Size2"];
  let arcStart = letterData["arcStart"];
  let arcFinish = letterData["arcFinish"];

  let arc2Start = letterData["arc2Start"];
  let arc2Finish = letterData["arc2Finish"];

  // let arcX = posx+25
  // let arcY= posy+25
  // let arc2X= posx+75

  // let ahhxpos1 = xpos1+75;
  // let ahhypos1 = ypos1+25;
  // let ahhxpos2 = xpos2+75;
  // let ahhypos2 = ypos2+25;


  angleMode (DEGREES);

//white square
  fill (colour_LightSquare);
  rect (posx, posy, 100, 50);


// fill(50)
// strokeWeight(5);
// ellipse (55,100,20,20);


noFill ();
stroke(1);
strokeWeight (0.5);
ellipse (xpos1, ypos1, Size1, Size1);
ellipse (xpos2, ypos2, Size2,Size2);

strokeWeight(4);
arc(xpos1, ypos1, Size1, Size1, arcStart , arcFinish);
arc(xpos2, ypos2, Size2, Size2, arc2Start , arc2Finish);

noStroke ();
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
