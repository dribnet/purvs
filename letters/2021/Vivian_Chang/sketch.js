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
  "arcX": 200,
  "arcY": 200,
  "arcStart": 0,
  "arcEnd": 360,
  "triX": 200,
  "triY": 250,
  "triR": 270,
  "triH": 35,
  "triW": 20,
   "lineX": 170,
  "lineY": 240,
   "lineR": 0,
   "wave": 360,
   "waveH": 12,

}

 const letterB = { 
  "arcX": 400,
  "arcY": 200,
  "arcStart": 320,
  "arcEnd": 40,
  "triX": 420,
  "triY": 250,
  "triR": 60,
  "triH": 20,
  "triW": 20,
  "lineX": 380,
  "lineY": 170,
  "lineR": 90,
  "wave": 600,
  "waveH": 12,
}

 const letterC = { 
  "arcX": 600,
  "arcY": 200,
  "arcStart": 80,
  "arcEnd": 320,
  "triX": 620,
  "triY": 250,
  "triR": 100,
  "triH": 0,
  "triW": 30,
  "lineX": 570,
  "lineY": 210,
  "lineR": 40,
  "wave": 400,
  "waveH": 12,
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
drawLetter(0, 0, letterC);
}

function drawLetter(posx, posy, letterData) {
  // // determine parameters for second circle
  let arcX = letterData["arcX"];
  let arcY = letterData["arcY"];
  //let arcS =  letterData["arcS"];
  let arcStart = letterData["arcStart"];
  let arcEnd =letterData["arcEnd"];
  let triX = letterData["triX"];
  let triY = letterData["triY"];
  let triR = letterData["triR"];
  let triH = letterData["triH"];
  let triW = letterData["triW"];
  let lineX = letterData["lineX"];
  let lineY = letterData["lineY"];
  let lineR = letterData["lineR"];
  let wave = letterData["wave"];
  let waveH = letterData["waveH"];
  push();

stroke("#ff1178");
arc(arcX, arcY, 90, 90, arcStart, arcEnd, PIE);

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
rotate(lineR);

beginShape();

for(let i = 0; i < wave; i++) {
  const x = i * 2;
  const y = sin(i * 2) * 100;
  vertex(x/waveH, y/14);
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
