const canvasWidth = 960; //setting up canvas width to equal 960
const canvasHeight = 500; //setting up canvas height to equal 500

//my 14 paramters per letter
//letter  A
const letterA = {
  "offsetx": 17, //x position for first rect (white fill)
  "offsety": 0, //y position for first rect (white fill)
  "rectlength": 28, //first rect length (white fill)
  "rectheight": 90, //first rect height (white fill)
  "nofill_length": 20, //second rect length (red stroke)
  "nofill_height": 82, //second rect height (red stroke)
  "rect_twoposx": 55, //x position for second rect (red stroke)
  "rect_twoposy": 4, //y position for second rect (red stroke)
  "triangleleftx": 188, //triangle first point for x
  "trianglelefty": 270, //triangle first point for y
  "triangletopx": 228, //triangle second point for x
  "triangletopy": 198, //triangle second point for y
  "trianglerightx": 266, //triangle third point for x
  "trianglerighty": 270, //triangle third point for y
}

//letter B
const letterB = {
  "offsetx": 32, //x position for first rect (white fill)
  "offsety": 52, //y position for first rect (white fill)
  "rectlength": 70, //first rect length (white fill)
  "rectheight": 37, //first rect height (white fill)
  "nofill_length": 62, //second rect length (red stroke)
  "nofill_height": 36, //second rect height (red stroke)
  "rect_twoposx": 27, //x position for second rect (red stroke)
  "rect_twoposy": 2, //y position for second rect (red stroke)
  "triangleleftx": 465, //triangle first point for x
  "trianglelefty": 270, //triangle first point for y
  "triangletopx": 465, //triangle second point for x
  "triangletopy": 198, //triangle second point for y
  "trianglerightx": 525, //triangle third point for x
  "trianglerighty": 235, //triangle third point for y
}

//letter C 
const letterC = {
  "offsetx": 56, //x position for first rect (white fill)
  "offsety": 1, //y position for first rect (white fill)
  "rectlength": 60, //first rect length (white fill)
  "rectheight": 90, //first rect height (white fill)
  "nofill_length": 64, //second rect length (red stroke)
  "nofill_height": 50, //second rect height (red stroke)
  "rect_twoposx": 58, //x position for second rect (red stroke)
  "rect_twoposy": 22, //y position for second rect (red stroke)
  "triangleleftx": 803, //triangle first point for x
  "trianglelefty": 275, //triangle first point for y
  "triangletopx": 803, //triangle second point for x
  "triangletopy": 198, //triangle second point for y
  "trianglerightx": 742, //triangle third point for x
  "trianglerighty": 235, //triangle third point for y
}

const colorFront1  = "#75cc0a50"; //green  colour with opacity
const colorFront2  = "#ccd9deFA"; //white with opacity
const colorBack    = "#242424"; //bg colour (dark gray)
const colorStroke  = "#0f0f0f80"; //stroke colour

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color and stroke setup
  stroke(colorStroke);
  strokeWeight(8);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  //setting up my 14 parameters
  let rectwidth = letterData["rectlength"];
  let recthigh = letterData["rectheight"];
  let rectwidth_two = letterData["nofill_length"];
  let recthigh_two = letterData["nofill_height"];
  let rect_twox = posx + letterData["rect_twoposx"];
  let rect_twoy = posy + letterData["rect_twoposy"];
  let tri_onex = letterData["triangleleftx"];
  let tri_twox = letterData["triangletopx"];
  let tri_threex = letterData["trianglerightx"];
  let tri_oney = letterData["trianglelefty"];
  let tri_twoy = letterData["triangletopy"];
  let tri_threey = letterData["trianglerighty"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  //draws the shapes for my letters
  noStroke(); //remvoing stroke from first rect
  fill(colorFront1); //filling with green
  rect(pos2x, pos2y, rectwidth, recthigh); //calling variables
  stroke(colorFront2); //setting up stroke again from the second rect
  strokeWeight(8);
  noFill(); //no fill for this rect
  rect(rect_twox, rect_twoy, rectwidth_two, recthigh_two); //calling variables
  stroke(colorStroke);
  fill(colorBack);
  triangle(tri_onex, tri_oney, tri_twox, tri_twoy, tri_threex, tri_threey); //drawing triangle
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2 - 50;  
  let center_y = canvasHeight / 2 - 60;

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
