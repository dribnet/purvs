const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "shape": 110,
  "inverse": 111,
  "measure": 1009100911,
  "x":191095,
  "y":191989
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  rectMode(CORNERS);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let shape  = str(letterData["shape"]);
  let inverse = str(letterData["inverse"]);
  let measure = str(letterData["measure"]);
  let x = str(letterData["x"]);
  let y = str(letterData["y"]);
  let splitShapes = split(shape,"");
  let splitInverse = split(inverse,"");
  let splitMeasure = split(measure,"9");
  let splitX = split(x,"9");
  let splitY = split(y,"9");
  
  for (i=0;i<splitShapes.length;i++) {
    if ((splitInverse[i]) == 0) {
       fill(0)
      } else {
        fill(255)
      }
    if ((splitShapes[i]) == 0) {
      ellipse(posx+splitX[i],posy+splitY[i],splitMeasure[i],splitMeasure[i]);
    } else {
      rect(posx+splitX[i],posy+splitY[i],posx+splitX[i]+10,posy+splitY[i]-splitMeasure[i]);
      }
  }
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  // drawLetter(center_x      , center_y, letterB);
  // drawLetter(center_x + 250, center_y, letterC);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
