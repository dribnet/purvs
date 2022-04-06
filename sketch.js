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
   "locCntr_x": 0,
   "locCntr_y": 0,
   "handleHeight":140,
   "locHandl_x": 63,
   "locHandl_y": 0,
   "eyeSize":25,
   "locEye_x": -20,
   "locEye_y": -20,
   "eyesSpace": 40,
   "cutSize_x": 110,
   "cutSize_y": 110,
   "locCut_x": 0,
   "locCut_y": 0

 }

 const letterB = {
   "cntrSize_x":100,
   "cntrSize_y":100,
   "locCntr_x": 0,
   "locCntr_y": -1,
   "handleHeight":250,
   "locHandl_x": -65,
   "locHandl_y": -50,
   "eyeSize":25,
   "locEye_x": -20,
   "locEye_y": -20,
   "eyesSpace": 40,
   "cutSize_x": 110,
   "cutSize_y": 110,
   "locCut_x": 0,
   "locCut_y": 0
 }

 const letterC = {
   "cntrSize_x":130,
   "cntrSize_y":110,
   "locCntr_x": 20,
   "locCntr_y": 0,
   "handleHeight":140,
   "locHandl_x": 50,
   "locHandl_y": 0,
   "eyeSize":25,
   "locEye_x": -10,
   "locEye_y": -20,
   "eyesSpace": 40,
   "cutSize_x": 110,
   "cutSize_y": 110,
   "locCut_x": 0,
   "locCut_y": 0
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

  let handleWidth = 25// width of handle
// determine parameters for other circles
  let cntrSize_x = letterData["cntrSize_x"];
  let cntrSize_y = letterData["cntrSize_y"];
  let handleHeight = letterData["handleHeight"];
  let eyeSize = letterData["eyeSize"];
  let cutSize_x = letterData["cutSize_x"];
  let cutSize_y = letterData["cutSize_y"];
  let ell1_x = ell_x + letterData["locCntr_x"];
  let ell1_y = ell_y + letterData["locCntr_y"];
  let ell2_x = ell_x + letterData["locHandl_x"];
  let ell2_y = ell_y + letterData["locHandl_y"];
  let ell3_x = ell_x + letterData["locEye_x"];
  let ell3_y = ell_y + letterData["locEye_y"];
  let ell4_x = ell_x + letterData["locCut_x"];
  let ell4_y = ell_y + letterData["locCut_y"];
  let eyesSpace = letterData["eyesSpace"];



  // draw 6 circles/ovel
  noStroke();
 fill(peach);
 ellipse(ell2_x, ell2_y, handleWidth, handleHeight);//handle shape
 fill(peach);
 ellipse(ell_x, ell_y, 150, 150);//main Circle
 fill(lightBlue);
 ellipse(ell1_x, ell1_y, cntrSize_x, cntrSize_y);// circle in midlle
 fill(lightBlue);
 ellipse(ell4_x, ell4_y, cutSize_x, cutSize_y);// cutter
 fill(darkGreen);
 ellipse(ell3_x, ell3_y, eyeSize);//left eye
 ellipse(ell3_x + eyesSpace, ell3_y, eyeSize);//right eye

}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
