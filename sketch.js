
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

 





  "q1" :38,
  "q2" :31,
  "q3" :86,
  "q4" :20,
  "q5" :69,
  "q6" :63,
  "q7" :30,
  "q8" :80,
    

  
  
}

const letterB = {
  "sizeX": 120,
  "sizeY": 10,
  "offsetx": -80,
  "offsety": -100,

  "sizeX2": 10,
  "sizeY2": 200,
  "offsetx2": -90,
  "offsety2": -100,

  "sizeX3": 10,
  "sizeY3": 100,
  "offsetx3": 30,
  "offsety3": -100,


}

const letterC = {

    "sizeX": 130,
  "sizeY": 10,
  "offsetx": -80,
  "offsety": -100,
 

  "sizeX2": 10,
  "sizeY2": 200,
  "offsetx2": -90,
  "offsety2": -100,

  "sizeX3": 130,
  "sizeY3": 10,
  "offsetx3": -80,
  "offsety3": -100,
  
  "q1" :38,
  "q2" :31,
  "q3" :86,
  "q4" :20,
  "q5" :69,
  "q6" :63,
  "q7" :30,
  "q8" :80,


}

const colorFront  = "#f21352";
const colorBack   = "#fcecb0";
const colorStroke = "#e00214";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(2);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  

  let size1 = letterData["sizeX"];
  let size2 = letterData["sizeY"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

   let size11 = letterData["sizeX2"];
  let size22 = letterData["sizeY2"];
  let pos2xx = posx + letterData["offsetx2"];
  let pos2yy = posy + letterData["offsety2"];

  let size111 = letterData["sizeX3"];
  let size222 = letterData["sizeY3"];
  let pos2xxx = posx + letterData["offsetx3"];
  let pos2yyy = posy + letterData["offsety3"];
  
  let po1 = posx + letterData["q1"];
  let po2 = posy + letterData["q2"];
    let po3= posx + letterData["q3"];
  let po4 = posy + letterData["q4"];
    let po5= posx + letterData["q5"];
  let po6 = posy + letterData["q6"];
    let po7 = posx + letterData["q7"];
  let po8 = posy + letterData["q8"];

let quad1 = quad(38,31,86,20,69,63,30,80)
let po11 = posx + letterData["quad1"]

  // draw two circles

  rect(pos2x, pos2y, size1, size2);
  rect(pos2xx, pos2yy, size11, size22);
  rect(pos2xxx, pos2yyy, size111, size222);
quad(po1,po2,po3,po4,po5,po6,po7,po8)

  triangle(posx,posy,posx-80,posy+100,posx+80,posy+100);




}

function draw () {
  // clear screen
  background(colorBack);


  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 320, center_y - 100,10, letterA);
  drawLetter(center_x      , center_y      ,10, letterB);
  drawLetter(center_x + 320, center_y      ,10,letterC);

}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
