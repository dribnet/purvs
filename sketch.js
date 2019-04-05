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
    [[0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0],
    [0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0],
    [0, 0, 0, 1,0,0,0,1,1,1,0,0,0,0],
    [0, 0, 0, 0,1,0,1,1,1,1,0,0,0,0],
    [0, 0, 0, 0,0,1,1,1,0,0,0,0,0,0],
    [0, 0, 0, 1,1,1,1,0,1,1,1,0,0,0],
    [0, 0, 1, 0,0,1,1,1,0,0,0,1,0,0],
    [0, 1, 0, 0,0,0,0,0,0,0,0,0,1,0],
    [0, 1, 0, 0,0,0,0,0,0,0,0,0,1,0],
    [0, 1, 0, 0,0,0,0,0,0,0,0,0,1,0],
    [0, 1, 0, 0,0,0,0,0,0,0,0,0,1,0],
    [0, 0, 1, 0,0,0,0,0,0,0,0,1,0,0],
    [0, 0, 0, 1,0,0,0,0,0,0,1,0,0,0],
    [0, 0, 0, 0,1,1,1,1,1,1,0,0,0,0]]
}

const letterB = {
  structure: 
    [[0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0],
    [0, 0, 0, 0,0,1,1,1,0,0,0,0,0,0],
    [0, 0, 0, 1,1,0,0,0,1,1,0,0,0,0],
    [0, 0, 1, 0,0,0,0,0,0,0,1,0,0,0],
    [0, 1, 0, 1,0,0,0,0,0,1,0,1,0,0],
    [0, 1, 0, 0,1,0,0,0,1,0,0,1,0,0],
    [1, 0, 0, 1,1,1,1,1,1,1,0,0,1,0],
    [1, 1, 1, 0,1,0,0,0,1,0,1,1,1,0],
    [1, 0, 0, 0,1,0,0,0,1,0,0,0,1,0],
    [0, 1, 0, 0,1,0,0,0,1,0,0,1,0,0],
    [0, 1, 0, 1,0,0,0,0,0,1,0,1,0,0],
    [0, 0, 1, 0,0,0,0,0,0,0,1,0,0,0],
    [0, 0, 0, 1,1,0,0,0,1,1,0,0,0,0],
    [0, 0, 0, 0,0,1,1,1,0,0,0,0,0,0]]
}

const letterC = {
  structure: 
   [[0, 1, 0, 0,0,0,0,0,0,0,1,0,0,0],
    [0, 1, 1, 0,1,1,1,1,0,1,1,0,0,0],
    [0, 1, 0, 1,0,0,0,0,1,0,1,0,0,0],
    [0, 1, 0, 0,0,0,0,0,0,0,1,0,0,0],
    [0, 1, 0, 0,0,0,0,0,0,0,1,0,0,0],
    [0, 0, 1, 0,0,0,0,0,0,1,0,0,0,0],
    [0, 0, 0, 0,0,0,0,0,1,0,0,0,0,0],
    [0, 0, 0, 0,1,0,0,0,0,1,0,0,0,0],
    [0, 0, 0, 1,0,0,0,0,0,0,1,0,0,0],
    [0, 1, 0, 1,0,0,0,0,0,0,1,0,0,0],
    [1, 0, 0, 1,0,0,0,0,0,0,0,1,0,0],
    [1, 0, 0, 1,0,0,0,0,0,0,0,1,0,0],
    [0, 1, 0, 0,0,0,0,0,0,0,0,1,0,0],
    [0, 0, 1, 1,1,1,1,1,1,1,1,1,0,0]]
}

const letterE = {

}
const colorFront1 = "#199cff";
const colorFront2 = "#59ccff";
const colorBack = "#B38781";
const colorStroke = "#233f11";

function setup() {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(2);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {

  let w = 200;
  let h = 200;
  let curY=posy;
  stroke(0);
  if(!letterData.structure)return;
  fill(255,237,235);
  for (let r = 0; r < letterData.structure.length; r++) {

    let curX=posx;
    for (let c = 0; c < letterData.structure[r].length; c++) {
        if(letterData.structure[r][c] === 1)
          rect(curX,curY,7,7,2);
        curX+=7;
     }
     curY+=7;


  }

}

function draw() {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 350, center_y-50, letterA);
  drawLetter(center_x-50, center_y-50, letterB);
  drawLetter(center_x + 250, center_y-50, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
