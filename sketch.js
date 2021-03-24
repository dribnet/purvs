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
  "size": 100,
  "offsetx": 0,
  "offsety": 55,
  // "opacity1": 145,
  "size2": 30,
  "offsetx3": 0,
  "offsety3": -30,
  //"opacity2": 145,
  "offsetx4": 0,
  "offsety4": -70,
  "angleStart": 0, //-210
  "angleStop": 0,  //30
  "size3": 100
}

const letterB = {
  "size": 50,
  "offsetx": 20,
  "offsety": -30,
  // "opacity1": 145,
  "size2": 50,
  "offsetx3": 20,
  "offsety3": 30,
  //"opacity2": 145,
  "offsetx4": 55,
  "offsety4": 0,
  "angleStart": -30,
  "angleStop": 30,
  "size3": 50
}

const letterC = {
  "size": 100,
  "offsetx": 50,
  "offsety": 0,
  // "opacity1": 145,
  "size2": 0,
  "offsetx3": 0,
  "offsety3": 35,
  //"opacity2": 0,
  "offsetx4": 55,
  "offsety4": -20,
  "angleStart": 0,
  "angleStop": 0,
  "size3": 50
}

  const letterD = {
  // "size": 60,
  // "offsetx": 30,
  // "offsety": 0,
  // "opacity1": 145,
  "size2": 0,
  "offsetx3": 0,
  "offsety3": 35,
  //"opacity2": 0,
  "offsetx4": 0,
  "offsety4": 0,
  "angleStart": -90,
  "angleStop": 90,
  "size3": 100
}

  const letterE = {
  "size": 50,
  "offsetx": 55,
  "offsety": -30,
  // "opacity1": 145,
  "size2": 50,
  "offsetx3": 55,
  "offsety3": 30,
  //"opacity2": 145,
  "offsetx4": 25,
  "offsety4": 25,
  "angleStart": 0,
  "angleStop": 0,
  "size3": 100
}
  const letterF = {
  // "size": 40,
  // "offsetx": 55,
  // "offsety": -20,
  //"opacity1": 145,
  "size2": 40,
  "offsetx3": 55,
  "offsety3": -20,
  //"opacity2": 145,
  "offsetx4": 20,
  "offsety4": 20,
  "opacity1": 145,
  "angleStart": 0,
  "angleStop": 90,
  "size3": 120
}

const backgroundColor  = (227, 237, 237);
const strokeColor      = (255);

//const darkBlue  = "#199cff";
//const lightBlue  = "#e3eded";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(0);

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
  drawLetter(center_x - 400, center_y, letterA);
  drawLetter(center_x  -240, center_y, letterB);
  drawLetter(center_x - 80, center_y, letterC);
  drawLetter(center_x + 80, center_y, letterD);
  drawLetter(center_x + 240, center_y, letterE);
  drawLetter(center_x + 400, center_y, letterF);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let sizeTwo = letterData["size2"];
  let pos3x = posx + letterData["offsetx3"];
  let pos3y = posy + letterData["offsety3"];
  let sizeThree = letterData["size3"];
  let pos4x = posx + letterData["offsetx4"];
  let pos4y = posy + letterData["offsety4"];

  // let cutoutOpacity1 = letterData["opacity1"]
  let cutoutOpacity2 = letterData["opacity2"]

  let angleOne = letterData["angleStart"];
  let angleTwo = letterData["angleStop"];
  


  // draw two circles
  fill(191, 227, 183);  //green
  //fill(245, 179, 243);  //light pink
  ellipse(posx, posy, 150, 150);
  fill(255, 255, 255, 145)
  //fill(220, 168, 237, 145);  //purple
  ellipse(pos2x, pos2y, size, size);
  fill(255, 255, 255, 145)
  //fill(237, 203, 168, cutoutOpacity2);  //orange
  ellipse(pos3x, pos3y, sizeTwo, sizeTwo);
  //fill(255, 255, 168, 145)  //yellow
  fill(255, 255, 255, 145)
  arc(pos4x, pos4y, sizeThree, sizeThree, angleOne, angleTwo)


}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
