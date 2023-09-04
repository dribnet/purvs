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
  "arcRotation": 180,
  "arcX": -15,
  "arcY": 35,
  "arcScale": 0.8,
  "triangleRotation": 180,
  "triangleScale": 1.4,
  "triangleY": 40,
  "triangleX": 4

}

const letterB = {
  "arcRotation": 270,
"arcX": -12.599999999999994,
"arcY": -76,
"arcScale": 1,
"triangleRotation": 270,
"triangleScale": 1.2,
"triangleY": 132,
"triangleX": -78.7
}

const letterC = {
  "arcRotation": 90,
"arcX": 35,
"arcY": 10,
"arcScale": 1.3,
"triangleRotation": 270,
"triangleScale": 0.7,
"triangleY": 51,
"triangleX": -95.2

}

const backgroundColor = "#caf0f8";
const strokeColor = "#03045e";

const darkBlue = "#0077b6";
const lightBlue = "#90e0ef";

function setup() {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);
  angleMode(DEGREES)
  strokeJoin(ROUND);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw() {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;



  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle

  let arcrotation = letterData["arcRotation"];

  let arcx = posx + letterData["arcX"];
  let arcy = posy + letterData["arcY"];
let arcscale = letterData["arcScale"]

  let trianglerotation = letterData["triangleRotation"]
  let trianglescale = letterData["triangleScale"]

  let triangley = posy + letterData["triangleY"]
  let trianglex =  posx +letterData["triangleX"]





  // draw two circles
  noFill()

strokeWeight(6)


  push()//arc

  stroke(lightBlue);
  translate(arcx, arcy)
  rotate(arcrotation)
scale(arcscale)

  arc(0, 0, 120, 120, 0, 180, OPEN)

  pop()


  push() //A triangle

  stroke(darkBlue);
  translate(trianglex, triangley)
  translate(65,0)
 rotate(trianglerotation)
scale(trianglescale)

  triangle(0, 0, 60, 60, 120, 0);

  stroke(lightBlue)

  pop()





  // draw two circles
  fill(darkBlue);
//  ellipse(50, 150, 75, 75);
  fill(lightBlue);
//  ellipse(pos2x, pos2y, size2, size2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  } else if (key == '@') {
    saveBlocksImages(true);
  }
}
