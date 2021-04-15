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
  "arcX": 100,
  "arcY": 80,
  "arcS": 90,
  "arcStart": 0,
  "arcEnd": 360,
  "triX": 100,
  "triY": 120,
  "triR": 270,
  "triH": 35,
  "triW": 20,
   "lineX": 70,
  "lineY": 120,
}

 const letterB = { 
  "arcX": 400,
  "arcY": 200,
  "arcS": 90,
  "arcStart": 0,
  "arcEnd": 360,
  "triX": 400,
  "triY": 220,
  "triR": 60,
  "triH": 20,
  "triW": 20,
  "lineX": 200,
  "lineY": 200,
}


const backgroundColor  = "#000000";
const strokeColor      = "#ffffff";

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
  noFill(); 
  // clear screen
  background(backgroundColor);
angleMode(DEGREES);
  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(0, 0, letterA);
   drawLetter(0, 0, letterB);

}

function drawLetter(posx, posy, letterData) {
  // // determine parameters for second circle
  let arcX = letterData["arcX"];
  let arcY = letterData["arcY"];
  let arcS = posx + letterData["arcS"];
  let arcStart = letterData["arcStart"];
  let arcEnd =letterData["arcEnd"];
  let triX = letterData["triX"];
  let triY = letterData["triY"];
  let triR = letterData["triR"];
  let triH = letterData["triH"];
  let triW = letterData["triW"];
  let lineX = letterData["lineX"];
  let lineY = letterData["lineY"];
  push();

stroke("#ff1178");
arc(arcX, arcY, arcS, arcS, arcStart, arcEnd, PIE);

// original code taken from Programming Design Systems chapter 5 Procedural Shapes
var numVertices = 3; // or 4 or 30
const spacing = 360 / numVertices;
stroke("#01fff4");
push();
translate(triX,triY); 
rotate(triR);
beginShape();
for(let i = 0; i <= numVertices; i++) {
  const x = cos((i * spacing)) * triH;
  const y = sin((i * spacing)) * triW;
  vertex(x, y);
}
endShape();
pop();

push();
stroke("#fff205");
//strokeCap(SQUARE);
translate(lineX, lineY);


beginShape();
let wave = lineX * 3 
let lineS = lineX / 10;
for(let i = 0; i < wave; i++) {
  const x = i * 2;
  const y = sin(i * 2) * 100;
  vertex(x/lineS, y/lineS);
}
endShape();
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
