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
  "pos1x": 20,
  "pos2x": 30,
  "pos3x": 50,
  "pos4x": 70,
  "pos1y": 140,
  "pos2y": 40,
  "pos3y": 180,
  "pos4y": 80,
  "pos5y": 100,
  "pos6y": 50,
  "pos7y": 120,
  "pos8y": 60,
  
}

const letterB = {
    "pos1x": 20,
  "pos2x": 30,
  "pos3x": 50,
  "pos4x": 70,
  "pos1y": 140,
  "pos2y": 40,
  "pos3y": 180,
  "pos4y": 80,
  "pos5y": 100,
  "pos6y": 50,
  "pos7y": 120,
  "pos8y": 60,
}

const letterC = {
  "pos1x": 40,
  "offsetx": 30,
  "offsety": 0
}

const colorFront1  = [204, 101, 192, 2];
const colorFront2  = [204,101,192,150];
const colorBack    = [200,200,200];
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let quadposx1 = letterData["pos1x"];
  let quadposx2 = letterData["pos2x"];
  let quadposx3 = letterData["pos3x"];
  let quadposx4 = letterData["pos4x"];
  let quadposy1 = letterData["pos1y"];
  let quadposy2 = letterData["pos2y"];
  let quadposy3 = letterData["pos3y"];
  let quadposy4 = letterData["pos4y"];
  let quadposy5 = letterData["pos5y"];
  let quadposy6 = letterData["pos6y"];
  let quadposy7 = letterData["pos7y"];
  let quadposy8 = letterData["pos8y"];


  // uneeded
  // let pos2x = posx + letterData["offsetx"];
  // let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(colorFront1);
  // ellipse(posx, posy, 150, 150);
  // ellipse(pos2x, pos2y, size2, size2);

  quad(posx -  quadposx1, posy, posx , posy -quadposy1, posx +quadposx1, posy, posx, posy +quadposy2);
  quad(posx - quadposx2, posy, posx , posy -quadposy3, posx +quadposx2, posy, posx, posy +quadposy4);
  quad(posx - quadposx3, posy, posx , posy -quadposy5, posx +quadposx3, posy, posx, posy +quadposy6);
  quad(posx -quadposx4, posy, posx , posy -quadposy7, posx +quadposx4, posy, posx, posy +quadposy8);
     
   // drawSkinnyQuad(letterData["pos1x"], );

  // triangle(posx -75, posy+75, posx , posy-75, posx +75, posy +75);
  // triangle(posx -75, posy+75, posx -75, posy-75, posx +75, posy);
  // triangle(posx +75, posy-75, posx +75, posy+75, posx -75, posy);
  // triangle(posx +75, posy-75, posx , posy+75, posx -75, posy -75);
  fill(colorFront2);
  //  triangle(posx -75, posy+75, posx , posy-75, posx +75, posy +75);
  
}


//function drawSkinnyQuad (x,y,r) {

///draw the quad 

// function drawSkinnyQuad (x,y,r) {

// draw the quad 


// }

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
