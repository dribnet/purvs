/*
 * Here are some things you can edit
 */
var Alpha = 255
const colorFront  = "#199cff";
const colorBack   = "#aae4f7";
const colorStroke = "#000000";
var colorTriangle = [240, 240, 240, Alpha]; 
var colorCircleGrid = [224, 0, 0, Alpha];
var colorSquare = [0, 0, 0, Alpha];
var colorCircle = [74, 85, 89, Alpha];
const colorLines   = "#000090";
const colorWhite = [255,255,255];

/* 
 * do not edit this rest of this file, instead edit the letter
 * drawing code in draw_letters.js
 */

const canvasWidth = 960;
const canvasHeight = 500;

// these variables are used for animation
let soloCurLetter = "B";
let soloLastLetter = "A"
let soloPrevObj = alphabet["default"];
let soloIsAnimating = false;
let soloNumAnimationFrames = 30;
let soloCurAnimationFrame = 0;

// Handy string of all letters available
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // with no animation, redrawing the screen is not necessary
  // noLoop();
}

const interpolation_is_on = (typeof interpolate_letter === "function")

function getCharacterInterpolationObj(percent, oldObj, newObj) {
  if (interpolation_is_on) {
    // safe to use the function
    obj = interpolate_letter(percent, oldObj, newObj)
  }
  else {
    if(percent == 0) {
      obj = oldObj;
    }
    else {
      obj = newObj;
    }
  }
  return obj;
}

function interpolate_letter (percent, oldObj, newObj) {
let new_letter = {};

if(percent<=50){
  Alpha = map(percent, 50, 0, 0, 255);
}else if(percent<=90){
  Alpha = map(percent, 50, 100, 0, 255);
}else
    Alpha = 255;

// textSize(15);
// text(percent, 0, 0);
new_letter["TL"] = map(percent, 0, 100, oldObj["TL"], newObj["TL"]);
new_letter["TM"] = map(percent, 0, 100, oldObj["TM"], newObj["TM"]);
new_letter["TR"] = map(percent, 0, 100, oldObj["TR"], newObj["TR"]);
new_letter["ML"] = map(percent, 0, 100, oldObj["ML"], newObj["ML"]);
new_letter["MM"] = map(percent, 0, 100, oldObj["MM"], newObj["MM"]);
new_letter["MR"] = map(percent, 0, 100, oldObj["MR"], newObj["MR"]);
new_letter["BL"] = map(percent, 0, 100, oldObj["BL"], newObj["BL"]);
new_letter["BM"] = map(percent, 0, 100, oldObj["BM"], newObj["BM"]);
new_letter["BR"] = map(percent, 0, 100, oldObj["BR"], newObj["BR"]);
new_letter["Square"] = map(percent, 0, 100, oldObj["Square"], newObj["Square"]);
new_letter["Circle"] = map(percent, 0, 100, oldObj["Circle"], newObj["Circle"]);
new_letter["Triangle"] = map(percent, 0, 100, oldObj["Triangle"], newObj["Triangle"]);
return new_letter;

}

function getObjFromChar(c) {
  if (c in alphabet) {
    return alphabet[c];
  }
  else {
    return alphabet["default"];
  }  
}

function getCharacterInterpolation(percent, oldChar, newChar) {
  let oldObj = getObjFromChar(oldChar);
  let newObj = getObjFromChar(newChar);
  return getCharacterInterpolationObj(percent, oldObj, newObj);
}


function computeCurrentSoloChar() {
  // now figure out what object to draw
  var obj;
  if (soloIsAnimating) {
    nextObj = getObjFromChar(soloCurLetter);
    progress = map(soloCurAnimationFrame, 0, soloNumAnimationFrames, 0, 100);
    obj = getCharacterInterpolationObj(progress, soloPrevObj, nextObj)
  }
  else {
    obj = getObjFromChar(soloCurLetter);
  }
  return obj;
}

let hot_key_press = false;
function draw () {
  // clear screen
  background(colorBack);

  // draw the interpolation on the guidelines
  push();
  scale(0.5);

  // constants
  const left_margin = 40;
  const right_margin = 2*width - 40;
  const top_margin = 80;
  const bottom_margin = 2*height - 60;
  const numSteps = 11;
  const x_step = (right_margin - left_margin + 100) / (numSteps + 1)
  const first_letter_offset_x = 20;

  translate(0, top_margin);

  // draw lines
  stroke(colorLines);
  line(left_margin, 0, right_margin, 0);
  for(let i=left_margin; i<right_margin-8; i+=30) {
    line(i, 100, i+12, 100);
  }
  line(left_margin, 200, right_margin, 200);

  translate(left_margin+first_letter_offset_x, 0);
  for(let i=0; i<numSteps; i = i+1) {
    let percent = map(i, 0, numSteps, 0, 100);
    let curLetterObj = getCharacterInterpolation(percent, soloLastLetter, soloCurLetter);
    // print(curLetterObj, soloLastLetter, soloCurLetter);
    if (interpolation_is_on || (i==0 || i==numSteps-1)) {
      drawLetter(curLetterObj);
    }
    stroke(colorLines);
    fill(colorLines);
    textSize(50);
    textAlign(CENTER)
    if (i == 0) {
      text(soloLastLetter, 50, 280);
    }
    else if (i == (numSteps -1)) {
      if (hot_key_press) {
        rect(50-40, 280-40, 80, 80);
        hot_key_press = false;
      }
      text(soloCurLetter, 50, 280);
    }
    else if (interpolation_is_on) {
      text("" + i*10 + "%", 50, 280);
    }
    translate(x_step, 0);
  }
  pop();

  // now draw the letter full size below

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // see if animation should be turned off
  if(soloIsAnimating && soloCurAnimationFrame >= soloNumAnimationFrames) {
    soloIsAnimating = false;
  }
  // if we are animating, increment the number of animation frames
  if(soloIsAnimating) {
    soloCurAnimationFrame = soloCurAnimationFrame + 1;
  }

  push();
  translate(center_x, center_y);
  let cur_obj = computeCurrentSoloChar();
  drawLetter(cur_obj);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
  else {
    lastKeyPressedTime = millis();
    let upper_key = key.toUpperCase();
    hot_key_press = true;
    soloPrevObj = computeCurrentSoloChar();
    soloLastLetter = soloCurLetter;
    soloCurLetter = upper_key;
    soloIsAnimating = true;
    soloCurAnimationFrame = 0;
  }
}
