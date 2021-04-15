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

const backgroundColor  = "#edb4e7";
const strokeColor      = "#233f11";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";

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
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  //fill(darkBlue);
 // ellipse(posx, posy, 150, 150);
 // fill(lightBlue);
//  ellipse(pos2x, pos2y, size2, size2);

  //A  
  stroke(255, 0, 25);
  line(250,250,300,350);
  stroke(255, 247, 0);
  line(100,350,150,250);
  stroke(0,0,0);//black
  fill(3, 252, 44);
  rect(150,150,100,100);
  fill(0, 242, 255);
  ellipse(200,200,50,50);


  //B
  stroke(0,0,0);
  fill(3, 252, 44);
  rect(400,150,100,100);
  fill(0, 242, 255);
  ellipse(450,300,100,100);
  stroke(255, 0, 25);//red
  line(400,150,400,350);
  stroke(255, 247, 0);
  line(400,150,500,250)


  //C
  stroke(0,0,0);
  fill(3, 252, 44);
  rect(600,150,100,100);
  fill(0, 242, 255);
  ellipse(650,200,50,50);
  stroke(255, 0, 25);
  line(600,250,600,350);
  stroke(255, 247, 0);
  line(600,350,700,350);




}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
