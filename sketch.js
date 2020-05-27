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
  "tri1x1": -10,
  "tri1y1": 50,
  "tri1x2": 25,
  "tri1y2": -20,
  "tri1x3": 60,
  "tri1y3": 50,

  "tri2x1": 15,
  "tri2y1": 50,
  "tri2x2": 35,
  "tri2y2": 0,
  "tri2x3": 60,
  "tri2y3": 50
}

const letterB = {
  "rect1x": 400,
  "rect1y": 230,
  "rect1w": 25,
  "rect1h": 70,

  "arc1posx":0,
  "arc1posy":0,
  "arc1size": 50,
  "arcStart1": 0,
  "arcEnd1": 180
}

const letterC = {

}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorFront3  = "#12e042";
const colorFront4  = "#5eff84";
const colorFront5  = "#facc00";
const colorFront6  = "#ffed63";
const colorBack    = "#e3eded";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters - triangles
  let triangle1x1 = posx + letterData["tri1x1"];
  let triangle1y1 = posy + letterData["tri1y1"];
  let triangle1x2 = posx + letterData["tri1x2"];
  let triangle1y2 = posy + letterData["tri1y2"];
  let triangle1x3 = posx + letterData["tri1x3"];
  let triangle1y3 = posy + letterData["tri1y3"];

  let triangle2x1 = posx + letterData["tri2x1"];
  let triangle2y1 = posy + letterData["tri2y1"];
  let triangle2x2 = posx + letterData["tri2x2"];
  let triangle2y2 = posy + letterData["tri2y2"];
  let triangle2x3 = posx + letterData["tri2x3"];
  let triangle2y3 = posy + letterData["tri2y3"];

  //rectangles
  let rect1x = letterData["rect1x"];
  let rect1y = letterData["rect1y"];
  let rect1Width = letterData["rect1w"];
  let rect1Height = letterData["rect1h"];

  let rect2x = letterData["rect2x"];
  let rect2y = letterData["rect2y"];
  let rect2Width = letterData["rect2w"];
  let rect2Height = letterData["rect2h"];

  //arcs 
  let arc1posx = posx + letterData["arc1x"];
  let arc1posy = posy + letterData["arc1y"];
  let arc1size = letterData["arc1size"];
  let arcStart1 = letterData["start1"];
  let arcEnd1 = letterData["end1"];

  let arc2posx = posx + letterData["arc2x"];
  let arc2posy = posy + letterData["arc2y"]; 
  let arcStart2 = letterData["start2"];
  let arcEnd2 = letterData["end2"];


  // draw shapes
  fill(colorFront5);
  triangle(triangle1x1, triangle1y1, triangle1x2, triangle1y2, triangle1x3, triangle1y3);
  fill(colorFront6);
  triangle(triangle2x1, triangle2y1, triangle2x2, triangle2y2, triangle2x3, triangle2y3);

  fill(colorFront3);
  rect(rect1x, rect1y, rect1Width, rect1Height);
  fill(colorFront4);
  rect(rect2x, rect2y, rect2Width, rect2Height);

  fill(colorFront1);
  arc(arc1posx, arc1posy, arc1size, arc1size, arcStart1, arcEnd1);
  fill(colorFront2);
  arc(arc2posx, arc2posy, 80, 80, arcStart2, arcEnd2);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
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