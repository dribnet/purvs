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
  "size": 150,
  "offsetx": 0,
  "offsety": 0,
  "curveX": 10,
  "curveMidX":-500,
  "curveMidY":200,
  "curveY": 80,
  "translateX":50,
  "translateY":15
}
const letterB = {
  "size": 150,
  "offsetx": 20,
  "offsety": 20,
  "curveX": 0,
  "curveMidX":500,
  "curveMidY":500,
  "curveY": 130,
  "translateX":-7,
  "translateY":-40
}

const letterC = {
  "size": 60,
  "offsetx": 0,
  "offsety": 0,
  "curveX": 20,
  "curveMidX":400,
  "curveMidY":200,
  "curveY": 80,
  "translateX":10,
  "translateY":50
}

const backgroundColor = "#aeffab";
const strokeColor = "#03045e";

const frontColour = "#af94ff";
const backColour = "#fb94ff";

function setup() {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

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
  let offX = letterData["offsetx"];
  let offY = letterData["offsety"];
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let bStroke = posx + letterData["curveX"];
  let bStroke2 = posy + letterData["curveY"];
  let bMidX = posx + letterData["curveMidX"];
  let bMidY = posy + letterData["curveMidY"];
  let minusBS = pos2x - letterData["curveX"];
  let minusBS2 = posy - letterData["curveY"];
  let transX = letterData["translateX"];
  let transY = letterData ["translateY"];
  // draw two circles
  fill(frontColour);
  strokeWeight(0);
  ellipse(pos2x, pos2y, size2, size2);
  // fill(backColour);//back circle
  // ellipse(posx+10, posy+15, 150);
  // fill(frontColour);//front cirlce
  translate(transX,transY);
  beginShape();
  // curveVertex(posx,posy);
  curveVertex(bMidX, bMidY);
  // vertex(posx,posy);
  curveVertex(bStroke, bStroke2);//bottom vertex
  curveVertex(minusBS, minusBS2);//top wertex
  curveVertex(bMidX, minusBS2)
  endShape();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  } else if (key == '@') {
    saveBlocksImages(true);
  }
}
