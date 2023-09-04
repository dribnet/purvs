const canvasWidth = 960;
const canvasHeight = 500;


const letterA = {
  "size": 40, //30
  "offsetx": 50,
  "offsety": 5
}

const letterB = {
  "size": 65, //150,
  "offsetx": 0, //20,
  "offsety": -20//-145
}

const letterC = {
  "size": 20,
  "offsetx": 49,
  "offsety": 15

}

const backgroundColor  = "#fddeef";  //hexcolortool.com/fddeef  //#caf0f8
const strokeColor      = "#24473a"//"#550632"; //(burgundy)

//const darkBlue  = "#0077b6";
const pink  = "#d572b5"; //https://www.hexcolortool.com/#d572b5  //"#90e0ef";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(5); //4

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
  drawLetter(center_x - 200, center_y, letterA); //250
  drawLetter(center_x - 50, center_y, letterB);
  drawLetter(center_x + 100, center_y, letterC); //250
}

function drawLetter(posx, posy, letterData) {
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];


  //draw two circles
  // fill(255, 10, 177); //darkBlue
  // ellipse(posx, posy, 150, 150);
  //
  // fill(pink);
  // ellipse(pos2x, pos2y, size2, size2);

  //stroke(36, 71, 58, 1);
  line(pos2x, pos2y+size2, pos2x, pos2y);
  //line(pos2x+100, pos2y+size2, pos2x+100, pos2y-30);
  //line(pos2x+300, pos2y+size2, pos2x+300, pos2y+10);

  //stroke(230, 20, 100);
  fill (255,40); //(pink);
  rect(posx, posy, 50, 50, 20, 20, 20, 20);

  push();
  noStroke();
  fill (backgroundColor);
  rect(posx+30, posy+15, 50-size2, 20, 20, 20, 20, 20);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
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
// determine parameters for second circle

// draw two circles
// fill(255, 10, 177); //darkBlue
// ellipse(posx, posy, 150, 150);
// fill(lightBlue);
// ellipse(pos2x, pos2y, size2, size2);
