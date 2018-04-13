
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
  "size": 20,
  "offsetx": 200,
  "offsety": 485,
  "offset3x": 235,
  "offset3y": 515,
  "rotate": 90 
}

const letterC = {
  "size": 80,
//  "offsetx": 200,
//  "offsety": 485,
//  "offset3x": 235,
//  "offset3y": 515
    //"rotatearc": 47
//  //"offset3x": 240,
//  //"offset3y": 480
//  //"offsetx5": 160,
}

const letterB = {
  "size": 100,
//  "offsetx": 200,
//  "offsety":  485
//  "offset3x": 235,
//  "offset3y": 515      

}

const colorFront  = "#e2d3ed";
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');


  angleMode(DEGREES);

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = posx + letterData["offset3x"];
  let pos3y = posy + letterData["offset3y"];
  let rotate2 = letterData["rotatearc"];
  //let rotate2 = 0;
  //let pos4x = posx + letterData["offsetx2"];
  //let pos4y = posy + letterData["offsety2"];
  //let pos5x = posx + letterData["offsetx4"];
  //let pos5y = posx + letterData["offsety5"];
  //let pos2y3 = posy + letterData["offsety3"];
  //let pos2x6 = posx + letterData["offsetx6"];
  //let pos2y6 = posy + letterData["offsety6"];
angleMode(DEGREES);

  // draw two circles
  //ellipse(posx, posy, 150, 150);
  //ellipse(pos2x, pos2y, size2, size2);

  push();

  //rotate(rotate2+47);
  translate(-140,-690);
  //rect or whatever  r

  noFill();
  arc(pos2x, pos2y, 230, -230, 270, PI, PI + QUARTER_PI);
  arc(pos3x, pos3y, 90, -90, 270, PI, PI + QUARTER_PI);

  pop();

    
  push();

  noFill();
  rotate(-45);
  translate(-30,-40);
////  arc(pos2x2, pos2y2, 220, -250, 180, PI, PI + QUARTER_PI);
////  arc(pos2x4, pos2y3, 80, -100, 180, PI, PI + QUARTER_PI);
////  arc(pos2x5, pos2y3, 80, -100, 180, PI, PI + QUARTER_PI);

  arc(pos2x, pos2y, 230, -230, 270, PI, PI + QUARTER_PI);
  arc(pos3x, pos3y, 90, -90, 270, PI, PI + QUARTER_PI);
    
  pop();
    
    
  push();  
  noFill();
  rotate(-225);
  translate(-660, -1280);
  arc(pos3x, pos3y, 90, -90, 270, PI, PI + QUARTER_PI);
  pop();
    
  push();
  
  noFill();
  rotate(-45);
  translate(-250,-260);
  arc(pos2x, pos2y, 230, -230, 270, PI, PI + QUARTER_PI); 
    
    
  pop();


  //arc(pos2x, pos2y, 140, 300, PI + QUARTER_PI, TWO_PI);

  //arc(pos2x + 60, pos2y+30, 300, 500, PI, PI + QUARTER_PI);

  //arc(pos2x, pos2y, 50, 50, 0, HALF_PI);

  //arc(pos2x - 13.5, pos2y - 61, 100, 200, HALF_PI, PI);


}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
