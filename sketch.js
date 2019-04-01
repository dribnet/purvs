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
  structure: 
  [[1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
  [1, 0, 1]]
}

const letterB = {
  structure: 
  [[1, 0, 0],
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]]
}

const letterC = {
  structure: 
  [[1, 1, 1],
  [1, 0, 0],
  [1, 0, 0],
  [1, 1, 1]]
}

const letterE = {

}
const colorFront1 = "#199cff";
const colorFront2 = "#59ccff";
const colorBack = "#e3eded";
const colorStroke = "#233f11";

function setup() {
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

  let w = 100;
  let h = 200;
  let curY=posy;
  stroke(0);
  if(!letterData.structure)return;
  fill(random(255),random(255),random(255))
  for (let r = 0; r < letterData.structure.length; r++) {

    let curX=posx;
    for (let c = 0; c < letterData.structure[r].length; c++) {
        if(letterData.structure[r][c] === 1)
          ellipse(curX,curY,20,20);
        curX+=25;
     }
     curY+=25;


  }

}

function draw() {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
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
