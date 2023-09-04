const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "arcLocat": 158,
  "arcSize": 200,
  "arcBg": 140,
  "arcEd": 200,

  "rectLocatL": 15,
  "rectLocatS": 5,
  "rectSizeL": 80,
  "rectSizeS": 40
}

const letterB = {
  "arcLocat": -100,
  "arcSize": 200,
  "arcBg": 310,
  "arcEd": 30,

  "rectLocatL": 40,
  "rectLocatS": 15,
  "rectSizeL": 80,
  "rectSizeS": 40
}

const letterC = {
  "arcLocat": 80,
  "arcSize": 150,
  "arcBg": 60,
  "arcEd": 300,

  "rectLocatL": 10,
  "rectLocatS": 5,
  "rectSizeL": 40,
  "rectSizeS": 20
}

const backgroundColor  = "#FFCB9A";
const strokeColor      = "#0F6466";

const darkBlue  = "#0077b6";
const lightBlue  = "#D2E8E3";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

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
  drawLetter(center_x - 300, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {

  let rectSizeA = letterData["rectSizeL"];
  let rectSizeB = letterData["rectSizeS"];
  let rectPosX = posx + letterData["rectLocatL"];
  let rectPosY = posy + letterData["rectLocatS"];


  angleMode(DEGREES);
  //fill(darkBlue);
  noFill();
  strokeWeight(10);
  arc(posx+letterData["arcLocat"], posy, letterData["arcSize"], letterData["arcSize"], letterData["arcBg"], letterData["arcEd"]);
  strokeWeight(4);
  arc(posx+letterData["arcLocat"]*1.05, posy*0.95, letterData["arcSize"], letterData["arcSize"], letterData["arcBg"], letterData["arcEd"]);
  fill(lightBlue);
  strokeWeight(6);
  rectMode(CENTER);
  rect(rectPosX, rectPosY, rectSizeA, rectSizeA, 20);
  rect(rectPosX, rectPosY, rectSizeB, rectSizeB, 20);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
