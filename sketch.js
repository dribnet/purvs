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
  "size": 80,
  "offsetx": 0,
  "offsety": 35,
  "arcRotation": 180,
  "arcX": 0,
  "arcY": 0,
  "triangleHeight": -130,
  "triangleScale": 1.3,
  "triangleRotation":0,
"triangleY":0,
"triangleX":-60



}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145,
  "arcRotation": 90
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0,

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

  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let arcrotation = letterData["arcRotation"];

  let arcx = posx + letterData["arcX"];
  let arcy = posy + letterData["arcY"];


  let trianglescale = letterData["triangleScale"]
  let trianglerotation = letterData["triangleRotation"]

  let triangley = posy + letterData["triangleY"]
  let trianglex =  posx +letterData["triangleX"]

  let triangleheight = posy + letterData["triangleHeight"]




  // draw two circles

  //ellipse(posx, posy, 150, 150);
  push() //A triangle
  noFill()
  stroke(darkBlue);
  strokeWeight(8)
  translate(trianglex, triangley)
  translate(triangleheight)
  scale(trianglescale)
 rotate(trianglerotation)

  triangle(0, 0, 60, triangleheight, 120, 0);

  pop()



  push()

  noFill()
  strokeWeight(8)
  stroke(lightBlue);
  translate(arcx, arcy)
  rotate(arcrotation)
  arc(0, 0, 120, 120, 0, 180, OPEN)

  pop()


  //
  //ellipse(pos2x, pos2y, size2, size2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  } else if (key == '@') {
    saveBlocksImages(true);
  }
}
