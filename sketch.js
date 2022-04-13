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
  "arcX": 0,
  "arcY": 0,//arc


  "triangleRotation":90,
"triangleY":0,
"triangleX":0,
"triangleScale":1.1


}

const letterB = {

}

const letterC = {


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


  let trianglerotation = letterData["triangleRotation"]
  let trianglescale = letterData["triangleScale"]

  let triangley = posy + letterData["triangleY"]
  let trianglex =  posx +letterData["triangleX"]





  // draw two circles

  //ellipse(posx, posy, 150, 150);
  noFill()
  strokeWeight(8)

  push() //A triangle

  stroke(darkBlue);

  translate(trianglex, triangley)
  translate(65,0)

 rotate(trianglerotation)

scale(trianglescale)

  triangle(0, 0, 60, 60, 120, 0);

  stroke(lightBlue)
  point(60,0)
  pop()



  push()

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
