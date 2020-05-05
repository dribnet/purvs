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
  //"size": 80,
  "offsetx": -30,
  "offsety": -50,
  "W":0
  //"H":0

}

const letterB = {
  //"size": 150,
  "offsetx": -30,
  "offsety": -50,
  "A":0
}

const letterC = {
	"C": 0
 // "size": 100,
 // "offsetx": 30,
  //"offsety": 0
}

const colorFront1  = "#FFFFFF";
const colorFront2  = "#0000ff";
const colorBack    = "#000000";
const colorStroke  = "#233f11";
const lineColor    = "#ff0000";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(3);


  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let across = posx+letterData["W"];
  let acrossB = posx+ letterData["A"];
  let acrossC = posx+ letterData["C"];
  // draw two circles
  fill(colorFront1);
  stroke(colorBack);
  //rect(posx-80, posy-100, 150, 150);
  fill(colorFront2);
  
  stroke(lineColor);
  line(across-5,posy-100,across+70,posy+50);
  line(across-5,posy-100,across-80,posy+50);

  line(across-5,posy-100,across-5,posy+50);
   line(across+70,posy+50,across-80,posy+50);
   //B
   line(acrossB+70,posy-25,acrossB-80,posy-25);
   line(acrossB+70,posy-100,acrossB+70,posy+50);
   line(acrossB-80,posy-100,acrossB-80,posy+50);
   line(acrossB-80,posy-100,acrossB+70,posy-100);
   line(acrossB-80,posy+50,acrossB+70,posy+50);
   //C
   line(acrossC-80,posy+50,acrossC+70,posy+50);
   line(acrossC-80,posy-100,acrossC+70,posy-100)
   line(acrossC-80,posy-100,acrossC-80,posy+50);

   rect(pos2x, pos2y,50,50);

  //
  //line(across,across-75,across-75,across+75);

  //ellipse(pos2x, pos2y, size2, size2);
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
