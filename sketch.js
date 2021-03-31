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
  
  "offsetx": 50,
  "offsety": 90,
  "Rwidth": 30,
  "Rheight": 50,
  "size": 30,
  "CircleX": 65,
  "CircleY": 140,
}

const letterB = {
"offsetx": 200,
  "offsety": 90,
  "Rwidth": 30,
  "Rheight": 50,
  "size": 30,
  "CircleX": 240,
  "CircleY": 140,

}

const letterC = {
"offsetx": 350,
  "offsety": 90,
  "Rwidth": 30,
  "Rheight": 50,
  "size": 50,
  "CircleX": 345,
  "CircleY": 140,

}

const backgroundColor  = "#dfd5e3";
const strokeColor      = "#233f11";

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
   noStroke();
  // // determine parameters for second circle
  let RecX = letterData["Rwidth"];
  let Recy = letterData["Rheight"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let CircleX =letterData["CircleX"];
  let CircleY = letterData["CircleY"];
  let CircleS = letterData["size"];
     fill("#ba7599");
  // ellipse(posx, posy, 150, 150);
   
  // arc(pos2x, pos2y, size2, size2, angleS, angleE);

rect(80,90, 40, 20);
   fill("#9c4887");
arc(100, 80, 80, 80, 420, 120);



fill("#ba7599");

// original code taken from Programming Design Systems chapter 5 Procedural Shapes
var numVertices = 3; // or 4 or 30
const spacing = 360 / numVertices;
push();
translate(100,100);
rotate(30);
beginShape();
for(let i = 0; i <= numVertices; i++) {
  const x = cos((i * spacing)) * 10;
  const y = sin((i * spacing)) * 10;
  vertex(x, y);
}
endShape();
  pop()
  // // draw two circles




  // ellipse(CircleX, CircleY-50, CircleS);
  // ellipse(CircleX, CircleY, CircleS);
  // fill("#ba7599");
  // beginShape();
  // vertex(65, 95);
  // vertex(35, 130);
  // vertex(95, 130);
  // endShape();


  
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
