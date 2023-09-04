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
  "x2":255,
  "y2":390,

  "x3":180,
  "y3":450,
  "x4":150,
  "y4":296,
   "x5":320,
  "y5":450,
  "x6":240,
  "y6":250,
  "x7":240,
  "y7":250




}

const letterB = {
  "size": 150,
  "x1":240,
  "y1": 250,
  "x2":240,
  "y2":440,
  "x3":350,
  "y3":380,
  "x4":240,
  "y4":250,
  "x5":330,
  "y5":310,
  "x6":290,
  "y6":350,
  "x7":170,
  "y7":290,
  "x8":240,
  "y8":440




  //"color": 40
}

const letterC = {
  "size": 100,
  "x1": 270,
  "y1": 250,
  "x2":200,
  "y2":250,
  "x3":150,
  "y3":420,
  "x4":150,
  "y4":360,
   "x5":200,
  "y5":250,
  "x6":150,
  "y6":300,
  "x7":150,
  "y7":300,
   "x8":270,
  "y8":460

}

const colorFront1  = "#052342";
const colorFront2  = "#0c427a";
const colorBack    = (30);
const colorStroke  = (255);


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
  let pos1x = posx+letterData["x"];
  let pos1y = posy+letterData["y"];
  let pos2x = posx+letterData["x1"];
  let pos2y = posy+letterData["y1"];
  let pos3x = posx+letterData["x2"];
  let pos3y = posy+letterData["y2"];
  let pos4x = posx+letterData["x3"];
  let pos4y = posy+letterData["y3"];
  let pos5x = posx+letterData["x4"];
  let pos5y = posy+letterData["y4"];
  let pos6x = posx+letterData["x5"];
  let pos6y = posy+letterData["y5"];
  let pos7x = posx+letterData["x6"];
  let pos7y = posy+letterData["y6"];
  let pos8x = posx+letterData["x7"];
  let pos8y = posy+letterData["y7"];
  let pos9x = posx+letterData["x8"];
  let pos9y = posy+letterData["y8"];
  let pos10x = posx+letterData["x9"];
  let pos10y = posy+letterData["y9"];
  // let pos9x = posx+letterData["x5"];
  // let pos9y = posy+letterData["y5"];
  // let pos10x = posx+letterData["x6"];
  // let pos10y = posy+letterData["y6"];



  stroke(255);
  strokeWeight(1);
  //line(pos1x, pos1y, posx-50,posy+200);
  //fill(255, 15, 239, 50);
  //noStroke();
  noFill();

  line(pos5x, pos5y, pos9x, pos9y);
  line(pos2x, pos2y,pos3x,pos3y);
  line(pos7x, pos7y, pos6x, pos6y);
  line(pos5x, pos5y,pos6x,pos6y);
  line(pos4x, pos4y, pos8x, pos8y);
  line(pos4x, pos4y, pos9x, pos9y);
  //line(pos9x, pos9y, pos10x, pos10y);
  fill(colorStroke);
  ellipse(pos1x+0.5, pos1y, 4, 4);
  ellipse(pos5x+0.5, pos5y, 4, 4);
  ellipse(pos6x+0.5, pos6y, 4, 4);
  ellipse(pos3x+0.5, pos3y, 4, 4);
  ellipse(pos2x+0.5, pos2y, 4, 4);
  ellipse(pos8x+0.5, pos8y, 4, 4);

  fill(250,250,0, 90);
  noStroke();
  // triangle(pos2x,pos2y, pos3x, pos3y, pos1x, pos1y);
  // triangle(pos3x,pos3y, pos2x, pos2y, pos4x, pos4y);

  //line(pos1x, pos1y,pos3x,pos3y);
  // beginShape();
  // vertex(pos1x, pos1y);
  // vertex(pos2x, pos2y);
  // vertex(pos3x, pos3y);
  // endShape(CLOSE);


  //triangle(pos1x, pos1y,pos2x, pos2y,pos3x, pos3y);
 // triangle(pos7x, pos7y,pos5x, pos5y,pos6x, pos6y);
  //triangle(pos3x, pos3y, pos3x-50,pos3y+200,pos3x+36,pos3y+100);
 // triangle(pos3x, pos3y, pos6x+75,pos6y + 200,pos7x-25,pos7y+100);

  //fill(color);
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
  let center_x = canvasWidth/4;
  let center_y = -canvasHeight/4 ;

  // draw the letters A, B, C from saved data
  //translate(-100, -100);
  drawLetter(center_x-250, center_y,letterA);
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
