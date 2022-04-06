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
  "cntrSize_x":100,
  "cntrSize_y":100,
  "handleSize_x":30,
  "handleSize_y":140,
  "eyeSize":25,
  "locCntr_x": 0,
  "locCntr_y": 0,
  "locHandl_x": 60,
  "locHandl_y": 0,
  "locEye_x": -23,
  "locEye_y": -20,
}

const letterB = {
  "cntrSize_x":100,
  "cntrSize_y":100,
  "handleSize_x":30,
  "handleSize_y":250,
  "eyeSize":25,
  "locCntr_x": 0,
  "locCntr_y": -1,
  "locHandl_x": -65,
  "locHandl_y": -50,
  "locEye_x": -23,
  "locEye_y": -20,
}

const letterC = {
  "handleSize_x":30,
  "handleSize_y":140,
  "cntrSize_x":130,
  "cntrSize_y":110,
  "eyeSize":25,
  "locHandl_x": 50,
  "locHandl_y": 0,
  "locCntr_x": 20,
  "locCntr_y": 0,
  "locEye_x": -10,
  "locEye_y": -20,
}

const backgroundColor  = "#ccecec";//light blue
const strokeColor      = "#c4c6c0";//gray

const peach  = "#f7cabe";// peach
const lightBlue  = "#ccecec";//"#90e0ef";//light blue
const darkGreen = "#014d4a"

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
  drawLetter(center_x      , center_y , letterB);
  drawLetter(center_x + 250, center_y , letterC);
}

function drawLetter(ell_x, ell_y, letterData) {
  // determine parameters for other circles

  let cntrSize_x = letterData["cntrSize_x"];
  let cntrSize_y = letterData["cntrSize_y"];
  let handleSize_x = letterData["handleSize_x"];
  let handleSize_y = letterData["handleSize_y"];
  let eyeSize = letterData["eyeSize"];
  let cutSize_x = letterData["cutSize_x"];
  let cutSize_y = letterData["cutSize_y"];
  let ell1_x = ell_x + letterData["locCntr_x"];
  let ell1_y = ell_y + letterData["locCntr_y"];
  let ell2_x = ell_x + letterData["locHandl_x"];
  let ell2_y = ell_y + letterData["locHandl_y"];
  let ell3_x = ell_x + letterData["locEye_x"];
  let ell3_y = ell_y + letterData["locEye_y"];
  let ell4_x = ell_x + letterData["loc4X"];
  let ell4_y = ell_y + letterData["loc4Y"];



  // draw 6 circles/ovel
  noStroke();
  fill(peach);
  ellipse(ell2_x, ell2_y, handleSize_x, handleSize_y);//handle shape
  fill(peach);
  ellipse(ell_x, ell_y, 150, 150);//main Circle
  fill(lightBlue);
  ellipse(ell1_x, ell1_y, cntrSize_x, cntrSize_y);// circle in midlle
  fill(lightBlue);
  ellipse(ell4_x, ell4_y, cutSize_x, cutSize_y);// cutter
  fill(darkGreen);
  ellipse(ell3_x, ell3_y, eyeSize);//left eye
  ellipse(ell3_x + 50, ell3_y, eyeSize);//right eye

}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
