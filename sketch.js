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
  //"size": 80,
  //"offsetx": 0,
 // "offsety": 0,
  "space": 10,
  "lp1": 0,
  "lp2":150,
  "lp3":350,
  "lilY": 50,


}

const letterB = {
  //"size": 150,
  //"offsetx": 0,
  //"offsety": 0,
  "space": 5,
  //"lp1": 100,
  //"lp2":200,
  //"lp3":350,
  "Blp1": 100,
  "Blp2":200,
  "Blp3":-100,
  "lilY":50,
  
}

const letterC = {
  "space": 10,
  "Blp1": 100,
  "Blp2":200,
  "Blp3":-100,

 // "size": 100,
 // "offsetx": 30,
  //"offsety": 0
}

const colorFront1  = "#FFFFFF";
const colorFront2  = "#0000ff";
const colorBack    = "#000000";
const colorStroke  = "#233f11";
const lineColor    = "#ff0000";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  
  strokeWeight(1);
rectMode(CENTER);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let a = letterData["space"];
  let pL1 = posx +letterData["lp1"];
  let pL2 = letterData["lp2"];
  let pL3 = letterData["lp3"];
  let BpL1 = posx +letterData["Blp1"];
  let BpL2 = letterData["Blp2"];
  let BpL3 = posx+letterData["Blp3"];
  let scl = letterData["lilY"];
  stroke(colorBack);
  fill(colorFront1);
rect(posx,posy,200,200);
for(let i = posx-100; i< posx+100; i+= a){
  line(pL1,pL2,i,pL3);
}
for(let i = posy-100;i< posy+100; i += a){
  line(BpL1,i,BpL3,i);
}
noStroke();
fill(colorBack);
rect(posx,posy,scl,scl);
  
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
