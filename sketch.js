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
  "arcLocatx": -250,
  "arcLocaty": -260,
  "arcwidth": 100,
  "archeight": 190,
  "arcangle": -180,
  "arrowlinea": 220,
  "arrowlineb": 250,
  "arrowlinec": 380,
  "arrowlined": 250,
}

const letterB = {
  "arcLocatx": -210,
  "arcLocaty": 390,
  "arcwidth": 100,
  "archeight": 130,
  "arcangle": -90,
  "t_angle": 90,
  "arrowlinea": 450,
  "arrowlineb": 250,
  "arrowlinec": 560,
  "arrowlined": 250,
  "arrowline1": 230,
  "arrowline2": -570,

  "linea": 480,
  "lineb": 200,
  "linec": 480,
  "lined": 310

}

const letterC = {
  "arcLocatx": 260,
  "arcLocaty": -600,
  "arcwidth": 100,
  "archeight": 130,
  "arcangle": 85,

}

const backgroundColor = "#000000";
const strokeColor = "#ffffff";

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

  let linea = letterData["linea"];
  let lineb = letterData["lineb"];
  let linec = letterData["linec"];
  let lined = letterData["lined"];
  let arrowlinea = letterData["arrowlinea"];
  let arrowlineb = letterData["arrowlineb"];
  let arrowlinec = letterData["arrowlinec"];
  let arrowlined = letterData["arrowlined"];
  let arrowline1 = letterData["arrowline1"];
  let arrowline2 = letterData["arrowline2"];
  let arcwidth = letterData["arcwidth"];
  let archeight = letterData["archeight"];
  let arcLocatx = posx + letterData["arcLocatx"];
  let arcLocaty = posy + letterData["arcLocaty"];
  let arcangle = letterData["arcangle"];
  let t_angle = letterData["t_angle"];

  push()
  angleMode(DEGREES);
  //fill(darkBlue);
  rotate(arcangle);
  noFill();
  scale(1.2);
  strokeWeight(10);
  arc(letterData["arcLocatx"], letterData["arcLocaty"], letterData["arcwidth"], letterData["archeight"], 0, 180, OPEN);
  pop()
  strokeWeight(6);
  rectMode(CENTER);
  line(letterData["linea"], letterData["lineb"], letterData["linec"], letterData["lined"]);
  line(letterData["arrowlinea"], letterData["arrowlineb"], letterData["arrowlinec"], letterData["arrowlined"]);
  push()
  rotate(t_angle);
  triangle(letterData["arrowline1"], letterData["arrowline2"], letterData["arrowline1"] + 18, letterData["arrowline2"] - 45, letterData["arrowline1"] + 36, letterData["arrowline2"]);
  pop()
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  } else if (key == '@') {
    saveBlocksImages(true);
  }
}
