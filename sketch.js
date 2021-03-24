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
  // "size": 80,
  "posx1": 30,
  "posy1": 75,
  "posx2": 58,
  "posy2": 20,
  "posx3": 86,
  "posy3": 75,
}

const letterB = {
  "posx1": 30,
  "posy1": 20,
  "size": 10,
  "posx2": 35,
  "posy2": 55,
  "size2": 40,
}

const letterC = {
  "size": 55,
  "posx1": 10,
  "posy1": 48,
  "start":90,
  "end":270
}

//const backgroundColor  = "#e3eded";
const backgroundColor  = "#F5F5F5";
const strokeColor      = "#233f11";

// const darkBlue  = "#199cff";
// const lightBlue  = "#59ccff";
const blueMunsell  = "#2199AB";
const ming  = "#166A7A";
const fuzzyWuzzy  = "#CF6B5E";
const newYorkPink  = "#D99185";
const champagnePink  = "#EDDDD4";
const maizeCrayola  = "#F9C846";
const maximumYellowRed  = "#F9BD46";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
  angleMode(DEGREES)
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetterA(center_x - 250, center_y, letterA);
  drawLetterB(center_x      , center_y, letterB);
  drawLetterC(center_x + 250, center_y, letterC);
}

// function drawLetter(posx, posy, letterData) {
//   // determine parameters for second circle
//   let size2 = letterData["size"];
//   let pos2x = posx + letterData["offsetx"];
//   let pos2y = posy + letterData["offsety"];


//   // draw two circles
//   fill(darkBlue);
//   ellipse(posx, posy, 150, 150);
//   fill(lightBlue);
//   ellipse(pos2x, pos2y, size2, size2);
// }

function drawLetterA(posx, posy, letterData) {
  
  let posx1 = posx + letterData["posx1"];
  let posy1 = posy + letterData["posy1"];
  let posx2 = posx + letterData["posx2"];
  let posy2 = posy + letterData["posy2"];
  let posx3 = posx + letterData["posx3"];
  let posy3 = posy + letterData["posy3"];
  // draw letter
  
  fill(blueMunsell);
  noStroke();
  triangle(posx1, posy1, posx2, posy2, posx3, posy3);
  push();
  fill(ming);
  noStroke();
  triangle(posx1+10, posy1, posx2+5, posy2+10, posx3, posy3);
  pop();
  push();
  fill(ming);
  noStroke();
  ellipse(posx1+28, posy1-65, 10, 10);
  pop();

}

function drawLetterB(posx, posy, letterData) {
  
  let size = letterData["size"];
  let size2 = letterData["size2"];
  let posx1 = posx + letterData["posx1"];
  let posy1 = posy + letterData["posy1"];
  let posx2 = posx + letterData["posx2"];
  let posy2 = posy + letterData["posy2"];

  // draw letter
 
  fill(fuzzyWuzzy);
  noStroke();
  ellipse(posx2, posy2, size2);
  push();
  fill(newYorkPink);
  noStroke();
  ellipse(posx2, posy2 -20, size2-10);
  pop();
  push();
  fill(champagnePink);
  noStroke();
  rect(posx1, posy1, size, size + 45);
  pop();
  push();
  fill(fuzzyWuzzy);
  noStroke();
  ellipse(posx1+5, posy1-10, 10, 10);
  ellipse(posx1+5, posy1-30, 10, 10);
  pop();
  
}

function drawLetterC(posx, posy, letterData) {
  
  let size = letterData["size"];

  let posx1 = posx + letterData["posx1"];
  let posy1 = posy + letterData["posy1"];
  let startAngle = letterData["start"];
  let stopAngle = letterData["end"];
 
  // draw letter
  
  fill(maizeCrayola);
  noStroke();
  arc(posx1, posy1, size, size,startAngle, stopAngle,CHORD);
  
  push();
  fill(maximumYellowRed);
  noStroke();
  arc(posx1+20, posy1, size, size,startAngle, stopAngle,CHORD);
  pop();

  push();
  fill(maizeCrayola);
  noStroke();
  ellipse(posx1-5, posy1-38, 10, 10);
  ellipse(posx1+15, posy1-38, 10, 10);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
