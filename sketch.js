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
//  "size": 100,
//  "offsetx": 0,
//  "offsety": -45,
//  "rotation":45,
//  "arcPosX": 0,
//  "arcPosY": 0,
//  "start":50,
//  "stop":230,

  "noteRotate": 0,
  "noteWidth": 30,
  "notePosx": 150,
  "notePosy": 150,
  "stemPosx": 100,
  "stemPosy": 100,
  "stemHeight": 60,
  "stemThick": 10,
  "stemRotate": 0,
  "flagScale": 1,
  "flagRotate": 0,
  "flagPosx": 0,
  "flagPosy": 0,
  "flagThick": 0
}

const letterB = {
//  "size": 70,
//  "offsetx": 45,
//  "offsety": 3,
//  "rotation":45,
//  "arcPosX": 0,
//  "arcPosY": 0,
//  "start":270,
//  "stop":50,

  "noteRotate": 0,
  "noteWidth": 30,
  "notePosx": 150,
  "notePosy": 150,
  "stemPosx": 100,
  "stemPosy": 100,
  "stemHeight": 60,
  "stemThick": 10,
  "stemRotate": 0,
  "flagScale": 1,
  "flagRotate": 0,
  "flagPosx": 0,
  "flagPosy": 0,
  "flagThick": 0
}

const letterC = {
//  "size": 100,
//  "offsetx": 50,
//  "offsety": 0,
//  "rotation":100,
//  "arcPosX": 0,
//  "arcPosY": 0,
//  "start":30,
//  "stop":270,

  "noteRotate": 0,
  "noteWidth": 30,
  "notePosx": 150,
  "notePosy": 150,
  "stemPosx": 100,
  "stemPosy": 100,
  "stemHeight": 60,
  "stemThick": 10,
  "stemRotate": 0,
  "flagScale": 1,
  "flagRotate": 0,
  "flagPosx": 0,
  "flagPosy": 0,
  "flagThick": 0

}

const backgroundColor  = "#e3eded";
const strokeColor      = "#233f11";

const darkPurple  = "#582C70";
const lightPurple  = "#BD5DF0";
const black = "#000000";
const orange = "#F65502";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);
  angleMode(DEGREES);
  rectMode(CENTER);

  // with no animation, redrawing the screen is not necessary
//  noLoop();
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
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["arcPosX"];
  let pos3y = posy + letterData["arcPosY"];
  let startAngle = letterData["start"];
  let stopAngle = letterData["stop"];

  let noteR = letterData["noteRotate"];
  let nWidth = letterData["noteWidth"];
  let nHeadx = letterData["notePosx"];
  let nHeady = letterData["notePosy"];
  let stemx = letterData["stemPosx"];
  let stemy = letterData["stemPosy"];
  let stemH = letterData["stemHeight"];
  let stemT = letterData["stemThick"];
  let stemR = letterData["stemRotate"];
  let flagS = letterData["flagScale"];
  let flagR = letterData["flagRotate"];
  let flagx = letterData["flagPosx"];
  let flagy = letterData["flagPosy"];
  let flagT = letterData["flagThick"];

 

  // draw two circles
  //strokeWeight(3);

   push();
   strokeWeight(1);
   textSize(20);
   ellipse(mouseX,mouseY, 20, 20);
   text("x pos is " + mouseX, 50, 50);
   text("y pos is " + mouseY, 50, 80);
   pop();


  push();
  fill(darkPurple);
  ellipse(posx, posy, 150, 150);
  pop();

  fill(black);   //lightPurple
  push();
  translate(pos2x, pos2y);
  rotate(letterData["rotation"]);
  rect(0, 0, size2, size2);
  pop();

  push();
  fill(orange);
  arc(pos3x, pos3y, 50, 50, startAngle, stopAngle, PIE);
  pop();

  ellipse(nHeadx,nHeady,50,nWidth);  //the notehead.
  push();
  translate(stemx,stemy);  //the stem of the note.
  rotate(stemR);
  rect(0,0,stemT,stemH); //the stem of the note.
  pop();

  push();
  note(stemx, stemy, flagS, flagS);
  pop();



function note(stemx, stemy, flagS, flagS) {
//the flag of the note.
  push();
  //noFill();
  translate(0,0);
  scale(flagS);
  rotate(flagR);
  //rect(200,200,50,50);
  beginShape();
  curveVertex(104, 104);
  curveVertex(104, 104);
  //curveVertex(114, 91);
  curveVertex(114, 91);
  //curveVertex(68, 19);
  curveVertex(96, 62);
  curveVertex(66, 46);
  curveVertex(50, 20);
  curveVertex(50, 20);
  curveVertex(50, 60);
  curveVertex(50, 60);
  curveVertex(66, 66);
  curveVertex(66, 66);
  curveVertex(96, 77);
  //curveVertex(96, 77);
  //curveVertex(114, 91);
  curveVertex(114, 91);
  curveVertex(104, 104);
  curveVertex(104, 104);
  endShape();
  pop();
}
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
