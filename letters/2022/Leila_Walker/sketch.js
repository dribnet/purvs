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
   "cntr_w":100,
   "cntr_h":100,
   "cntr_xpos": 0,
   "cntr_ypos": 0,
   "handle_h":140,
   "handle_w": 25,
   "handl_xpos": 63,
   "handl_ypos": 0,
   "mainSize": 150,
   "main_ypos": 250,
   "eyes_xpos": -20,
   "eyes_ypos": -20,
   "cutter_w": 110,
   "cutter_h": 110,
   "cutter_xpos": 0,
   "cutter_ypos": 0

 }

 const letterB = {
   "cntr_w":100,
   "cntr_h":100,
   "cntr_xpos": 0,
   "cntr_ypos": -1,
   "handle_h":270,
   "handle_w": 25,
   "handl_xpos": -65,
   "handl_ypos": -65,
   "mainSize": 150,
   "main_ypos": 250,
   "eyes_xpos": -20,
   "eyes_ypos": -20,
   "cutter_w": 110,
   "cutter_h": 110,
   "cutter_xpos": 0,
   "cutter_ypos": 0
 }

 const letterC = {
   "cntr_w":150,
   "cntr_h":110,
   "cntr_xpos": 15,
   "cntr_ypos": 0,
   "handle_h":140,
   "handle_w": 25,
   "handl_xpos": 50,
   "handl_ypos": 0,
   "mainSize": 150,
   "main_ypos": 250,
   "eyes_xpos": -10,
   "eyes_ypos": -20,
   "cutter_w": 150,
   "cutter_h": 110,
   "cutter_xpos": 15,
   "cutter_ypos": 0
 }

 const backgroundColor  = "#b8d9d4";//light green
  const strokeColor      = "#713191";//purple

  const purple  = "#713191";//purple
  const green = "#078774"; // green
  const lightBrown = "#91681c"; // light brown


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
  let eyesSize = 25;
  let eyesSpace = 40;

// determine parameters for other circles

  let cntrWidth = letterData["cntr_w"];
  let cntrHeight = letterData["cntr_h"];
  let handle_width = letterData["handle_w"];
  let handle_height = letterData["handle_h"];
  let cutterWidth = letterData["cutter_w"];
  let cutterHeight = letterData["cutter_h"];
   let ellMain_size = letterData["mainSize"];
  let ellMain_y = letterData["main_ypos"];
  let ell1_x = ell_x + letterData["cntr_xpos"];
  let ell1_y = ell_y + letterData["cntr_ypos"];
  let ell2_x = ell_x + letterData["handl_xpos"];
  let ell2_y = ell_y + letterData["handl_ypos"];
  let ell3_x = ell_x + letterData["eyes_xpos"];
  let ell3_y = ell_y + letterData["eyes_ypos"];
  let ell4_x = ell_x + letterData["cutter_xpos"];
  let ell4_y = ell_y + letterData["cutter_ypos"];






  // draw 6 circles/ovel
 let xPos = ell3_x - 5
 let yPos = ell3_y - 5
 noStroke();

 fill(purple);
 ellipse(ell_x, ellMain_y, ellMain_size, ellMain_size);// main Circle

 fill(backgroundColor);
 ellipse(ell1_x, ell1_y, cntrWidth, cntrHeight);// circle in midlle

 fill(purple);
 ellipse(ell2_x, ell2_y, handle_width, handle_height);//handle shape

 fill(backgroundColor);
 ellipse(ell4_x, ell4_y, cutterWidth, cutterHeight);// cutter

 /////// draw the cute eyes here://///
 fill(lightBrown);
 stroke(green);
 strokeWeight(4)
 ellipse(ell3_x, ell3_y, eyesSize);//left eye
 ellipse(ell3_x + eyesSpace, ell3_y, eyesSize);//right eye

 fill(50)
 noStroke();
 ellipse(ell3_x, ell3_y, eyesSize/2);// inside / left eye
 ellipse(ell3_x + eyesSpace, ell3_y, eyesSize/2);// inside / right eye

 fill(200)
 stroke(120,150);
 strokeWeight(2)
 ellipse(xPos+10, yPos, eyesSize/4);// inside / left eye
 ellipse(xPos + eyesSpace, yPos, eyesSize/4);// inside / right eye
 fill(200)
 noStroke();
 ellipse(xPos, yPos+10, eyesSize/6);// inside / left eye
 ellipse(xPos + eyesSpace, yPos+10, eyesSize/6);// inside / right eye



}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
