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

//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 0,

//   "GreenDot1xpos": 270,

//   "GreenDot1ypos": 110,

//   "greenDot2xpos":220,

//   "GreenDot2ypos":175,

//   "GreenDot3xpos":170,

//   "GreenDot3ypos":240,

//   "GreenDotSize": 20,

//   "RedRotation": 0,

//   "RedxPosition": 100,

//   "RedyPosition": 200,

//   "BlackLinexpos": 300, 

//   "BlackLineypos": 100,

//   "BlueCircleSize": 100,

//   "BlueCirclexPos": 330,

//   "BlueCircleyPos": 305,

// }

// Letter B

//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 315,

//   "GreenDot1xpos": 310,

//   "GreenDot1ypos": 100,

//   "greenDot2xpos":280,

//   "GreenDot2ypos":150,

//   "GreenDot3xpos":250,

//   "GreenDot3ypos":200,

//   "GreenDotSize": 20,

//   "RedRotation": 270,

//   "RedxPosition": 200,

//   "RedyPosition": 300,

//   "BlackLinexpos": 200, 

//   "BlackLineypos": -20,

//   "BlueCircleSize": 120,

//   "BlueCirclexPos": 280,

//   "BlueCircleyPos": 275,

// }

// //Letter C
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 295,

//   "GreenDot1xpos": 390,

//   "GreenDot1ypos": 260,

//   "greenDot2xpos":360,

//   "GreenDot2ypos":305,

//   "GreenDot3xpos":300,

//   "GreenDot3ypos":320,

//   "RedRotation": -20,

//   "RedxPosition": 130,

//   "RedyPosition": 220,

//   "BlackLinexpos": 320, 

//   "BlackLineypos": 45,

//   "BlueCircleSize": 80,

//   "BlueCirclexPos": 250,

//   "BlueCircleyPos": 130,

// }

// //Letter D
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 315,

//   "GreenDot1xpos": 310,

//   "GreenDot1ypos": 200,

//   "greenDot2xpos":310,

//   "GreenDot2ypos":248,

//   "GreenDot3xpos":290,

//   "GreenDot3ypos":290,

//   "RedRotation": 270,

//   "RedxPosition": 200,

//   "RedyPosition": 300,

//   "BlackLinexpos": 200, 

//   "BlackLineypos": -20,

//   "BlueCircleSize": 70,

//   "BlueCirclexPos": 285,

//   "BlueCircleyPos": 145,

// }

//Letter E
  const letterA = {
  "quadXLoki": 200,

  "quadYLoki": 200,

  "quadrotation": 240,

  "GreenDot1xpos": 340,

  "GreenDot1ypos": 80,

  "greenDot2xpos":275,

  "GreenDot2ypos":80,

  "GreenDot3xpos":210,

  "GreenDot3ypos":80,

  "RedRotation": 90,

  "RedxPosition": 215,

  "RedyPosition": 130,

  "BlackLinexpos": 188, 

  "BlackLineypos": 230,

  "BlueCircleSize": 60,

  "BlueCirclexPos": 320,

  "BlueCircleyPos": 340,

}





  const letterB = {

}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const backgroundColor  = "#e3eded";
const strokeColor      = "#233f11";

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
  let quadx = letterData["quadXLoki"];

  let quady = letterData["quadYLoki"];

  let RotationAngle = letterData["quadrotation"];

  let GreenDot1x = letterData["GreenDot1xpos"];

  let GreenDot1y = letterData["GreenDot1ypos"];

  let GreenDot2x = letterData["greenDot2xpos"]

  let GreenDot2y = letterData["GreenDot2ypos"];

  let GreenDot3x = letterData["GreenDot3xpos"];

  let GreenDot3y = letterData["GreenDot3ypos"];

  let RedObjectAngle = letterData["RedRotation"];

  let BlackLinex = letterData["BlackLinexpos"];

  let BlackLiney = letterData["BlackLineypos"];

  let CirlceSize = letterData["BlueCircleSize"];

  let CirclexPos = letterData["BlueCirclexPos"];

  let CircleyPos = letterData["BlueCircleyPos"];

  let RedxPos = letterData["RedxPosition"]

  let RedyPos = letterData["RedyPosition"]
  angleMode(DEGREES)
  // draw two circles
//   fill(20, 200, 20);
//   rect(posx, posy, 150, 250);
//   fill(200, 20, 20);
//   rect(pos2x-80, pos2y, size2, size2);
// }

  //draw two circles

//Yellow Quad
noStroke()
  fill(250, 250, 20)
  //let quadx = 200
  //let quady = 200;
  push();

  translate(quadx,quady);
  rotate(RotationAngle)
  quad(0, 0, -100, 100, -80, 120, -20, 130, 30, 30, 30, 30); // soft edges not working
  pop()

//3 green dots
  push();
  stroke(20, 200, 20)
  fill(20, 20, 20);
  circle(GreenDot1x, GreenDot1y, 20);
  circle(GreenDot2x, GreenDot2y, 20);
  circle(GreenDot3x, GreenDot3y, 20);
  pop()

//red lolliepop
  push();
  noStroke()
  translate(RedxPos, RedyPos)
  rotate(RedObjectAngle)
  fill(200, 20, 20);
  rect(70, 5, 150, 10)
  ellipse(210, 10, 70, 70)
  pop()

//black lines
  push();
  noStroke()
  fill(10, 10, 10)
  quad(BlackLinex+5, BlackLiney+30, BlackLinex+11, BlackLiney+28, BlackLinex+10, BlackLiney+60, BlackLinex+6, BlackLiney+61)
  quad(BlackLinex+60, BlackLiney+110, BlackLinex+88, BlackLiney+109, BlackLinex+90, BlackLiney+115, BlackLinex+62, BlackLiney+114)
  quad(BlackLinex+33, BlackLiney+66, BlackLinex+36, BlackLiney+69, BlackLinex+50, BlackLiney+41, BlackLinex+47, BlackLiney+39)
  quad(BlackLinex+53, BlackLiney+86, BlackLinex+56, BlackLiney+89, BlackLinex+80, BlackLiney+71, BlackLinex+77, BlackLiney+64)
  pop()

//blue ellipse
  push();
  stroke(20, 20, 20)
  fill(20, 20, 200)
  circle(CirclexPos, CircleyPos, CirlceSize)
  circle(CirclexPos, CircleyPos, CirlceSize/2)
  pop()


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}


