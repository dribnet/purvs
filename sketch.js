const canvasWidth = 960;
const canvasHeight = 500;
//angleMode(DEGREES);

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
  "size": 80,
  "x": 0,
  "y": -120,
  "2x": 50,
  "2y": 100,
  "3x": -50,
  "3y": 100,
    
  "4x": 0,
  "4y": -70,
  "5x": 40,
  "5y": 100,
  "6x": -40,
  "6y": 100

}

const letterB = {
  "size": 80,
//  rotate(45)
  "x": -30,
  "y": -120,
  "2x": 50,
  "2y": -60,
  "3x": -30,
  "3y": 0,
    
  "4x": -30,
  "4y": 0,
  "5x": 50,
  "5y": 60,
  "6x": -30,
  "6y": 100
}

const letterC = {
  "size": 80,
  "x": 60,
  "y": -100,
  "2x": 60,
  "2y": -50,
  "3x": -50,
  "3y": -50,
    
  "4x": 30,
  "4y": -50,
  "5x": -30,
  "5y": -50,
  "6x": 0,
  "6y": 100
}

//const letterD = {
//  "size": 80,
//  "x": 0,
//  "y": -120,
//  "2x": 50,
//  "2y": 0,
//  "3x": 0,
//  "3y": 100,
//    
//  "4x": 0,
//  "4y": -100,
//  "5x": 40,
//  "5y": 0,
//  "6x": 0,
//  "6y": 80
//}

//const letterE = {
//  "size": 80,
//  "x": 90,
//  "y": -100,
//  "2x": 50,
//  "2y": -100,
//  "3x": -50,
//  "3y": 0,
//    
//  "4x": 50,
//  "4y": 100,
//  "5x": -50,
//  "5y": 0,
//  "6x": 90,
//  "6y": 100
//}
//
//const letterF = {
//  "size": 80,
//  "x": 60,
//  "y": -100,
//  "2x": 60,
//  "2y": -80,
//  "3x": -50,
//  "3y": -100,
//    
//  "4x": -25,
//  "4y": 100,
//  "5x": -50,
//  "5y": -100,
//  "6x": -50,
//  "6y": 100
//}
//
//const letterg = {
//  "size": 80,
//  "x": 90,
//  "y": -120,
//  "2x": 50,
//  "2y": 0,
//  "3x": -50,
//  "3y": 0,
//    
//  "4x": 50,
//  "4y": 0,
//  "5x": -50,
//  "5y": 0,
//  "6x": 90,
//  "6y": 120
//}
//const letterH= {
//  "size": 80,
//  "x": 25,
//  "y": -100,
//  "2x": 50,
//  "2y": -100,
//  "3x": 50,
//  "3y": 100,
//    
//  "4x": -25,
//  "4y": 100,
//  "5x": -50,
//  "5y": -100,
//  "6x": -50,
//  "6y": 100
//}
//const letterI = {
//  "size": 80,
//  "x": 0,
//  "y": -120,
//  "2x": 50,
//  "2y": 0,
//  "3x": -50,
//  "3y": 0,
//    
//  "4x": 50,
//  "4y": 0,
//  "5x": -50,
//  "5y": 0,
//  "6x": 0,
//  "6y": 100
//}
//const letterJ = {
//  "size": 80,
//  "x": 10,
//  "y": -120,
//  "2x": 50,
//  "2y": 0,
//  "3x": -20,
//  "3y": 0,
//    
//  "4x": 50,
//  "4y": 0,
//  "5x": -20,
//  "5y": 0,
//  "6x": -60,
//  "6y": 100
//
//}
//const letterL = {
//  "size": 80,
//  "x": -50,
//  "y": 70,
//  "2x": 50,
//  "2y": 100,
//  "3x": -50,
//  "3y": 100,
//    
//  "4x": -25,
//  "4y": 100,
//  "5x": -50,
//  "5y": -100,
//  "6x": -50,
//  "6y": 100
//}
//const letterO = {
//  "size": 80,
//  "x": 0,
//  "y": -120,
//  "2x": 50,
//  "2y": 0,
//  "3x": 0,
//  "3y": 100,
//    
//  "4x": 0,
//  "4y": -120,
//  "5x": -50,
//  "5y": 0,
//  "6x": 0,
//  "6y": 100
//
//}
//const letterP = {
//  "size": 80,
//  "x": -20,
//  "y": -120,
//  "2x": 50,
//  "2y": -60,
//  "3x": -20,
//  "3y": 0,
//    
//  "4x": -20,
//  "4y": -120,
//  "5x": -50,
//  "5y": -120,
//  "6x": -20,
//  "6y": 100
//}
//const letterQ = {
//  "size": 80,
//  "x": -50,
//  "y": -120,
//  "2x": 60,
//  "2y": 0,
//  "3x": -50,
//  "3y": 100,
//    
//  "4x": 40,
//  "4y": 100,
//  "5x": -5,
//  "5y": 0,
//  "6x": 50,
//  "6y": 90
//}
//const letterR = {
//  "size": 80,
//  "x": -50,
//  "y": -120,
//  "2x": 60,
//  "2y": 0,
//  "3x": -50,
//  "3y": 100,
//    
//  "4x": 40,
//  "4y": 100,
//  "5x": -50,
//  "5y": 0,
//  "6x": 60,
//  "6y": 100
//}
//const letterS = {
//  "size": 80,
//  "x": 90,
//  "y": -100,
//  "2x": 50,
//  "2y": -100,
//  "3x": -50,
//  "3y": 0,
//    
//  "4x": -20,
//  "4y": 100,
//  "5x": 60,
//  "5y": 0,
//  "6x": -50,
//  "6y": 100
//}
//const letterT = {
//  "size": 80,
//  "x": 0,
//  "y": -100,
//  "2x": 60,
//  "2y": -50,
//  "3x": -60,
//  "3y": -50,
//    
//  "4x": 20,
//  "4y": -50,
//  "5x": -20,
//  "5y": -50,
//  "6x": 0,
//  "6y": 100
//}

const colorFront  = "#FF9F00";
const colorBack   = "#D4FFE5";
const colorStroke = "#7B14CC";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(5);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos22x = posx + letterData["offsetx"];
  let pos22y = posy + letterData["offsety"];
    
  let pos1x = posx + letterData["x"];
  let pos1y = posy + letterData["y"];
  let pos2x = posx + letterData["2x"];
  let pos2y = posy + letterData["2y"];
  let pos3x = posx + letterData["3x"];
  let pos3y = posy + letterData["3y"];
    
  let pos4x = posx + letterData["4x"];
  let pos4y = posy + letterData["4y"];
  let pos5x = posx + letterData["5x"];
  let pos5y = posy + letterData["5y"];
  let pos6x = posx + letterData["6x"];
  let pos6y = posy + letterData["6y"];


  // draw two circles
  ellipse(posx, posy, 150, 150);
  ellipse(pos22x, pos22y, size2, size2);
  line(posx, posy, 170, 250)
    
    triangle(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);
    triangle(pos4x, pos4y, pos5x, pos5y, pos6x, pos6y);

    
/*             //a
    triangle(50, 50, 25, 200, 75, 200);
    triangle(50, 100, 35, 200, 65, 200);
    line(25, 120, 75, 120);*/
    
    //b
    triangle(50, 50, 25, 200, 75, 200);
    triangle(50, 100, 35, 200, 65, 200);
    line(25, 120, 75, 120);
    
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
