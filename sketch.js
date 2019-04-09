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
  "cx1": 960/4,
  "cy1": 500/7*3,
  "cx2": 960/4-30,
  "cy2": 500/7*3,
  "cx3": 960/4+30,
  "cy3": 500/7*3,
  "cx4": 960/4-30,
  "cy4": 500/7*3+30,
  "cx5": 960/4-30,
  "cy5": 500/7*3+60,
  "cx6": 960/4,
  "cy6": 500/7*3+60,
  "cx7": 960/4+30,
  "cy7": 500/7*3+60,
  "cx8": 960/4+30,
  "cy8": 500/7*3+30,
  "cx9": 960/4+60,
  "cy9": 500/7*3+60
}

const letterB = {
  "cx1": 960/2,
  "cy1": 500/7*3,
  "cx2": 960/2-30,
  "cy2": 500/7*3,
  "cx3": 960/2+30,
  "cy3": 500/7*3,
  "cx4": 960/2-30,
  "cy4": 500/7*3+30,
  "cx5": 960/2-30,
  "cy5": 500/7*3+60,
  "cx6": 960/2,
  "cy6": 500/7*3+60,
  "cx7": 960/2+30,
  "cy7": 500/7*3+60,
  "cx8": 960/2+30,
  "cy8": 500/7*3+30,
  "cx9": 960/2-30,
  "cy9": 500/7*3-30
}
const letterC = {
  "cx1": 960/4*3,
  "cy1": 500/7*3,
  "cx2": 960/4*3-30,
  "cy2": 500/7*3,
  "cx3": 960/4*3+30,
  "cy3": 500/7*3,
  "cx4": 960/4*3-30,
  "cy4": 500/7*3+30,
  "cx5": 960/4*3-30,
  "cy5": 500/7*3+60,
  "cx6": 960/4*3,
  "cy6": 500/7*3+60,
  "cx7": 960/4*3+30,
  "cy7": 500/7*3+60,
}


const colorBack    = "#48d1cc";

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

function setup () {
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
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x =letterData["cx1"];
  let pos2y =letterData["cy1"];
  let pos3x =letterData["cx2"];
  let pos3y =letterData["cy2"];
  let pos4x =letterData["cx3"];
  let pos4y =letterData["cy3"];
  let pos5x =letterData["cx4"];
  let pos5y =letterData["cy4"];
  let pos6x =letterData["cx5"];
  let pos6y =letterData["cy5"];
  let pos7x =letterData["cx6"];
  let pos7y =letterData["cy6"];
  let pos8x =letterData["cx7"];
  let pos8y =letterData["cy7"];
  let pos9x =letterData["cx8"];
  let pos9y =letterData["cy8"];
  let pos10x =letterData["cx9"];
  let pos10y =letterData["cy9"];

  // draw two circles
color(241,32,60);
  strokeWeight(25);


//A
point(pos2x,pos2y)
point(pos3x,pos3y)
point(pos4x,pos4y)
point(pos5x,pos5y)
point(pos6x,pos6y)
point(pos7x,pos7y)
point(pos8x,pos8y)
point(pos9x,pos9y)
point(pos10x,pos10y)


//B
point(pos2x,pos2y)
point(pos3x,pos3y)
point(pos4x,pos4y)
point(pos5x,pos5y)
point(pos6x,pos6y)
point(pos7x,pos7y)
point(pos8x,pos8y)
point(pos9x,pos9y)
point(pos10x,pos10y)
//C
point(pos2x,pos2y)
point(pos3x,pos3y)
point(pos4x,pos4y)
point(pos5x,pos5y)
point(pos6x,pos6y)
point(pos7x,pos7y)
point(pos8x,pos8y)

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
