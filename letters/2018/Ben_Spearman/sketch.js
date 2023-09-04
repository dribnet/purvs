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

var show = 20;
var hide = 0;

//var dot1 = [pos1,pos2];

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
      "dot1": hide,
      "dot2": show,
      "dot3": hide,
      "dot4": show,
      "dot5": show,
      "dot6": show,
      "dot7": show,
      "dot8": hide,
      "dot9": show,

      "dotm1": hide,
      "dotm2": hide
}


const letterB = {
      "dot1": show,
      "dot2": hide,
      "dot3": hide,
      "dot4": show,
      "dot5": hide,
      "dot6": hide,
      "dot7": show,
      "dot8": hide,
      "dot9": hide,

      "dotm1": show,
      "dotm2": show
}

const letterC = {
      "dot1": hide,
      "dot2": show,
      "dot3": show,
      "dot4": show,
      "dot5": hide,
      "dot6": hide,
      "dot7": hide,
      "dot8": show,
      "dot9": show,

      "dotm1": hide,
      "dotm2": hide
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
  
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(1);

  //Creating vars from the parameters in letter.js
  let dot1 = letterData["dot1"];
  let dot2 = letterData["dot2"];
  let dot3 = letterData["dot3"];
  let dot4 = letterData["dot4"];
  let dot5 = letterData["dot5"];
  let dot6 = letterData["dot6"];
  let dot7 = letterData["dot7"];
  let dot8 = letterData["dot8"];
  let dot9 = letterData["dot9"];
  
  let dotm1 = letterData["dotm1"];
  let dotm2 = letterData["dotm2"];

  //Draw lines for ease of reading(mayberemoved later)
  line(0,0,0,200);
  line(100,0,100,200);

  //Drawing the dots in a 3x3 grid
  ellipse(posx1, posy1, dot1);
  ellipse(posx2, posy1, dot2);
  ellipse(posx3, posy1, dot3);
  ellipse(posx1, posy2, dot4);
  ellipse(posx2, posy2, dot5);
  ellipse(posx3, posy2, dot6);
  ellipse(posx1, posy3, dot7);
  ellipse(posx2, posy3, dot8);
  ellipse(posx3, posy3, dot9);
  //Drawing the extra two dots in the grid
  ellipse(posx3,50,dotm1);
  ellipse(posx3,145,dotm2);
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