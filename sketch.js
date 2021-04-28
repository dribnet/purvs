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
    "startx": -5,
    "starty": 0,
    "endx": 0,
    "endy": 0,
    "startx2": 25,
    "starty2": -25,
    "endx2": 25,
    "endy2": 25,
    "startx3": 0,
    "starty3": 0,
    "endx3": -5,
    "endy3": 0,
    "SW":80
}

const letterB = {
    "startx": 105,
    "starty": 0,
    "endx": 100,
    "endy": 0,
    "startx2": 75,
    "starty2": -50,
    "endx2": 75,
    "endy2": 25,
    "startx3": 105,
    "starty3": 0,
    "endx3": 100,
    "endy3": 0,
    "SW": 80
}

const letterC = {
    "startx": 202.5,
    "starty": 0,
    "endx": 197.5,
    "endy": 0,
    "startx2": 200,
    "starty2": 0,
    "endx2": 200,
    "endy2": 0,
    "startx3": 228,
    "starty3": -10,
    "endx3": 228,
    "endy3": 10,
    "SW":80
}


const backgroundColor  = "#fffcd6";
const strokeColor      = "#000000";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let sw = letterData["SW"];
  let startx = letterData["startx"];
  let starty = letterData["starty"];
  let endx = letterData["endx"];
  let endy = letterData["endy"];
  // let SW = letterData["SW"];

  let startx2 = letterData["startx2"];
  let starty2 = letterData["starty2"];
  let endx2 = letterData["endx2"];
  let endy2 = letterData["endy2"];
  // let SW2 = letterData["SW2"];

  let startx3 = letterData["startx3"];
  let starty3 = letterData["starty3"];
  let endx3 = letterData["endx3"];
  let endy3 = letterData["endy3"];


push();
  const translatex = 350;
  const translatey = 250;
  translate(translatex,translatey);
  stroke(strokeColor);
  strokeWeight(4);
  // drawing size chaning blue line 
  push();
  stroke('#76c8ff');
  // strokeWeight(80);
  strokeWeight(sw);
  line(startx, starty, endx, endy);
  pop();
 // drawing blue Line2
 push();
  stroke('#76c8ff');
  strokeWeight(30);
  line(startx2, starty2, endx2, endy2);
  pop();
 // drawing yellow Line3
 push();
  stroke('#fffcd6');
  strokeWeight(30);
  line(startx3, starty3, endx3, endy3);
  pop();
  // drawing light blue line 4
  
pop();

  // draw two circles
 //  fill('#0');
 //  ellipse(posx, posy, 150, 150);

 //  fill('#000000');
 //  ellipse(pos2x, pos2y, size2, size2);

 // fill('#000000');
 //  ellipse(pos3x, pos3y, size3, size3);


  //  fill('white');
  // ellipse(pos2x, pos2y, size2, size2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
