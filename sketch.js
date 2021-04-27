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
//   // 1triangle
//   "tx1":0,
//   "ty1": -100,
//   "tx2": 50,
//   "ty2":0,
//   "tx3": -50,
//   "ty3": 0,
//
// // 2rect
//   "rx1":30,
//   "ry1": 50,
//   "rw1":30,
//   "rh1":80,
//
//   "rx2":-30,
//   "ry2":50,
//   "rw2":30,
//   "rh2":80,
//
//   // 1arch
//   "ax1":0,
//   "ay1":0,
//   "aw1":100,
//   "ah1":100,
//   "angle1":180,
//   "angle2":0,

// 1triangle
"tx1":0,
"ty1": -100,
"tx2": 50,
"ty2":0,
"tx3": -50,
"ty3": 0,

// 2rect
"rx1":30,
"ry1": 50,
"rw1":30,
"rh1":80,

"rx2":-30,
"ry2":50,
"rw2":30,
"rh2":80,

// 1arch
"ax1":0,
"ay1":0,
"aw1":100,
"ah1":100,
"angle1":180,
"angle2":0,

// 2arch
"ax2":180,
"ay2":150,
"aw2":55,
"ah2":70,
"angle3":180,
"angle4":0,


}


const letterB = {
  // 1triangle
  "tx1":-5,
  "ty1": -80,
  "tx2": 55,
  "ty2":-40,
  "tx3": -5,
  "ty3": 0,

// 2rect
  "rx1":-35,
  "ry1": -40,
  "rw1":25,
  "rh1":90,

  "rx2":-35,
  "ry2":50,
  "rw2":25,
  "rh2":90,

  // 1arch
  "ax1":-5,
  "ay1":50,
  "aw1":120,
  "ah1":80,
  "angle1":270,
  "angle2":90,

  // 2arch
  "ax2":425,
  "ay2":200,
  "aw2":80,
  "ah2":60,
  "angle3":270,
  "angle4":90,

}

const letterC = {
  // 1triangle
  "tx1":47,
  "ty1": -80,
  "tx2": 47,
  "ty2":80,
  "tx3": -50,
  "ty3": 0,

  // 2rect
    "rx1":30,
    "ry1": -40,
    "rw1":25,
    "rh1":25,

    "rx2":30,
    "ry2":-20,
    "rw2":25,
    "rh2":25,

  // 1arch
  "ax1":38,
  "ay1":0,
  "aw1":190,
  "ah1":167,
  "angle1":90,
  "angle2":270,

}

const colorFront1  = "#480099";  //purple
const colorFront2  = "#e8c70c";  //yellow
const colorFront3  = "#ba6900";  //
const colorBack    = "#e3eded";
const colorStroke  = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  // color/stroke setup
  // stroke(colorStroke);
  // strokeWeight(1);
 noStroke();
 angleMode(DEGREES);
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy,letterData) {
  // determine parameters for second circle

  let tposx1 = posx+ letterData["tx1"];
  let tposy1 = posy+ letterData["ty1"];
  let tposx2 = posx + letterData["tx2"];
  let tposy2 = posy + letterData["ty2"];
  let tposx3 = posx + letterData["tx3"];
  let tposy3 = posy + letterData["ty3"];

  let rposx1 = posx + letterData["rx1"];
  let rposy1 = posy + letterData["ry1"];
  let rposx2 = posx + letterData["rx2"];
  let rposy2 = posy + letterData["ry2"];
  let rsizex1 = letterData["rw1"];
  let rsizey1 = letterData["rh1"];
  let rsizex2 = letterData["rw2"];
  let rsizey2 = letterData["rh2"];

  let arcx1 = posx+ letterData["ax1"]
  let arcy1 = posy+ letterData["ay1"];
  let arcSize1 = letterData["aw1"];
  let arcSize2 = letterData["ah1"];
  let angle1 = letterData["angle1"]
  let angle2 = letterData["angle2"]

  let arcx2 = 50+ letterData["ax2"]
  let arcy2 = 100+ letterData["ay2"];
  let arcSize3 = letterData["aw2"];
  let arcSize4 = letterData["ah2"];
  let angle3 = letterData["angle3"]
  let angle4 = letterData["angle4"]
  rectMode(CENTER)

  fill(202,227,226,150)
  rect(posx,posy,140,220,25)

  fill(144,177,170)
  rect(rposx1, rposy1, rsizex1, rsizey1);

  fill(253,177,57)
  rect(rposx2, rposy2, rsizex2, rsizey2);

  fill(239,102,72);
  triangle(tposx1,tposy1,tposx2,tposy2,tposx3,tposy3);

  fill(72,126,207);
  arc(arcx2,arcy2,arcSize3,arcSize4,angle3,angle4);

  fill(65,82,164,155);
  arc(arcx1,arcy1,arcSize1,arcSize2,angle1,angle2);


}

function draw () {
  // clear screen
  background(255,280,230);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
  // drawLetter(center_x       , center_y LetterD);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
