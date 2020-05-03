const canvasWidth = 960;
const canvasHeight = 500;
const PI = 3.14159;
const TWO_PI = PI*2;
const HALF_PI = PI/2;
/* 
 * my twenty variable per letter are:
 *
   rectX: x location of the rectangle
   rectY: y location of the rectangle
   rectW: width of the rectangle
   rectH: height of the rectangle
   arcW: width of the arc
   arcH: height of the arc
   arcX: x location of the first arc
   arcY: y location of the first arc
   arcS: angle to start the first arc
   arcE: angle to end the first arc
   arcX: x location of the second arc
   arcY: y location of the second arc
   arcS: angle to start the second arc
   arcE: angle to end the second arc
   triX1: x location of the first point of the triangle
   triY1: Y location of the first point of the triangle
   triX2: x location of the second point of the triangle
   triY2: Y location of the second point of the triangle
   triX3: x location of the third point of the triangle
   triY3: Y location of the thrid point of the triangle
 *
 */

const letterA = {
    // RECTANGLE
    "rectX" : 130,
    "rectY" : 245,
    "rectW" : 80,
    "rectH" : 80,
    // ARC 
    "arcW"  : 80,
    "arcH"  : 80,
    // ARC ONE
    "arcX"  : 170,
    "arcY"  : 245,
    "arcS"  : TWO_PI-PI,
    "arcE"  : -HALF_PI,
    //ARC TWO
    "arcX2" : 170,
    "arcY2" : 245,
    "arcS2" : PI+HALF_PI,
    "arcE2" : 0,
    // TRIANGLE
    "triX1" : 0,
    "triY1" : 0,
    "triX2" : 0,
    "triY2" : 0,
    "triX3" : 0,
    "triY3" : 0
   
}

const letterB = {
    // RECTANGLE
    "rectX" : 430,
    "rectY" : 205,
    "rectW" : 30,
    "rectH" : 120,
    // ARC
    "arcW" : 80,
    "arcH" : 60,
    // ARC ONE
    "arcX" : 460,
    "arcY" : 235,
    "arcS" : PI+HALF_PI,
    "arcE" : HALF_PI,
    // ARC TWO
    "arcX2" : 460,
    "arcY2" : 295,
    "arcS2" : PI+HALF_PI,
    "arcE2" : HALF_PI,
    // TRIANGLE
    "triX1" : 0,
    "triY1" : 0,
    "triX2" : 0,
    "triY2" : 0,
    "triX3" : 0,
    "triY3" : 0
}

const letterC = {
    // RECTANGLE
    "rectX" : 765,
    "rectY" : 205,
    "rectW" : 30,
    "rectH" : 120,
    // ARC
    "arcW" : 120,
    "arcH" : 120,
    // ARC ONE
    "arcX" : 765,
    "arcY" : 265,
    "arcS" : HALF_PI,
    "arcE" : PI+HALF_PI,
    // ARC TWO
    "arcX2" :795,
    "arcY2" : 265,
    "arcS2" : HALF_PI,
    "arcE2" : PI+HALF_PI,
    // TRIANGLE
    "triX1" : 0,
    "triY1" : 0,
    "triX2" : 0,
    "triY2" : 0,
    "triX3" : 0,
    "triY3" : 0
}


const colorBack    = "#EBF0F5"; // BLUEY WHITE
const colourArc1   = "#5488A3"; // DARK BLUE
const colourArc2   = "#98CCD3"; // LIGHT BLUE
const colourTri    = "#3a3a3a"; // DARK GREY
const colourRect   = "#364E68"; // NAVY BLUE

function setup () {
  // CREATE THE DRAWING CANVAS, SAVE THE CANVAS ELEMENT
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');


  // WITH NO ANIMATION, REDRAWING THE SCREEN IS NOT NECESSARY
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // PARAMETERS FOR THE LETTERS
  // ARC ONE
  let arcX = letterData["arcX"];
  let arcY = letterData["arcY"];
  let arcStart = letterData["arcS"];
  let arcEnd = letterData["arcE"];
  // ARC TWO
  let arcX2 = letterData["arcX2"];
  let arcY2 = letterData["arcY2"];
  let arcStart2 = letterData["arcS2"];
  let arcEnd2 = letterData["arcE2"];
  // ARC SHARED PARAMETERS
  let arcHeight = letterData["arcH"];
  let arcWidth = letterData["arcW"];
  //RECTANGLE 
  let rectangleX = letterData["rectX"];
  let rectangleY = letterData["rectY"];
  let rectangleWidth = letterData["rectW"];
  let rectangleHeight = letterData["rectH"];
  // TRIANGLE
  let triangleX1 = letterData["triX1"];
  let triangleY1 = letterData["triY1"];
  let triangleX2 = letterData["triX2"];
  let triangleY2 = letterData["triY2"];
  let triangleX3 = letterData["triX3"];
  let triangleY3 = letterData["triY3"];
  

  // DARWING THE SHAPES
  fill(colourTri);
  triangle(triangleX1,triangleY1,triangleX2,triangleY2,triangleX3,triangleY3);
  fill(colourArc1);
  noStroke();
  arc(arcX,arcY,arcWidth,arcHeight,arcStart,arcEnd);
  fill(colourArc2);
  noStroke();
  arc(arcX2,arcY2,arcWidth,arcHeight,arcStart2,arcEnd2);
  fill(colourRect);
  rect(rectangleX,rectangleY,rectangleWidth,rectangleHeight);
}

function draw () {
  // CLEAR SCREEN  
  background(colorBack);

  // COMPUTE THE CENTER OF THE CANVAS
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // DRAW THE LETTERA A, B, C FROM SAVED DATA
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
