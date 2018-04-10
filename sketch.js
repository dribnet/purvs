const canvasWidth = 960;
const canvasHeight = 500;
var DrawTypeEnum = {
  CIRCLEGRID: 1,
  SQUARE: 2,
  CIRCLE: 3,
};
var circleOn = 1;
var squareOn = 1;
var TriangleOn = 1;
var circleGridArray = new Array(3);
for (var i = 0; i < circleGridArray.length; i++) {
   circleGridArray[i] = new Array(3);
 }

for (var i = 0; i < circleGridArray.length; i++) {
  for (var j = 0; j < circleGridArray[i].length; j++) {
    circleGridArray[i][j]= 1;
  }
}

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

// const letterA = {

//   "TL": 0,
//   "TM": 1,
//   "TR": 0,
//   "ML": 1,
//   "MM": 1,
//   "MR": 1,
//   "BL": 1,
//   "BM": 0,
//   "BR": 1,
//   "Square": 0,
//   "Circle": 0,
//   "Triangle": 1
// }

// const letterB = {
//   "TL": 1,
//   "TM": 1,
//   "TR": 0,
//   "ML": 1,
//   "MM": 0,
//   "MR": 1,
//   "BL": 1,
//   "BM": 1,
//   "BR": 0,
//   "Square": 1,
//   "Circle": 1,
//   "Triangle": 0
// }

// const letterC = {
//   "TL": 0,
//   "TM": 1,
//   "TR": 1,
//   "ML": 1,
//   "MM": 0,
//   "MR": 0,
//   "BL": 0,
//   "BM": 1,
//   "BR": 1,
//   "Square": 0,
//   "Circle": 1,
//   "Triangle": 0
// }

const letter = {
  "TL": 1,
  "TM": 1,
  "TR": 1,
  "ML": 1,
  "MM": 1,
  "MR": 1,
  "BL": 1,
  "BM": 0,
  "BR": 1,
  "Square": 1,
  "Circle": 0,
  "Triangle": 0
}

const colorFront  = "#199cff";
const colorBack   = "#aae4f7";
const colorStroke = "#000000";
const colorTriangle = [240, 240, 240]; 
const colorCircleGrid = [224, 0, 0];
const colorSquare = [0, 0, 0];
const colorCircle = [74, 85, 89];

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

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  squareOn = letterData["Square"];
  circleOn = letterData["Circle"];
  TriangleOn = letterData["Triangle"];
  circleGridArray[0][0] = letterData["TL"];
  circleGridArray[0][1] = letterData["TM"];
  circleGridArray[0][2] = letterData["TR"];
  circleGridArray[1][0] = letterData["ML"];
  circleGridArray[1][1] = letterData["MM"];
  circleGridArray[1][2] = letterData["MR"];
  circleGridArray[2][0] = letterData["BL"];
  circleGridArray[2][1] = letterData["BM"];
  circleGridArray[2][2] = letterData["BR"];



  // draw two circles
  // ellipse(posx, posy, 150, 150);
  // ellipse(pos2x, pos2y, size2, size2);

  fill(colorSquare);
  if(squareOn==1)
    rect(posx, posy, 20*scale, 20*scale);

  fill(colorCircle);
  if(circleOn==1)
    ellipse((posx)+100, (posy)+100, 20*scale, 20*scale);

  fill(colorTriangle);
  if(TriangleOn==1){
    triangle(posx, posy, posx+20*scale, posy, posx+100,posy+100);
    triangle(posx, posy, posx+20*scale, posy, posx+100,posy+100);
    //quad(posx+100, posy-100, posx+20*scale, posy, posx+100, posy+100, posx, posy,)
  }

  
    
  fill(colorCircleGrid);
  for (var i = 0; i < 3; i++) {
    yTranslate=i*100;
    for (var j = 0; j < 3; j++) {
      xTranslate=j*100;
      if(circleGridArray[i][j]==1)    
        ellipse((posx)+xTranslate, (posy)+yTranslate, 3*scale, 3*scale);
    }
  }


}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 3;  
  let center_y = canvasHeight / 3;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letter);
  drawLetter(center_x      , center_y, 10, letterK);
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
