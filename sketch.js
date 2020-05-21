const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "offsetx":0,
  "offsety" :35,
  "circDiam": 70,
    "CircleX": 170,
    "CircleY": 170,
    "lineX": 190,
    "lineY": 130,
    "lineX2": 270,
    "lineY2": 320,
    "flipX" : 110,
    "flipY": -70,
    "strokeW": 20
}

const letterB = {
  "offsetx":0,
  "offsety" :35,
  "circDiam": 60,
    "CircleX": 430,
    "CircleY": 200,
    "lineX": 430,
    "lineY": 160,
    "lineX2": 470,
    "lineY2":260,
    "flipX" : 110,
    "flipY": -70,
    "strokeW": 40
}

const letterC = {
  "offsetx":0,
  "offsety" :35,
  "circDiam": 0,
    "CircleX": -10,
    "CircleY": 10,
    "lineX": 650,
    "lineY": 180,
    "lineX2": 760,
    "lineY2": 320,
    "flipX": 110,
    "flipY": -70,
    "strokeW": 20

}

const colorFront1  = "#f55a42";
const colorFront2  = "#42b6f5";
const colorBack    = "#ffffff";
const colorStroke  = "#233f11";


const red1 = 252;
const green1 = 199;
const blue1 = 53;


const red2 = 48;
const green2 = 48;
const blue2 = 46;


const red3 = 219;
const green3 = 0;
const blue3 = 0;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

stroke(colorStroke);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {

//VARIABLES 
let pos2x = posx + letterData["offsetx"];
let pos2y = posy + letterData["offsety"];



let circDiam = letterData["circDiam"];
let CircleX = 50 + letterData["CircleX"];
let CircleY = 100 + letterData["CircleY"];

let lineX = 50 + letterData["lineX"];
let lineY = 100 + letterData["lineY"];
let lineX2 = letterData["lineX2"];
let lineY2 = letterData["lineY2"];

let flipX = letterData["flipX"];
let flipY = letterData["flipY"];

let strokeW = letterData["strokeW"];
  
//DRAW CIRCLE
push();
noStroke();
fill(red1, green1, blue1);
arc(CircleX, CircleY, circDiam, circDiam, 0, 360);
pop();

//DRAW SEMI-CIRCLE
push();
strokeWeight(0);
strokeJoin(ROUND);
strokeCap(ROUND);
fill(red2, green2, blue2);
angleMode(DEGREES); 
arc(pos2x, pos2y, 100, 100, flipX, flipY);
pop();


// //DRAW LINE
strokeWeight(strokeW);
strokeCap(ROUND);
stroke(red3, green3, blue3);
fill(red3, green3, blue3);
push();
line(lineX, lineY, lineX2, lineY2);
pop();




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
