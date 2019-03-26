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

//LETTER DATA
const letterA = {
  "backTriCount":1,
  "frontTriCount":1,
  "frontAlign": -5
}

const letterB = {
  "backTriCount":2,
  "frontTriCount":2,
  "frontAlign": 7
}

const letterC = {
  "backTriCount":1,
  "frontTriCount":1,
  "frontAlign":15
}

//CONSTANTS
const orange  = "#ffb759";
const colorBack    = "#b9e1e5";
const white  = "#ffffff";


//SETUP
function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(white);
  strokeWeight(5);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

//DRAWLETTER
function drawLetter(posx, posy, letterData) {
//parameters
let backNumTri = letterData["backTriCount"];
let frontNumTri = letterData["frontTriCount"];
let frontMove = letterData["frontAlign"];

let backSize = 160;
let frontSize =130;

  //draw shapes
  fill(orange);
  stroke(orange);

  for(let i =0; i<backNumTri; i++){
    ellipse(posx, posy-50+(i*50), backSize);
  }

  fill(white);
  stroke(white);
  for(let i =0; i<frontNumTri; i++){
    ellipse(posx+frontMove, posy-50+(i*50), frontSize);
  }

}

//DRAW
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
