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

  "noteRotate": -18.00000000000003,
  "noteWidth": 28.000000000000004,
  "notePosx": 6,
  "notePosy": 126,
  "stemPosx": -10,
  "stemPosy": 102.00000000000001,
  "stemHeight": 178,
  "stemThick": 6,
  "stemRotate": 198,
  "flagScale": 1.68,
  "flagRotate": 21.599999999999994,
  "flagPosx": 21.5,
  "flagPosy": 16,
  "flagThick": 0,
  "flagInvert": 1,
  "noteFull": 0.6,
  "fullNotex": 5,
  "fullNoteRot": 0
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

  "noteRotate": -21.600000000000023,
  "noteWidth": 52,
  "notePosx": 36.00000000000006,
  "notePosy": 162,
  "stemPosx": 10,
  "stemPosy": 99,
  "stemHeight": 182,
  "stemThick": 24,
  "stemRotate": 190.8,
  "flagScale": 1.3599999999999999,
  "flagRotate": -172.8,
  "flagPosx": 14.5,
  "flagPosy": 8,
  "flagThick": 4.199999999999999,
  "flagInvert": -1,
  "noteFull": 0
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

  "noteRotate": -151.2,
  "noteWidth": 78,
  "notePosx": 48,
  "notePosy": 162,
  "stemPosx": 25,
  "stemPosy": 75,
  "stemHeight": 162,
  "stemThick": 46,
  "stemRotate": 187.2,
  "flagScale": 1.44,
  "flagRotate": -25.19999999999999,
  "flagPosx": 11,
  "flagPosy": 0,
  "flagThick": -1,
  "flagInvert": 1,
  "noteFull": 0

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
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  push()
  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
  pop()

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
  let nHeadx = posx + letterData["notePosx"];
  let nHeady = posy + letterData["notePosy"];
  let stemx = posx + letterData["stemPosx"];
  let stemy = posy + letterData["stemPosy"];
  let stemH = letterData["stemHeight"];
  let stemT = letterData["stemThick"];
  let stemR = letterData["stemRotate"];
  let flagS = letterData["flagScale"];
  let flagR = letterData["flagRotate"];
  let flagx = posx + letterData["flagPosx"];
  let flagy = posy + letterData["flagPosy"];
  let flagT = letterData["flagThick"];
  let flagI = letterData["flagInvert"];
  let noteF = letterData["noteFull"];
  let noteFx = letterData["fullNotex"];
  let fullNoteR = letterData["fullNoteRot"];

 

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
  //ellipse(posx, posy, 150, 150);
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

  push();
  scale(1.2);
  translate(-150,-150);
  push();
  translate(nHeadx,nHeady);
  rotate(noteR);
  ellipse(0,0,1.8*nWidth,nWidth);  //the notehead.  x3 math keeps width of elipse to aesthetic scale
  push();
  fill(255);
  rotate(fullNoteR);
  scale(noteF);
  ellipse(noteFx,0,1.8*nWidth,nWidth);  //full note
  pop()
  pop();
  push();
  translate(stemx,stemy);  //the stem of the note.
  rotate(stemR);
  rect(0,0,stemT,stemH); //the stem of the note.
  pop();

  push();
  //push()
  //stroke(255,0,0); // Change the color
  //strokeWeight(10);
  //point(48,15);
  //pop()
  translate(flagx,flagy);   //flagx,flagy
  scale(flagS);
  rotate(flagR);
  scale(1,flagI);
  flag(0, 0);
  pop();
  pop();



function flag(flagx, flagy, flagS, flagS) {
//the flag of the note.
  push();
  //noFill();
  //translate(0, 0);
  //scale(flagS);
  //rotate(flagR);
  //rect(200,200,50,50);
  beginShape();
  curveVertex(104 - 48, 104 - 15);
  curveVertex(104- 48, 104 - 15);
  //curveVertex(114, 91);
  curveVertex(114- 48, 91 - 15);
  //curveVertex(68, 19);
  curveVertex(96- 48, 62 - 15);
  curveVertex(66- 48, 46 - 15);
  curveVertex(50- 48, 20 - 15);
  curveVertex(50- 48, 20 - 15);
  curveVertex(50- 48, 60 - 15);
  curveVertex(50- 48, 60 - 15);
  curveVertex(66- 48, 66 - 15);
  curveVertex(66- 48, 66 - 15);
  curveVertex(96- 48, 77 - 15);
  //curveVertex(96, 77);
  //curveVertex(114, 91);
  curveVertex(114- 48, 91 - 15);
  curveVertex(104- 48, 104 - 15);
  curveVertex(104- 48, 104 - 15);
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