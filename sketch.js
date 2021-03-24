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
  "drawmode":'symmetry_vert',
  "x1":0,
  "y1":-50,
  "x2":70,
  "y2":60,
  "x3":35,
  "y3":60,
  "x4":15,
  "y4":25,
  "x5":0,
  "y5":25,
//ellipse parameters

"ex":0,
  "ey":0,
  "eheight":30,
  "ewidth":30

}

const letterB = {
"drawmode":'symmetry_hor',
  "x1":-30,
  "y1":0,
  "x2":-30,
  "y2":40,
  "x3":0,
  "y3":50,
  "x4":30,
  "y4":25,
  "x5":30,
  "y5":0,
//ellipse parameters
"ex":0,
  "ey":0,
  "eheight":15,
  "ewidth":100


}

const letterC = {
 "drawmode":'symmetry_hor',
 "x1":-30,
 "y1":0,
 "x2":-30,
 "y2":40,
 "x3":30,
 "y3":30,
 "x4":30,
 "y4":15,
 "x5":0,
 "y5":0,
//ellipse parameters
"ex":0,
  "ey":0,
  "eheight":10,
  "ewidth":10


}

const backgroundColor  = "#0D0208";
//const strokeColor      = "#233f11";

//const darkBlue  = "#199cff";
const fillcol  = "#008F11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  //stroke(strokeColor);
  //strokeWeight(4);
  noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  // let size2 = letterData["size"];
  //let pos2x = posx + letterData["offsetx"];
  //let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(fillcol);




if (letterData["drawmode"]=='symmetry_vert'){
  beginShape();
  vertex(posx-letterData["x1"],posy+letterData["y1"]);
  vertex(posx-letterData["x2"],posy+letterData["y2"]);
  vertex(posx-letterData["x3"],posy+letterData["y3"]);
  vertex(posx-letterData["x4"],posy+letterData["y4"]);
  vertex(posx-letterData["x5"],posy+letterData["y5"]);
  endShape();
  beginShape();
  vertex(posx+letterData["x1"],posy+letterData["y1"]);
  vertex(posx+letterData["x2"],posy+letterData["y2"]);
  vertex(posx+letterData["x3"],posy+letterData["y3"]);
  vertex(posx+letterData["x4"],posy+letterData["y4"]);
  vertex(posx+letterData["x5"],posy+letterData["y5"]);
  endShape();
}
else if (letterData["drawmode"]=='symmetry_hor') {
  beginShape();
  vertex(posx+letterData["x1"],posy-letterData["y1"]);
  vertex(posx+letterData["x2"],posy-letterData["y2"]);
  vertex(posx+letterData["x3"],posy-letterData["y3"]);
  vertex(posx+letterData["x4"],posy-letterData["y4"]);
  vertex(posx+letterData["x5"],posy-letterData["y5"]);
  endShape();
  beginShape();
  vertex(posx+letterData["x1"],posy+letterData["y1"]);
  vertex(posx+letterData["x2"],posy+letterData["y2"]);
  vertex(posx+letterData["x3"],posy+letterData["y3"]);
  vertex(posx+letterData["x4"],posy+letterData["y4"]);
  vertex(posx+letterData["x5"],posy+letterData["y5"]);
  endShape();

}

fill(backgroundColor);
   ellipse(posx+letterData["ex"], posy+letterData["ey"], letterData["ewidth"], letterData["eheight"]);

  // fill(lightBlue);
  // ellipse(pos2x, pos2y, size2, size2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
