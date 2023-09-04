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
  "top": 50,
  "mid": -53,
  "bot": 75
}

const letterB = {
  "top": 36,
  "mid": 23,
  "bot": 75
}

const letterC = {
  "top": 50,
  "mid": 23,
  "bot": 75
}

const colorFront1  = "#C1272D";
const colorFront2  = "#F2F2F2";
const colorFront3  = "#cfe8e7";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');




  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(5);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let topbar = letterData["top"];
  let midbar = posx + letterData["mid"];
  let botbar = letterData["bot"];

  // draw two circles
  fill(colorFront1);
  ellipse(posx, posy, 100, 100);
  noFill();
  line(posx-50, posy-100, posx-50, posy+75);
  line(posx+50, posy-100, posx+50, posy+75);
  arc(posx, posy+75, 100, 100, TWO_PI, PI);
  line(posx-50, posy-70, posx+50, posy-70);
  line(posx-50, posy-100, posx+50, posy-100);


  strokeWeight(0);
  
  fill(colorFront3);

  rect(midbar, posy-103, 30, 233)
  fill(colorFront3);
  rect(posx-53, posy-103, 106, topbar);
  rect(posx-53, ((posy+130)-botbar), 106, botbar);



  strokeWeight(6);

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
