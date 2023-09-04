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
  "start": 0,
   "end": -75,
  "start2": 60,
   "end2": 75,
  "start3": 30,
    "end3": 0,
  "start4": 0,
   "end4": 0

}

const letterB = {
  "start": 0,
   "end": -75,
  "start2": 30,
    "end2": -38,
  "start3": 0,
    "end3": 0,
  "start4": 30,
    "end4": 38,
  "start5": 0,
    "end5": 75,

}

const letterC = {
  "start": 75,
    "end": -75,
  "start2": 0,
    "end2": 0,
  "start3": 0,
    "end3": 0,
  "start4": 75,
    "end4": 75

}

const backgroundColor  = "#FFB6C1";
const strokeColor      = "#233f11";

const babyBlue  = "#89cff0";
const lightBlue  = "#cdebf9";
const lBabyBlue = "#b6e2f6";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  //strokeWeight(4);
  noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
  angleMode(DEGREES);
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawA(center_x - 250, center_y, letterA);
  drawB(center_x      , center_y, letterB);
  drawC(center_x + 250, center_y, letterC);
}

function drawA(posx,posy,letterData){

  let start = posx + letterData["start"];
  let stop =  posy + letterData["end"];

  let start2 = posx + letterData["start2"];
  let stop2 =  posy + letterData["end2"];

  let start3 = posx + letterData["start3"];
  let stop3 =  posy + letterData["end3"];

  let start4 = posx + letterData["start4"];
  let stop4 =  posy + letterData["end4"];

  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);
 
}
function drawB(posx,posy,letterData){

  let start = posx + letterData["start"];
  let stop =  posy + letterData["end"];

  let start2 = posx + letterData["start2"];
  let stop2 =  posy + letterData["end2"];

  let start3 = posx + letterData["start3"];
  let stop3 =  posy + letterData["end3"];

  let start4 = posx + letterData["start4"];
  let stop4 =  posy + letterData["end4"];

  let start5 = posx + letterData["start5"];
  let stop5 =  posy + letterData["end5"];

  stroke(lBabyBlue);
  strokeWeight(5);

  line(start,stop,start2,stop2);
  line(start2,stop2,start3,stop3);
  line(start3,stop3,start4,stop4);
  line(start4,stop4,start5,stop5);

  }

function drawC(posx,posy,letterData){
 
  let start = posx + letterData["start"];
  let stop =  posy + letterData["end"];

  let start2 = posx + letterData["start2"];
  let stop2 =  posy + letterData["end2"];

  let start3 = posx + letterData["start3"];
  let stop3 =  posy + letterData["end3"];

  let start4 = posx + letterData["start4"];
  let stop4 =  posy + letterData["end4"];

  let start5 = posx + letterData["start5"];
  let stop5 =  posy + letterData["end5"];

  stroke(lBabyBlue);
  strokeWeight(5);
  line(start,stop,start2,stop2);
  line(start3,stop3,start4,stop4);


  }
  

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
