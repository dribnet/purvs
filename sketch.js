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
  "x": 0,
  "y": 100,
  "1x": 35,
  "1y": 20,
  "2x": 70,
  "2y": 100,

  "3x":35,
  "3y":0,
  "4x":70,
  "4y":80,
  "5x": 70,
  "5y":0
}

const letterB = {
  "x": 10,
  "y": 90,
  "1x": 10,
  "1y": 45,
  "2x": 65,
  "2y": 90,

  "3x": 35,
  "3y": 50,
  "4x": 70,
  "4y": 80,
  "5x": 70,
  "5y": 20
}

const letterC = {
  "x": 35,
  "y": 50,
  "1x": 70,
  "1y": 80,
  "2x": 70,
  "2y": 20,

  "3x": 0,
  "3y": 50,
  "4x": 70,
  "4y": 100,
  "5x": 70,
  "5y": 0
}

const colorFront  = "#4EFFC4";
const colorBack   = "#2AA9CC";
const colorStroke = "#4EFFC4";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let pos1x = posx + letterData["x"];
  let pos1y = posy + letterData["y"];
  let pos2x = posx + letterData["1x"]; 
  let pos2y = posy + letterData["1y"]; 
  let pos3x = posx + letterData["2x"]; 
  let pos3y = posy + letterData["2y"]; 

  let pos4x = posx + letterData["3x"];  
  let pos4y = posy + letterData["3y"]; 
  let pos5x = posx + letterData["4x"]; 
  let pos5y = posy+ letterData["4y"]; 
  let pos6x = posx + letterData["5x"]; 
  let pos6y = posy + letterData["5y"]; 

  push()
  noStroke();
  rect(posx,posy,70,100)
  fill(colorBack)
  triangle( pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);
  triangle( pos4x, pos4y, pos5x, pos5y, pos6x, pos6y);
  pop()
  // "x": 0,
  // "y": 100,
  // "1x": 35,
  // "1y": 20,
  // "2x": 70,
  // "2y": 100,

  // "3x":35,
  // "3y":0,
  // "4x":70,
  // "4y":80,
  // "5x": 70,
  // "5y":0
  // draw lines

  // line(posx,posy+30,pos2x,pos2y);
  // line(pos2x,pos2y,pos3x,pos2y);
  // line(pos3x,pos2y,pos4x,pos3y);

  //   line( pos1x+27, pos1y+10, pos5x, pos5y);
  //   line( pos5x, pos5y, pos6x, pos5y);
  //   line( pos6x, pos5y, pos7x, pos7y);

    
//   push()
// //    translate(-40,20)
//   line(27,10,32,-20)
//   line(32,-20,57,-20);
//   line(57,-20,62,10)
//   pop()
    

//   push()
//   line(0,30,20,0);
//   line(20,0,70,0)
//   line(70,0,90,30)
//   pop()
  
  // draw two circles
  // ellipse(posx, posy, 150, 150);
  // ellipse(pos2x, pos2y, size2, size2);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y-50, letterA);
  drawLetter(center_x      , center_y-50, letterB);
  drawLetter(center_x + 250, center_y-50, letterC);

  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
