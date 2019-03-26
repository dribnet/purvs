const canvasWidth = 960;
const canvasHeight = 500;
let tester = 0;
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
  "size": 80,
  "offsetx": 0,
  "offsety": 35
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

const colorFront1  = "#ff18a6";
const colorFront2  = "#ff59c4";
const colorBack    = "#e3eded";
const colorStroke  = "#3f1128";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);
  // with no animation, redrawing the screen is not necessary
  //noLoop();
}

function drawLetter(posx, posy, letterData, onetwo, oneRotate, twoRotate, cutout) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  tester = tester +0.01;
  // draw two circles
  /*
  fill(colorFront1);
  ellipse(posx, posy, 150, 150);
  fill(colorFront2);
  ellipse(pos2x, pos2y, size2, size2);
  */
 
  noStroke();
  //push();
  strokeWeight(1);
  stroke(0);
  push();
  translate(posx, posy-50);

  rotate(oneRotate);
  if(onetwo == true){
  triangle(0, -100, 100, 100, -100, 100);
  }
  else {
  triangle(0, -100, 100, 0, -100, 0);
  }
  pop();


  push();
 if(onetwo == false || cutout == true){
    if(cutout == true){
      noStroke();
      fill('#ff59c4');
    }
  translate(posx, posy+50);
  rotate(twoRotate); 
  triangle(0, -100, 100, 0, -100, 0); 

  pop();
  } 

}


function draw () {
  // clear screen
  background('#ff59c4');

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA, true, 0, 0, true);

  drawLetter(center_x      , center_y, letterB, true, 0, 0, true);
  //drawLetter(center_x + 250, center_y, letterC, true);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
