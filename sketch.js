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
  "pos3x": 40,
  "pos4x": 50,
  "pos1y": 70,
  "pos2y": 40,
  "pos3y": 80,
  "pos4y": 40,
  "pos5y": 30,
  "pos6y": 20,
  "pos7y": 40,
  "pos8y": 30,
  "rotatesS":0,
  "rotateS":0,
  "rotatesF":0,
  "rotateF":0
  
}

const letterB = {
 
  "pos1x": 20,
  "pos2x": 30,
  "pos3x": 40,
  "pos4x": 50,
  "pos1y": 70,
  "pos2y": 40,
  "pos3y": 80,
  "pos4y": 40,
  "pos5y": 30,
  "pos6y": 20,
  "pos7y": 40,
  "pos8y": 30,
  "rotatesS":0,
  "rotateS":0,
  "rotatesF":0,
  "rotateF":0

}

const letterC = {

  "pos1x": 20,
  "pos2x": 30,
  "pos3x": 40,
  "pos4x": 50,
  "pos1y": 70,
  "pos2y": 40,
  "pos3y": 80,
  "pos4y": 40,
  "pos5y": 30,
  "pos6y": 20,
  "pos7y": 40,
  "pos8y": 30,
  "rotatesS":100,
  "rotateS":80,
  "rotatesF":0,
  "rotateF":0

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

// function drawLetter(posx, posy, letterData) {

  
  function drawsthin(posx, posy, letterData) {
  // determine parameters for second circle
  // let quadposx1 = letterData["pos1x"];
  // let quadposx2 = letterData["pos2x"];
  // let quadposx3 = letterData["pos3x"];
  // let quadposx4 = letterData["pos4x"];
  // let quadposy1 = letterData["pos1y"];
  // let quadposy2 = letterData["pos2y"];
  // let quadposy3 = letterData["pos3y"];
  // let quadposy4 = letterData["pos4y"];
  // let quadposy5 = letterData["pos5y"];
  // let quadposy6 = letterData["pos6y"];
  // let quadposy7 = letterData["pos7y"];
  // let quadposy8 = letterData["pos8y"];


    let quadposx1 = letterData["pos1x"];
    let quadposy1 = letterData["pos1y"];
    let quadposy2 = letterData["pos2y"];
    let rotAmount1 = letterData["rotatesS"];
 fill(colorFront1);
    angleMode(DEGREES);
  
push(); 
 translate(posx,posy);
  rotate(rotAmount1);
quad(0 -quadposx1, 0, 0 , 0 -quadposy1, 0 +quadposx1, 0, 0, 0 +quadposy2);
pop();

    // quad(posx -  quadposx1, posy, posx , posy -quadposy1, posx +quadposx1, posy, posx, posy +quadposy2);
  }


function drawlthin(posx, posy, letterData) {
  let quadposx2 = letterData["pos2x"];
  let quadposy3 = letterData["pos3y"];
  let quadposy4 = letterData["pos4y"];
   // quad(posx - quadposx2, posy, posx , posy -quadposy3, posx +quadposx2, posy, posx, posy +quadposy4);
  let rotAmount2 = letterData["rotateS"];

 fill(colorFront1);
angleMode(DEGREES);
  
push(); 
 translate(posx,posy);
  rotate(rotAmount2);
quad(0 -quadposx2, 0, 0 , 0 -quadposy3, 0 +quadposx2, 0, 0, 0 +quadposy4);
pop();

 }

function drawsfat(posx, posy, letterData) {
  let quadposx3 = letterData["pos3x"];
  let quadposy5 = letterData["pos5y"];
  let quadposy6 = letterData["pos6y"];
  // quad(posx - quadposx3, posy, posx , posy -quadposy5, posx +quadposx3, posy, posx, posy +quadposy6);
  let rotAmount3 = letterData["rotatesF"];

 fill(colorFront1);
angleMode(DEGREES);
  
push(); 
 translate(posx,posy);
  rotate(rotAmount3);
quad(0 -quadposx3, 0, 0 , 0 -quadposy5, 0 +quadposx3, 0, 0, 0 +quadposy6);
pop();

}

function drawlfat(posx, posy, letterData) {
  let quadposx4 = letterData["pos4x"];
  let quadposy7 = letterData["pos7y"];
  let quadposy8 = letterData["pos8y"];
  let rotAmount = letterData["rotateF"];

  // uneeded
  // let pos2x = posx + letterData["offsetx"];
  // let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(colorFront1);
  // ellipse(posx, posy, 150, 150);
  // ellipse(pos2x, pos2y, size2, size2);
angleMode(DEGREES);
  
push(); 
 translate(posx,posy);
  rotate(rotAmount);
quad(0 -quadposx4, 0, 0 , 0 -quadposy7, 0 +quadposx4, 0, 0, 0 +quadposy8);

  //quad(posx -quadposx4, posy, posx , posy -quadposy7, posx +quadposx4, posy, posx, posy +quadposy8);
     
   // drawSkinnyQuad(letterData["pos1x"], );

pop();
  // triangle(posx -75, posy+75, posx , posy-75, posx +75, posy +75);
  // triangle(posx -75, posy+75, posx -75, posy-75, posx +75, posy);
  // triangle(posx +75, posy-75, posx +75, posy+75, posx -75, posy);
  // triangle(posx +75, posy-75, posx , posy+75, posx -75, posy -75);
  fill(colorFront2);
  //  triangle(posx -75, posy+75, posx , posy-75, posx +75, posy +75);
  
}

// }
//function drawSkinnyQuad (x,y,r) {

///draw the quad 

// function drawSkinnyQuad (x,y,r) {

// draw the quad 

// http://purview.nz/versions/95f53cc9bedf61d8f8a051d5650fd55d.html

// }

// function drawlfat(letterData) {
//   let quadposx4 = letterData["pos4x"];
//   let quadposy7 = letterData["pos7y"];
//   let quadposy8 = letterData["pos8y"];
//   let rotAmount = letterData["rotateF"];

//   fill(colorFront1);
// angleMode(DEGREES);
  
// push(); 
//  translate(letterData["translatef3"], letterData["translatef4"]);
//   rotate(rotAmount);
// quad(0 -quadposx4, 0, 0 , 0 -quadposy7, 0 +quadposx4, 0, 0, 0 +quadposy8);


// pop();
  
// }

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  push();
  drawsthin(center_x - 250, center_y +20 , letterA);
  drawlthin(center_x - 250, center_y, letterA);
  drawsfat(center_x - 250, center_y +10, letterA);
  drawlfat(center_x - 250, center_y +30, letterA);
  pop();

   
  push();
   drawsthin(center_x , center_y +20, letterB);
   drawlthin(center_x , center_y, letterB);
   drawsfat(center_x +40, center_y -40, letterB);
   drawlfat(center_x +40, center_y +20, letterB);
   pop();

  
    push();
  drawsthin(center_x + 270, center_y -50, letterC);
  drawlthin(center_x + 270, center_y +50, letterC);
  drawsfat(center_x + 250, center_y , letterC);
  drawlfat(center_x + 250, center_y , letterC);
  pop();


  // drawLetter(center_x      , center_y, letterB);
  // drawLetter(center_x + 250, center_y, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
