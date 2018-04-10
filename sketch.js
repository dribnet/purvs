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


//line1
 "ptx": -150,
 "pty": -50,
 "ptx2": -150,
 "pty2": 50,

 //line2
 "ptx3": -150,
 "pty3": 50,
 "ptx4": -50,
 "pty4": 50,

 //line3
 "ptx5": -50,
 "pty5": 50,
 "ptx6": -50,
 "pty6": -70,

 //line 4
 "ptx7": -150,
 "pty7": -50,
 "ptx8": -60,
 "pty8": -50,
}

const letterB = {

//line1
"ptx": -50,
"pty": -150,
"ptx2": -50,
"pty2": 50,


//line2
 "ptx3": -50,
 "pty3": -50,
 "ptx4": 50,
 "pty4": -50,


//line3
 "ptx5": 50,
 "pty5": -50,
 "ptx6": 50,
 "pty6": 50,

//line4
 "ptx7": 50,
 "pty7": 50,
 "ptx8": 25,
 "pty8": 50,

}

const letterC = {

//line1
 "ptx": 100,
 "pty": -50,
 "ptx2": 25,
 "pty2": -50,

 //line2
 "ptx3": 25,
 "pty3": -50,
 "ptx4": 25,
 "pty4": 50,

 //line3
 "ptx5": 25,
 "pty5": 50,
 "ptx6": 100,
 "pty6": 50,

 //line 4
 "ptx7": 100,
 "pty7": -50,
 "ptx8": 100,
 "pty8": -40,
}

const colorFront  = "#199cff";
const colorBack   = "#ffbc14"; //orange
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(3);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(ptx, pty, letterData) {

  let posx = ptx + letterData["ptx"];
  let posy = pty + letterData["pty"];

  let pos2x = ptx + letterData["ptx2"];
  let pos2y = pty + letterData["pty2"];

  let pos3x = ptx + letterData["ptx3"];
  let pos3y = pty + letterData["pty3"];

  let pos4x = ptx + letterData["ptx4"];
  let pos4y = pty + letterData["pty4"];

  let pos5x = ptx + letterData["ptx5"];
  let pos5y = pty + letterData["pty5"];

  let pos6x = ptx + letterData["ptx6"];
  let pos6y = pty + letterData["pty6"];

  let pos7x = ptx + letterData["ptx7"];
  let pos7y = pty + letterData["pty7"];

  let pos8x = ptx + letterData["ptx8"];
  let pos8y = pty + letterData["pty8"];


  line(posx,posy,pos2x,pos2y);
  line(pos3x,pos3y,pos4x,pos4y);
  line(pos5x,pos5y,pos6x,pos6y);
  line(pos7x,pos7y,pos8x,pos8y);






}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x  -200, center_y, letterA);
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