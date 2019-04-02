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

 //angleMode(DEGREES);
//background


const letterA = {
  "size": 0,
  "x": 240,
  "y":250,
  "x1":180,
  "y1":450,
  "x2":275,
  "y2":340,

  "x3":170,
  "y3":420,
  "x4":210,
  "y4":350,
   "x5":320,
  "y5":450,
  "x6":240,
  "y6":250



}

const letterB = {  
  "size": 150,
  "x1":0,
  "y1": 0,
  "x2":-110,
  "y2":0,
  "x3":230,
  "y3":250,
  "x4":230,
  "y4":250,
   "x5":230,
  "y5":250,
  "color": 40,
}

const letterC = {
  "size": 100,
  "x1": -1000,
  "y1": -1000,
  "x2":100,
  "y2":0,
  "x3":230,
  "y3":250,
  "x4":230,
  "y4":250,
   "x5":230,
  "y5":250
}

const colorFront1  = "#052342";
const colorFront2  = "#0c427a";
const colorBack    = (30);
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
 // noStroke();
  let size2 = letterData["size"];
  let pos1x = letterData["x"];
  let pos1y = letterData["y"];
  let pos2x = letterData["x1"];
  let pos2y = letterData["y1"];
  let pos3x = letterData["x2"];
  let pos3y = letterData["y2"];
  let pos4x = letterData["x3"];
  let pos4y = letterData["y3"];
  let pos5x = letterData["x4"];
  let pos5y = letterData["y4"];
  let pos6x = letterData["x5"];
  let pos6y = letterData["y5"];
  let pos7x = letterData["x6"];
  let pos7y = letterData["y6"];


  stroke(255);
  strokeWeight(1);
  line(pos1x, pos1y, posx-50,posy+200);
  fill(255, 15, 239, 50);
  noStroke();

  triangle(pos1x, pos1y,pos2x, pos2y,pos3x, pos3y);
  triangle(pos7x, pos7y,pos5x, pos5y,pos6x, pos6y);
  //triangle(pos3x, pos3y, pos3x-50,pos3y+200,pos3x+36,pos3y+100);
 // triangle(pos3x, pos3y, pos6x+75,pos6y + 200,pos7x-25,pos7y+100);

  fill(color);
  //fill(19, 52, 107,90);
  // beginShape();
  // vertex(pos2x,pos2y);
  // vertex(pos3x+120,pos3y);
  // vertex(pos2x+90,pos2y+100);
  // vertex(pos2x-25,pos2y+100);
  // endShape(CLOSE);

  //scale(1.5);
  // beginShape();
  // vertex(pos2x-25,pos2y+100);
  // vertex(pos2x+145,pos2y+100);
  // vertex(pos2x+115,pos2y+200);
  // vertex(pos2x-50,pos2y+200);
  // endShape(CLOSE);

}

function draw () {
  // clear screen
  background(colorBack);

     //backgrpund stars;
  for (var i=0; i<50; i++){
  var x = random(width);
  var y = random(height);
  var r = 0.5;
  fill(255);
  noStroke();
  ellipse(x,y,r*2,r*2);
}

  //ellipse()

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  // drawLetter(center_x      , center_y, letterB);
  //  drawLetter(center_x + 250, center_y, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
