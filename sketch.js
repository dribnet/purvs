const canvasWidth = 960;
const canvasHeight = 500;


const letterA = {
  "offset1": -65,
  "offset2": -65,
  "offset3": 30,
  "offset4": -90,
  "rot1": 10,
  "rot2": 170,
  "rot3": 90,
  "rot4": 90
}

const letterB = {
  "offset1": -70,
  "offset2": -70,
  "offset3": 60,
  "offset4": 90,
  "rot1": 130,
  "rot2": -130,
  "rot3": 180,
  "rot4": 0
}

const letterC = {
  "offset1": -60,
  "offset2": -60,
  "offset3": 0,
  "offset4": 0,
  "rot1": 90,
  "rot2": -90,
  "rot3": 0,
  "rot4": 0

}

const colorFront  = "#F7134A";
const colorBack   = "#27ECF7";
const colorStroke = "#F787D5";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for the arcs
   let rot1 = letterData["rot1"];
   let rot2 = letterData["rot2"];
   let rot3 = letterData["rot3"];
   let rot4 = letterData["rot4"];
  let offset1 = letterData["offset1"];
  let offset2 = letterData["offset2"];
  let offset3 = letterData["offset3"];
  let offset4 = letterData["offset4"];
  

  push();
  translate(posx, posy);

//arc1
  push();
  rotate(rot1);
  fill(colorFront);
  arc(offset1, 0, 200, 200, 80, 280, CHORD);
  fill(colorBack);
  noStroke();
    arc(offset1+31, 0, 150, 200, 96, 264, CHORD);
  pop();

//arc2
   push();
   rotate(rot2);
  fill(colorFront);
  arc(offset2, 0, 200, 200, 80, 280, CHORD);
  fill(colorBack);
  noStroke();
    arc(offset2+31, 0, 150, 200, 96, 264, CHORD);
  pop();

//arc3
   push();
   rotate(rot3);
  fill(colorFront);
  arc(offset3, 0, 200, 200, 80, 280, CHORD);
  fill(colorBack);
  noStroke();
    arc(offset3+31, 0, 150, 200, 96, 264, CHORD);
  pop();

//arc4
   push();
   rotate(rot4);
  fill(colorFront);
  arc(offset4, 0, 100, 100, 80, 280, CHORD);
  fill(colorBack);
  noStroke();
    arc(offset4+17, 0, 50, 100, 96, 264, CHORD);
  pop();

  pop();
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 300, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
  drawLetter(center_x + 300, center_y, 10, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
