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
  "mainArcSize": 150,
  "mainArcX": 0,
  "mainArcY": 0,
  "mainArcStart": 1.0472,
  "mainArcEnd": 2.0944,
  "subArcSize1": 60,
  "subArcSize2": 60,
  "subArc1X": 0,
  "subArc1Y": 20,
  "subArc1Start": 1.0472,
  "subArc1End": 2.0944,
  "subArc2X": 0,
  "subArc2Y": 60,
  "subArc2Start": 1.0472,
  "subArc2End": 2.0944,


}

const letterB = {
  "mainArcSize": 75,
  "mainArcX": 0,
  "mainArcY": 35,
  "mainArcStart": 0,
  "mainArcEnd": 4.71239,
  "subArcSize1": 40,
  "subArcSize2": 0,
  "subArc1X": 0,
  "subArc1Y": 40,
  "subArc1Start": 0,
  "subArc1End": 3.14159,
  "subArc2X": 0,
  "subArc2Y": 60,
  "subArc2Start": 0,
  "subArc2End": 0,
}

const letterC = {
  "mainArcSize": 75,
  "mainArcX": 0,
  "mainArcY": 35,
  "mainArcStart": 0,
  "mainArcEnd": 0,
  "subArcSize1": 125,
  "subArcSize2": 0,
  "subArc1X": -12.5,
  "subArc1Y": 35,
  "subArc1Start": 5.93412,
  "subArc1End": 0.349066,
  "subArc2X": 0,
  "subArc2Y": 60,
  "subArc2Start": 0,
  "subArc2End": 0,
}

const colorFront1  = "#619eff";
const colorFront2  = "#ffa229";
const colorBack    = "#ede5ce";
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
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  //main arc
  let MArcS = letterData["mainArcStart"]
  let MArcE = letterData["mainArcEnd"]
  let MArcX = posx + letterData["mainArcX"]
  let MArcY = posy + letterData["mainArcY"]
  let MArcSize = letterData["mainArcSize"]

  let SArcSize1 = letterData["subArcSize1"]
  let SArcSize2 = letterData["subArcSize2"]

  //sub arc 1
  let SArcS1 = letterData["subArc1Start"]
  let SArcE1 = letterData["subArc1End"]
  let SArcX1 = posx + letterData["subArc1X"]
  let SArcY1 = posy + letterData["subArc1Y"]

  //sub arc 2
  let SArcS2 = letterData["subArc2Start"]
  let SArcE2 = letterData["subArc2End"]
  let SArcX2 = posx + letterData["subArc2X"]
  let SArcY2 = posy + letterData["subArc2Y"]

  // draw arcs
  noStroke();
  fill(colorFront1);
  ellipseMode(CENTER);
  arc(MArcX, MArcY, MArcSize, MArcSize, MArcS, MArcE)
  fill(colorFront2);
  arc(SArcX1, SArcY1, SArcSize1, SArcSize1, SArcS1, SArcE1)

  arc(SArcX2, SArcY2, SArcSize2, SArcSize2, SArcS2, SArcE2)

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
