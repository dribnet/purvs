const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my five variables per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
   arcStart: starting angle (in radians) of the arc
   arcStop: end angle (in radians) of the arc
 *
 */

const letterA = {
  "arc1Start": 180/3,
  "arc1Stop": 360 - 180/3,
  "arc1Size": 100,
  "arc2Start": 0,
  "arc2Stop": 0,
  "arc2Size": 0,
  "offsetX1": 0,
  "offsetY1": 0,
  "offsetX2": 0,
  "offsetY2": 0,
  "lineX1": 30,
  "lineY1": 30,
  "lineX2": 30,
  "lineY2": -30
}

const letterB = {
  "arc1Start": 270,
  "arc1Stop": 90,
  "arc1Size": 50,
  "arc2Start": 270,
  "arc2Stop": 90,
  "arc2Size": 50,
  "offsetX1": -0,
  "offsetY1": -25,
  "offsetX2": -0,
  "offsetY2": 25,
  "lineX1": -20,
  "lineY1": 50,
  "lineX2": -20,
  "lineY2": -50
}

const letterC = {
  "arc1Start": 180/3,
  "arc1Stop": 360 - 180/3,
  "arc1Size": 100,
  "arc2Start": 0,
  "arc2Stop": 0,
  "arc2Size": 0,
  "offsetX1": 0,
  "offsetY1": 0,
  "offsetX2": 0,
  "offsetY2": 0,
  "lineX1": 0,
  "lineY1": 0,
  "lineX2": 0,
  "lineY2": 0
}

// changed colorFronts to arrays so I could pass it into fill function and add alpha value 
const colorFront1  = [46, 139, 87]; // sea green #2E8B57
const colorFront2  = [173, 255, 87]; // greenyellow #ADFF2F
const colorBack    = "#53565b";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = posx + letterData["offsetx"];
  // let pos2y = posy + letterData["offsety"];
  // let start = letterData["arcStart"];
  // let stop = letterData["arcStop"];

  // // draw two arcs
  // fill(colorFront1[0], colorFront1[1], colorFront1[2], 255);
  // arc(posx, posy, 150, 150, radians(start), radians(stop), PIE);
  // fill(colorFront2[0], colorFront2[1], colorFront2[2], 160);
  // arc(pos2x, pos2y, size2, size2, radians(start), radians(stop), PIE);

  //determine parameters
  let arc1Start = letterData["arc1Start"];
  let arc1Stop = letterData["arc1Stop"];
  let arc1Size = letterData["arc1Size"];
  let arc2Start = letterData["arc2Start"];
  let arc2Stop = letterData["arc2Stop"];
  let arc2Size = letterData["arc2Size"];
  let lineX1 = letterData["lineX1"];
  let lineY1 = letterData["lineY1"];
  let lineX2 = letterData["lineX2"];
  let lineY2 = letterData["lineY2"];
  let offsetX1 = letterData["offsetX1"];
  let offsetY1 = letterData["offsetY1"];
  let offsetX2 = letterData["offsetX2"];
  let offsetY2 = letterData["offsetY2"];

  //draw shapes
  stroke(199, 208, 221);
  strokeWeight(2);
  noFill();
  arc(posx + offsetX1, posy + offsetY1, arc1Size, arc1Size, radians(arc1Start), radians(arc1Stop));
  arc(posx + offsetX2, posy + offsetY2, arc2Size, arc2Size, radians(arc2Start), radians(arc2Stop));
  line(posx + lineX1, posy + lineY1, posx + lineX2, posy + lineY2);


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
