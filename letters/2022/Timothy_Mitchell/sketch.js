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
  "IntCutoutx1": -10,
  "IntCutouty1": -40,
  "IntCutoutx2": 15,
  "IntCutouty2": -40,
  "IntCutoutx3": 6,
  "IntCutouty3": 20,
  "IntCutoutx4": -19,
  "IntCutouty4": 20,

  "IntCutout2x1": -21,
  "IntCutout2y1": 40,
  "IntCutout2x2": 4,
  "IntCutout2y2": 40,
  "IntCutout2x3": -1,
  "IntCutout2y3": 70,
  "IntCutout2x4": -27,
  "IntCutout2y4": 70,

  "IntCutout3x1": -10,
  "IntCutout3y1": -40,
  "IntCutout3x2": 15,
  "IntCutout3y2": -40,
  "IntCutout3x3": 6,
  "IntCutout3y3": 20,
  "IntCutout3x4": -19,
  "IntCutout3y4": 20,

  "IntCutout4x1": -10,
  "IntCutout4y1": -40,
  "IntCutout4x2": 15,
  "IntCutout4y2": -40,
  "IntCutout4x3": 6,
  "IntCutout4y3": 20,
  "IntCutout4x4": -19,
  "IntCutout4y4": 20,
}

const letterB = {
  "IntCutoutx1": 5,
  "IntCutouty1": -40,
  "IntCutoutx2": 15,
  "IntCutouty2": -40,
  "IntCutoutx3": 8,
  "IntCutouty3": -8,
  "IntCutoutx4": -2,
  "IntCutouty4": -8,

  "IntCutout2x1": -5,
  "IntCutout2y1": 16,
  "IntCutout2x2": 5,
  "IntCutout2y2": 16,
  "IntCutout2x3": -1,
  "IntCutout2y3": 50,
  "IntCutout2x4": -12,
  "IntCutout2y4": 50,

  "IntCutout3x1": 40,
  "IntCutout3y1": 0,
  "IntCutout3x2": 68,
  "IntCutout3y2": 0,
  "IntCutout3x3": 67,
  "IntCutout3y3": 5,
  "IntCutout3x4": 38,
  "IntCutout3y4": 5,

  "IntCutout4x1": 40,
  "IntCutout4y1": 0,
  "IntCutout4x2": 68,
  "IntCutout4y2": 0,
  "IntCutout4x3": 67,
  "IntCutout4y3": 5,
  "IntCutout4x4": 38,
  "IntCutout4y4": 5,
}

const letterC = {
  /*"IntCutoutx1": 5,
  "IntCutouty1": -40,
  "IntCutoutx2": 15,
  "IntCutouty2": -40,
  "IntCutoutx3": 8,
  "IntCutouty3": -8,
  "IntCutoutx4": -2,
  "IntCutouty4": -8,

  "IntCutout2x1": -5,
  "IntCutout2y1": 16,
  "IntCutout2x2": 5,
  "IntCutout2y2": 16,
  "IntCutout2x3": -1,
  "IntCutout2y3": 50,
  "IntCutout2x4": -12,
  "IntCutout2y4": 50,

  "IntCutout3x1": 40,
  "IntCutout3y1": 0,
  "IntCutout3x2": 68,
  "IntCutout3y2": 0,
  "IntCutout3x3": 67,
  "IntCutout3y3": 5,
  "IntCutout3x4": 38,
  "IntCutout3y4": 5,*/

  "IntCutout4x1": 20,
  "IntCutout4y1": -7,
  "IntCutout4x2": 69,
  "IntCutout4y2": -7,
  "IntCutout4x3": 67,
  "IntCutout4y3": 7,
  "IntCutout4x4": 18,
  "IntCutout4y4": 7,
}

const backgroundColor  = "#9bc3e1";
const strokeColor      = "#03045e";
const fillColor = "#de1738";

const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";

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
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  noStroke();

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  //parameters for cutouts
//cutout 1 point 1
  let Cut1x1 = posx + letterData["IntCutoutx1"];
  let Cut1y1 = posy + letterData["IntCutouty1"];
//cutout 1 point 2
  let Cut1x2 = posx + letterData["IntCutoutx2"];
  let Cut1y2 = posy + letterData["IntCutouty2"];
//cutout 1 point 3
  let Cut1x3 = posx + letterData["IntCutoutx3"];
  let Cut1y3 = posy + letterData["IntCutouty3"];
//cutout 1 point 4
  let Cut1x4 = posx + letterData["IntCutoutx4"];
  let Cut1y4 = posy + letterData["IntCutouty4"];

//cutout 2 point 1
  let Cut2x1 = posx + letterData["IntCutout2x1"];
  let Cut2y1 = posy + letterData["IntCutout2y1"];
//cutout 2 point 2
  let Cut2x2 = posx + letterData["IntCutout2x2"];
  let Cut2y2 = posy + letterData["IntCutout2y2"];
//cutout 2 point 3
  let Cut2x3 = posx + letterData["IntCutout2x3"];
  let Cut2y3 = posy + letterData["IntCutout2y3"];
//cutout 2 point 4
  let Cut2x4 = posx + letterData["IntCutout2x4"];
  let Cut2y4 = posy + letterData["IntCutout2y4"];

//cutout 3 point 1
  let Cut3x1 = posx + letterData["IntCutout3x1"];
  let Cut3y1 = posy + letterData["IntCutout3y1"];
//cutout 3 point 2
  let Cut3x2 = posx + letterData["IntCutout3x2"];
  let Cut3y2 = posy + letterData["IntCutout3y2"];
//cutout 3 point 3
  let Cut3x3 = posx + letterData["IntCutout3x3"];
  let Cut3y3 = posy + letterData["IntCutout3y3"];
//cutout 3 point 4
  let Cut3x4 = posx + letterData["IntCutout3x4"];
  let Cut3y4 = posy + letterData["IntCutout3y4"];

//cutout 4 point 1
  let Cut4x1 = posx + letterData["IntCutout4x1"];
  let Cut4y1 = posy + letterData["IntCutout4y1"];
//cutout 4 point 2
  let Cut4x2 = posx + letterData["IntCutout4x2"];
  let Cut4y2 = posy + letterData["IntCutout4y2"];
//cutout 4 point 3
  let Cut4x3 = posx + letterData["IntCutout4x3"];
  let Cut4y3 = posy + letterData["IntCutout4y3"];
//cutout 4 point 4
  let Cut4x4 = posx + letterData["IntCutout4x4"];
  let Cut4y4 = posy + letterData["IntCutout4y4"];

//drawing base quad
  fill('#bb595f');
  quad(posx-45 , posy-70, posx+75, posy-70,  posx+60, posy+70, posx-60, posy+70);

//drawing cutouts
  //fill('#fffff');
  fill('#9bc3e1');
  quad(Cut1x1, Cut1y1, Cut1x2, Cut1y2, Cut1x3, Cut1y3, Cut1x4, Cut1y4);
  quad(Cut2x1, Cut2y1, Cut2x2, Cut2y2, Cut2x3, Cut2y3, Cut2x4, Cut2y4);
  quad(Cut3x1, Cut3y1, Cut3x2, Cut3y2, Cut3x3, Cut3y3, Cut3x4, Cut3y4);
  quad(Cut4x1, Cut4y1, Cut4x2, Cut4y2, Cut4x3, Cut4y3, Cut4x4, Cut4y4);


  // draw two circles
  //fill(darkBlue);
  //ellipse(posx, posy, 150, 150);
  //fill(lightBlue);
  //ellipse(pos2x, pos2y, size2, size2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
