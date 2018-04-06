const canvasWidth = 960;
const canvasHeight = 500;
var DrawTypeEnum = {
  CIRCLEGRID: 1,
  SQUARE: 2,
  CIRCLE: 3,
};
var circleOn = 1;
var squareOn = 1;
var diamondOn = 1;
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

const letterA = {

  "1": 0,
  "2": 1,
  "3": 0,
  "4": 1,
  "5": 1,
  "6": 1,
  "7": 1,
  "8": 0,
  "9": 1,
  "10": 0,
  "11": 0,
  "12": 1
}

const letterB = {
  "1": 1,
  "2": 0,
  "3": 1,
  "4": 1,
  "5": 1,
  "6": 0,
  "7": 1,
  "8": 0,
  "9": 1,
  "10": 1,
  "11": 0,
  "12": 0
}

const letterC = {
  "1": 0,
  "2": 1,
  "3": 1,
  "4": 1,
  "5": 0,
  "6": 0,
  "7": 0,
  "8": 1,
  "9": 1,
  "10": 0,
  "11": 1,
  "12": 0
}

const colorFront  = "#199cff";
const colorBack   = "#aae4f7";
const colorStroke = "#000000";
const colorDiamond = [240, 240, 240]; 
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
  squareOn = letterData["10"];
  circleOn = letterData["11"];
  diamondOn = letterData["12"];
  circleGridArray[0][0] = letterData["1"];
  circleGridArray[0][1] = letterData["2"];
  circleGridArray[0][2] = letterData["3"];
  circleGridArray[1][0] = letterData["4"];
  circleGridArray[1][1] = letterData["5"];
  circleGridArray[1][2] = letterData["6"];
  circleGridArray[2][0] = letterData["7"];
  circleGridArray[2][1] = letterData["8"];
  circleGridArray[2][2] = letterData["9"];



  // draw two circles
  // ellipse(posx, posy, 150, 150);
  // ellipse(pos2x, pos2y, size2, size2);

  fill(colorSquare);
  if(squareOn==1)
    rect(posx, posy, 20*scale, 20*scale);

  fill(colorCircle);
  if(circleOn==1)
    ellipse((posx)+100, (posy)+100, 20*scale, 20*scale);

  fill(colorDiamond);
  if(diamondOn==1)
  quad(posx+100, posy, posx+20*scale, posy+100, posx+100, posy+200, posx, posy+100,)
    
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
