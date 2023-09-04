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
  "wave2": true,
  "offsetx": 0,
  "offsety": -110,
  "offsetx2": 0,
  "offsety2": -110,
  "rotate1": 110,
  "rotate2": 70,
  "peaks1": 1,
  "peaks2": 1,
  "peak1H": 30,
  "peak2H": 30
}

const letterB = {
  "wave2": true,
  "offsetx": -40,
  "offsety": -120,
  "offsetx2": 0,
  "offsety2": -120,
  "rotate1": 90,
  "rotate2": 90,
  "peaks1": 1,
  "peaks2": 3,
  "peak1H": 20,
  "peak2H": 60

}

const letterC = {
  "wave2": false,
  "offsetx": 40,
  "offsety": -120,
  "offsetx2": 30,
  "offsety2": 0,
  "rotate1": 90,
  "rotate2": 90,
  "peaks1": 1,
  "peaks2": 2,
  "peak1H": 100,
  "peak2H": 20
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
  let wave2 = letterData["wave2"];
  let pos1x = posx + letterData["offsetx"];
  let pos1y = posy + letterData["offsety"];
  let pos2x = posx + letterData["offsetx2"];
  let pos2y = posy + letterData["offsety2"];
  let rotate1 = letterData["rotate1"];
  let rotate2 = letterData["rotate2"];
  let peaks1 = letterData["peaks1"];
  let peaks2 = letterData["peaks2"];
  let peaks1H = letterData["peak1H"];
  let peaks2H = letterData["peak2H"];

  // draw two circles
  fill(darkBlue);
  rectMode(CENTER);
  strokeWeight(1);
  //rect(posx, posy, 150, 250); //bounding box?

  fill(lightBlue);
  strokeWeight(20);
  strokeCap(SQUARE);

  push();
  translate(pos1x, pos1y);
  angleMode(DEGREES);
  rotate(rotate1);
  angleMode(RADIANS);
  noFill();
  beginShape();
  for (let i = 0; i < 200; i++) { //sets length

    const x = i * 1.2; //also sets length
    const y = sin(i * radians(peaks1)) * peaks1H; //height of curve
    vertex(x, y);
  }
  endShape();
  pop();
  if(wave2 == true){
  push();
  translate(pos2x, pos2y);
  angleMode(DEGREES);
  rotate(rotate2);
  angleMode(RADIANS);
  noFill();
  beginShape();
  for (let i = 0; i < 200; i++) { //2 pixel spacing on the x - axis.

    const x = i * 1.2; //200 pixel high waveform on the y - axis.
    const y = -sin(i * radians(peaks2)) * peaks2H; //radians sets how many peaks
    vertex(x, y);
  }
  endShape();
  pop();
}

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  } else if (key == '@') {
    saveBlocksImages(true);
  }
}
