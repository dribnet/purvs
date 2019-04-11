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
  "size": 100,
  "offsetx": 0,
  "offsety": 35
}

const letterB = {
  "size": 100,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}


const colorFront2  = "#900C3F";
const colorFront1  = "#581845";
const colorBack    = "#e3eded";
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
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw A
  stroke(colorFront1);
  noFill();
  strokeWeight(2);
  arc(220,100,size2,size2,radians(60),radians(200));
  arc(220,100,size2,size2,radians(250),radians(30));
  line(203,53,185,100);
  line(216,50,187,137);
  line(206,80,244,142);
  line(215,50,263,124);

  strokeWeight(10);
  stroke(colorFront2);
  point(244,142);
  point(185,99);

    // Z
    stroke(colorFront1);
  noFill();
  strokeWeight(2);
  arc(100,100,size2,size2,radians(330),radians(210));
  arc(100,100,size2,size2,radians(250),radians(290));
  line(58,74,100,100);
  line(58,123,100,100);
  line(83,53,150,100);
  line(61,130,105,105);
  line(149,108,121,89);
stroke(colorFront2);
  strokeWeight(10);
  point(58,74);
  point(142,74);

  
      // L
  strokeWeight(2);
  arc(460,100,100,100,radians(60),radians(200));
  arc(460,100,100,100,radians(250),radians(30));

beginShape();
vertex(442, 54);
vertex(442, 80);
vertex(505,80);
endShape(OPEN);
  line(424,66,424,105);
  line(424,105,509,105);
  strokeWeight(10);
  point(424,66);
  point(503,126);
  
   
    // M
  strokeWeight(2);
  arc(340,100,100,100,radians(160),radians(200));
  arc(340,100,100,100,radians(250),radians(130));

beginShape();
vertex(303, 88);
vertex(291, 101);
vertex(336,119);
vertex(389, 101);
vertex(375, 87);
endShape(OPEN);
  line(293,82,338,100);
  line(338,100,386,82);
  line(307,109,307,138);
  line(370,109,370,140);
  strokeWeight(10);
  point(322,54);
  point(293,117);

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
