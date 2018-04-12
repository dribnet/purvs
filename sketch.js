const canvasWidth = 960;
const canvasHeight = 500;

let center_x = canvasWidth / 2;  
let center_y = canvasHeight / 2;

var posx1 = center_x;
var posx2 = posx1 + 75;
var posx3 = posx2 + 75;

var posy1 = center_y;
var posy2 = posy1 + 75;
var posy3 = posy2 + 75;



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
  "size": 50,
  "offsetx": 0,
  "offsety": 0
}

const letterB = {
  "size": 10,
  "offsetx": 0,
  "offsety": 0
}

const letterC = {
  "size": 10,
  "offsetx": 0,
  "offsety": 0
}

const colorFront  = "#199cff";
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(1);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let pos3x = pos2x;
  let pos3y = pos2y;


  //Create coordinate points at dots
  var posx1 = pos2x;
  var posx2 = posx1 + 75;
  var posx3 = posx2 + 75;
  var posy1 = pos2y;
    var posy1h = posy1 + 37.5;
  var posy2 = posy1 + 75;
    var posy2h = posy2 + 37.5;
  var posy3 = posy2 + 75;



  // draw nine dots
  strokeWeight(1);
  drawDots(pos3x,pos3y);

//Drawing the letters
  strokeWeight(4);
  //Draw Letter A
  line(posx1,posy3,posx2,posy1);
  line(posx2,posy1,posx3,posy3);
  line(posx1,posy2,posx3,posy2);
  //Letter B
  line(posx2,posy1,posx2,posy3);
  line(posx2,posy1,posx3,posy1h);
  line(posx3,posy1h,posx2,posy2);
  line(posx2,posy2,posx3,posy2h);
  line(posx3,posy2h,posx2,posy3);
  //Letter C
  line(posx3,posy1,posx2,posy1);
  line(posx2,posy1,posx1,posy2);
  line(posx1,posy2,posx2,posy3);
  line(posx2,posy3,posx3,posy3);
}

function draw () {
  // clear screen
  background(colorBack);

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 325, center_y, 10, letterA);
  drawLetter(center_x - 75 , center_y, 10, letterB);
  drawLetter(center_x + 175, center_y, 10, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

function drawDots (pos3x,pos3y){
  for (i=0;i<=2;i++){
    ellipse(pos3x, pos3y, 10, 10);
    pos3x = pos3x + 75;
  }

  pos3y = pos3y + 75;
  pos3x = pos3x - 225;
  for (i=0;i<=2;i++){
    ellipse(pos3x, pos3y, 10, 10);
    pos3x = pos3x + 75;
  }

  pos3y = pos3y + 75;
  pos3x = pos3x - 225;
  for (i=0;i<=2;i++){
    ellipse(pos3x, pos3y, 10, 10);
    pos3x = pos3x + 75;
  }
}

function LetA (){
  line(posx1,posy3,posx2,posy1);
  line(posx2,posy1,posx3,posy3);
  line(posx1,posy2,posx3,posy2);
}