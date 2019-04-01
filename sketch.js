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

//  const LETTA_A = {
//   shapes: [
//     {
//       x: [ -67, -103, 0, 103, 67, 0, -67 ],
//       y: [ 69, 31, -127, 31, 69, 0, 69 ],
//       col: "#199cff"
//     },
//     {
//       x: [ -67, 67, 0, -67 ],
//       y: [ 69, 69, 0, 69 ],
//       col: "#FFFFFF"
//     },
//   ]
// }

// const LETTA_B = {
//   shapes: [
//     {
//       x: [ -78, -78, 14, 78, 14, 78, 14,-78 ],
//       y: [ 98, -98, -98, -49, 0, 49, 98,98],
//       col: "#199cff"
//     },
//     {
//       x: [78, 78, 14, 78],
//       y: [ -49, 49, 0, -49 ],
//       col: "#FFFFFF"
//     },
//   ]
// }

// const LETTA_C = {
//   shapes: [
//     {
//       x: [ 93-181, 93-181, 127-181, 249-181, 249-181, 127-181, 93-181],
//       y: [ 305-256, 207-256, 158-256, 158-256, 354-256, 354-256,305-256],
//       col: "#199cff"
//     },
//     {
//       x: [ 249-181, 249-181, 127-181, 249-181 ],
//       y: [ 158-256, 354-256, 256-256, 158-256 ],
//       col: "#FFFFFF"
//     },
//   ]
// }

const letterA = {
  "posx1":-67,    
  "posx2":-103,
  "posx3":0,
  "posx4":103,
  "posx5":67,
  "posx6":0,
  "posx7":0,

  "triposx1":-67,
  "triposx2":67,
  "triposx3":0,

  "posy1":99,
  "posy2":61,
  "posy3":-97,
  "posy4":61,
  "posy5":99,
  "posy6":30,

  "triposy1":99,
  "triposy2":99,
  "triposy3":30,
  
}

const letterB = {
  "posx1":-78,
  "posx2":-78,
  "posx3":14,
  "posx4":78,
  "posx5":14,
  "posx6":78,
  "posx7":14,

  "triposx1":78,
  "triposx2":14,
  "triposx3":78,


  "posy1":98,
  "posy2":-98,
  "posy3":-98,
  "posy4":-49,
  "posy5":0,
  "posy6":49,
  "posy7":98,

  "triposy1":-49,
  "triposy2":0,
  "triposy3":49,
}

const letterC = {
  "posx1":-88,
  "posx2":-88,
  "posx3":-54,
  "posx4":68,
  "posx5":-54,
  "posx6":68,
  "posx7":-54,

  "triposx1":68,
  "triposx2":-54,
  "triposx3":68,

  "posy1":49,
  "posy2":-49,
  "posy3":-98,
  "posy4":-98,
  "posy5":0,
  "posy6":98,
  "posy7":98,

  "triposy1":-98,
  "triposy2":0,
  "triposy3":98,
}

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#ffb2c3";
const colorStroke  = "#FF69B4";
const PaperColor   = "#07c9ff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(0);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}


function drawLetter(posx, posy, letterData ) {
  // determine parameters for second circle

  let posx1 = posx + letterData["posx1"];
  let posx2 = posx + letterData["posx2"];
  let posx3 = posx + letterData["posx3"];
  let posx4 = posx + letterData["posx4"];
  let posx5 = posx + letterData["posx5"];
  let posx6 = posx + letterData["posx6"];
  let posx7 = posx + letterData["posx7"];

  let posy1 = posy + letterData["posy1"];
  let posy2 = posy + letterData["posy2"];
  let posy3 = posy + letterData["posy3"];
  let posy4 = posy + letterData["posy4"];
  let posy5 = posy + letterData["posy5"];
  let posy6 = posy + letterData["posy6"];
  let posy7 = posy + letterData["posy7"];

  let triposx1 = posx + letterData["triposx1"];
  let triposx2 = posx + letterData["triposx2"];
  let triposx3 = posx + letterData["triposx3"];

  let triposy1 = posy + letterData["triposy1"];
  let triposy2 = posy + letterData["triposy2"];
  let triposy3 = posy + letterData["triposy3"];



fill(PaperColor);
beginShape();
vertex(posx1, posy1);
vertex(posx2, posy2);
vertex(posx3, posy3);
vertex(posx4, posy4);
vertex(posx5, posy5);
vertex(posx6, posy6);
vertex(posx7, posy7);
endShape(CLOSE);

fill(255);
triangle(triposx1,triposy1,triposx2,triposy2,triposx3,triposy3);

  
  }

function draw () {
  // clear screen
  background(colorBack);



  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight/ 2;

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
