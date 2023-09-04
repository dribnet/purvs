const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my variables per letter are:
 *
 line_x1 = x position for starting point of line
 line_y1 = y position for starting point of line
 line_x2	= x position for end point of line
 line_y2	= y position for end point of line
 arc1_posx = x position for first arc
 arc1_posy = y position for first arc
 arc2_posx = x position for second arc
 arc2_posy = y position for second arc
 start_a1 = start angle for arc 1
 start_a2 = start angle for arc 2
 circ1_offset_x = offset x position for circle 1
 circ1_offset_y = offset y position for circle 1
 circ2_offset_x = offset x position for circle 2
 circ2_offset_y = offset y position for circle 2
 */


const letterA = {
  "line_x1": 305,
  "line_x2": 305,
  "line_y1": 200,
  "line_y2": 390,
  "arc1_posx": 195,
  "arc1_posy": 300,
  "arc2_posx": 195,
  "arc2_posy": 280,
  "start_a1": 0,
  "start_a2": 180,
  "circ1_offset_x": 195,
  "circ1_offset_y": 290,
  "circ2_offset_x": 195,
  "circ2_offset_y": 290
}

const letterB = {
  "line_x1": 380,
  "line_x2": 380,
  "line_y1": 50,
  "line_y2": 390,
  "arc1_posx": 495,
  "arc1_posy": 300,
  "arc2_posx": 495,
  "arc2_posy": 280,
  "start_a1": 0,
  "start_a2": 180,
  "circ1_offset_x": 495,
  "circ1_offset_y": 290,
  "circ2_offset_x": 495,
  "circ2_offset_y": 290
}

const letterC = {
  "line_x1": 760,
  "line_x2": 760,
  "line_y1": 180,
  "line_y2": 400,
  "arc1_posx": 760,
  "arc1_posy": 300,
  "arc2_posx": 760,
  "arc2_posy": 280,
  "start_a1": 10,
  "start_a2": 170,
  "circ1_offset_x": 855,
  "circ1_offset_y": 245,
  "circ2_offset_x": 855,
  "circ2_offset_y": 335
}


const colorBack    = "#d8b786";
const colorStroke  = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  angleMode(DEGREES);
  //Constants
  let arc_w = 200; //Constant width for arc
  let arc_h = 200; //Constant height for arc
  let circ_w = 40; //Constant width for circles
  let circ_h = 40; //Constant height for circles
  //Parameters
  let line_x1 = letterData["line_x1"]; //Starting X position
  let line_x2 = letterData["line_x2"]; //End X position
  let line_y1 = letterData["line_y1"]; //Starting Y position
  let line_y2 = letterData["line_y2"]; //End Y position
  // //Parameters for arcs
  let arc1_x = letterData["arc1_posx"]; //X position for first arc
  let arc1_y = letterData["arc1_posy"]; //Y position for first arc
  let arc2_x = letterData["arc2_posx"]; //X position for second arc
  let arc2_y = letterData["arc2_posy"]; //Y position for second arc
  let arc1_start = letterData["start_a1"]; //Start angle for first arc in degrees
  let arc2_start = letterData["start_a2"]; //Start angle for second arc in degrees
  // //Parameters for circles
  let circ1_x = letterData["circ1_offset_x"]; //X position (offset) for first circle
  let circ1_y = letterData["circ1_offset_y"]; //Y position (offset) for first circle
  let circ2_x = letterData["circ2_offset_x"]; //X position (offset) for second circle
  let circ2_y = letterData["circ2_offset_y"]; //Y position (offset) for second circle

  noFill();
  // draw line
  line(line_x1,line_y1,line_x2,line_y2);
  // draw arcs
  arc(arc1_x, arc1_y, arc_w, arc_h, arc1_start, arc1_start+180);
  arc(arc2_x, arc2_y, arc_w, arc_h, arc2_start, arc2_start+180);
  // draw two circles
  ellipse(circ1_x, circ1_y, circ_w, circ_h);
  ellipse(circ2_x, circ2_y, circ_w, circ_h);
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
