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

//Letter B

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

// //Letter E
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 240,

//   "GreenDot1xpos": 340,

//   "GreenDot1ypos": 80,

//   "greenDot2xpos":275,

//   "GreenDot2ypos":80,

//   "GreenDot3xpos":210,

//   "GreenDot3ypos":80,

//   "RedRotation": 90,

//   "RedxPosition": 215,

//   "RedyPosition": 130,

//   "BlackLinexpos": 188, 

//   "BlackLineypos": 230,

//   "BlueCircleSize": 60,

//   "BlueCirclexPos": 320,

//   "BlueCircleyPos": 340,

// }


// //Letter F
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": -15,

//   "GreenDot1xpos": 300,

//   "GreenDot1ypos": 210,

//   "greenDot2xpos":260,

//   "GreenDot2ypos":210,

//   "GreenDot3xpos":220,

//   "GreenDot3ypos":210,

//   "RedRotation": 270,

//   "RedxPosition": 185,

//   "RedyPosition": 300,

//   "BlackLinexpos": 200, 

//   "BlackLineypos": -20,

//   "BlueCircleSize": 70,

//   "BlueCirclexPos": 330,

//   "BlueCircleyPos": 85,

// }



// //Letter G
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 125,

//   "GreenDot1xpos": 350,

//   "GreenDot1ypos": 300,

//   "greenDot2xpos":360,

//   "GreenDot2ypos":240,

//   "GreenDot3xpos":310,

//   "GreenDot3ypos":240,

//   "RedRotation": 325,

//   "RedxPosition": 135,

//   "RedyPosition": 240,

//   "BlackLinexpos": 300, 

//   "BlackLineypos": 20,

//   "BlueCircleSize": 160,

//   "BlueCirclexPos": 190,

//   "BlueCircleyPos": 270,

// }

// //Letter H
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": -15,

//   "GreenDot1xpos": 200,

//   "GreenDot1ypos": 190,

//   "greenDot2xpos":200,

//   "GreenDot2ypos":155,

//   "GreenDot3xpos":200,

//   "GreenDot3ypos":120,

//   "RedRotation": 0,

//   "RedxPosition": 120,

//   "RedyPosition": 200,

//   "BlackLinexpos": 320, 

//   "BlackLineypos": 95,

//   "BlueCircleSize": 60,

//   "BlueCirclexPos": 330,

//   "BlueCircleyPos": 300,

// }

// //Letter I
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 170,

//   "GreenDot1xpos": 220,

//   "GreenDot1ypos": 80,

//   "greenDot2xpos": 180,

//   "GreenDot2ypos": 80,

//   "GreenDot3xpos": 140,

//   "GreenDot3ypos": 80,

//   "RedRotation": 90,

//   "RedxPosition": 215,

//   "RedyPosition": 130,

//   "BlackLinexpos": 188, 

//   "BlackLineypos": 230,

//   "BlueCircleSize": 40,

//   "BlueCirclexPos": 130,

//   "BlueCircleyPos": 340,

// }


// //Letter J
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 350,

//   "GreenDot1xpos": 250,

//   "GreenDot1ypos": 80,

//   "greenDot2xpos": 190,

//   "GreenDot2ypos": 80,

//   "GreenDot3xpos": 130,

//   "GreenDot3ypos": 80,

//   "RedRotation": 137,

//   "RedxPosition": 257,

//   "RedyPosition": 157,

//   "BlackLinexpos": 85, 

//   "BlackLineypos": 185,

//   "BlueCircleSize": 30,

//   "BlueCirclexPos": 190,

//   "BlueCircleyPos": 160,

// }


// //Letter K
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 170,

//   "GreenDot1xpos": 300,

//   "GreenDot1ypos": 80,

//   "greenDot2xpos": 265,

//   "GreenDot2ypos": 135,

//   "GreenDot3xpos": 230,

//   "GreenDot3ypos": 190,

//  "RedRotation": 90,

//   "RedxPosition": 215,

//   "RedyPosition": 130,

//   "BlackLinexpos": 192, 

//   "BlackLineypos": 230,

//   "BlueCircleSize": 30,

//   "BlueCirclexPos": 310,

//   "BlueCircleyPos": 350,

// }



// //Letter L
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 137,

//   "GreenDot1xpos": 172,

//   "GreenDot1ypos": 195,

//   "greenDot2xpos": 172,

//   "GreenDot2ypos": 240,

//   "GreenDot3xpos": 172,

//   "GreenDot3ypos": 285,

//   "RedRotation": 90,

//   "RedxPosition": 210,

//   "RedyPosition": 127,

//   "BlackLinexpos": 192, 

//   "BlackLineypos": 225,

//   "BlueCircleSize": 60,

//   "BlueCirclexPos": 325,

//   "BlueCircleyPos": 340,

// }


// //Letter M
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 350,

//   "GreenDot1xpos": 210,

//   "GreenDot1ypos": 105,

//   "greenDot2xpos": 235,

//   "GreenDot2ypos": 165,

//   "GreenDot3xpos": 260,

//   "GreenDot3ypos": 225,

//   "RedRotation": -15,

//   "RedxPosition": 125,

//   "RedyPosition": 215,

//   "BlackLinexpos": 320, 

//   "BlackLineypos": 60,

//   "BlueCircleSize": 110,

//   "BlueCirclexPos": 365,

//   "BlueCircleyPos": 275,

// }

// //Letter N
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 350,

//   "GreenDot1xpos": 365,

//   "GreenDot1ypos": 105,

//   "greenDot2xpos": 365,

//   "GreenDot2ypos": 158,

//   "GreenDot3xpos": 365,

//   "GreenDot3ypos": 211,

//   "RedRotation": 40,

//   "RedxPosition": 150,

//   "RedyPosition": 150,

//   "BlackLinexpos": 295, 

//   "BlackLineypos": 182,

//   "BlueCircleSize": 90,

//   "BlueCirclexPos": 170,

//   "BlueCircleyPos": 140,

// }

// //Letter O
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": -10,

//   "GreenDot1xpos": 370,

//   "GreenDot1ypos": 180,

//   "greenDot2xpos": 335,

//   "GreenDot2ypos": 280,

//   "GreenDot3xpos": 230,

//   "GreenDot3ypos": 310,

//   "RedRotation": -30,

//   "RedxPosition": 130,

//   "RedyPosition": 230,

//   "BlackLinexpos": 305, 

//   "BlackLineypos": 30,

//   "BlueCircleSize": 230,

//   "BlueCirclexPos": 230,

//   "BlueCircleyPos": 175,

// }


// //Letter P
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 220,

//   "quadrotation": 170,

//   "GreenDot1xpos": 200,

//   "GreenDot1ypos": 240,

//   "greenDot2xpos": 200,

//   "GreenDot2ypos": 280,

//   "GreenDot3xpos": 200,

//   "GreenDot3ypos": 320,

//    "RedRotation": 270,

//   "RedxPosition": 190,

//   "RedyPosition": 290,

//   "BlackLinexpos": 200, 

//   "BlackLineypos": -20,

//   "BlueCircleSize": 70,

//   "BlueCirclexPos": 250,

//   "BlueCircleyPos": 150,

// }

// //Letter Q
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 125,

//   "GreenDot1xpos": 370,

//   "GreenDot1ypos": 320,

//   "greenDot2xpos":330,

//   "GreenDot2ypos":280,

//   "GreenDot3xpos":290,

//   "GreenDot3ypos":240,

//   "RedRotation": 325,

//   "RedxPosition": 135,

//   "RedyPosition": 240,

//   "BlackLinexpos": 300, 

//   "BlackLineypos": 20,

//   "BlueCircleSize": 160,

//   "BlueCirclexPos": 210,

//   "BlueCircleyPos": 250,

// }

// //Letter R
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 315,

//   "GreenDot1xpos": 330,

//   "GreenDot1ypos": 335,

//   "greenDot2xpos": 285,

//   "GreenDot2ypos": 270,

//   "GreenDot3xpos": 240,

//   "GreenDot3ypos": 205,

//   "RedRotation": 270,

//   "RedxPosition": 195,

//   "RedyPosition": 300,

//   "BlackLinexpos": 200, 

//   "BlackLineypos": -20,

//   "BlueCircleSize": 70,

//   "BlueCirclexPos": 255,

//   "BlueCircleyPos": 145,

// }

// //Letter S
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 0,

//   "GreenDot1xpos": 120,

//   "GreenDot1ypos": 300,

//   "greenDot2xpos": 100,

//   "GreenDot2ypos": 270,

//   "GreenDot3xpos": 105,

//   "GreenDot3ypos": 235,

//   "RedRotation": 250,

//   "RedxPosition": 220,

//   "RedyPosition": 290,

//   "BlackLinexpos": 150, 

//   "BlackLineypos": -20,

//   "BlueCircleSize": 110,

//   "BlueCirclexPos": 202,

//   "BlueCircleyPos": 277,

// }


// //Letter T
//   const letterA = {
//   "quadXLoki": 200,

//   "quadYLoki": 200,

//   "quadrotation": 350,

//   "GreenDot1xpos": 150,

//   "GreenDot1ypos": 65,

//   "greenDot2xpos": 125,

//   "GreenDot2ypos": 65,

//   "GreenDot3xpos": 100,

//   "GreenDot3ypos": 65,

//   "RedRotation": 270,

//   "RedxPosition": 185,

//   "RedyPosition": 300,

//   "BlackLinexpos": 185, 

//   "BlackLineypos": -20,

//   "BlueCircleSize": 60,

//   "BlueCirclexPos": 300,

//   "BlueCircleyPos": 65,

// }


//Letter U
  const letterA = {
  "quadXLoki": 200,

  "quadYLoki": 200,

  "quadrotation": 118,

  "GreenDot1xpos": 445,

  "GreenDot1ypos": 80,

  "greenDot2xpos": 415,

  "GreenDot2ypos": 205,

  "GreenDot3xpos": 385,

  "GreenDot3ypos": 330,

  "RedRotation": 70,

  "RedxPosition": 180,

  "RedyPosition": 125,

  "BlackLinexpos": 235, 

  "BlackLineypos": 212,

  "BlueCircleSize": 60,

  "BlueCirclexPos": 310,

  "BlueCircleyPos": 220,

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






//Yellow Quad
  push();
noStroke()
  fill(250, 250, 20)
  translate(quadx,quady);
  rotate(RotationAngle)
  quad(0, 0, -100, 100, -80, 120, -20, 130, 30, 30, 30, 30); // soft edges not working
  pop()

//blue ellipse
  push();
  stroke(20, 20, 20)
  fill(20, 20, 200)
  circle(CirclexPos, CircleyPos, CirlceSize)
  circle(CirclexPos, CircleyPos, CirlceSize/2)
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

  //3 green dots
  push();
  stroke(20, 200, 20)
  fill(20, 20, 20);
  circle(GreenDot1x, GreenDot1y, 20);
  circle(GreenDot2x, GreenDot2y, 20);
  circle(GreenDot3x, GreenDot3y, 20);
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


