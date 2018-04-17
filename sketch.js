const canvasWidth = 960;
const canvasHeight = 500;

//There are 6 variables per letter. There are two triangles to a letter, and each triangle 
//has an offset for the x (offset1 & 3) and y values (offset2 & 4) as well as a rotation 
// value to position each triangle. 

const letterA = {
  "offset1": 0,
  "offset2": 100,
  "offset3": -62,
  "offset4": -43,
  "rotate1": 0,
  "rotate2": 240
}


const letterB = {
  "offset1": 20,
  "offset2": 0,
  "offset3": -20,
  "offset4": 0,
  "rotate1": 90,
  "rotate2": 90
}

const letterC = {
  "offset1": 20,
  "offset2": 0,
  "offset3": 0,
  "offset4": 0,
  "rotate1": 270,
  "rotate2": 270
}
 

const colorBack   = "#E7FDF7";
const colorStroke = "#FF84BC";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // stroke setup
  noFill();
  stroke(colorStroke);
  strokeWeight(4);
  angleMode(DEGREES)

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  let offset1 = letterData["offset1"]
  let offset2 = letterData["offset2"]
  let offset3 = letterData["offset3"]
  let offset4 = letterData["offset4"]
  let rot1 = letterData["rotate1"];
  let rot2 = letterData["rotate2"];


//draw two triangles with seperate rotation ability, collective and individual push 
//and pops to position correctly
 
push();

  translate(posx, posy);

  push();

//draw three lines, two on adjacent sides of the first triangle, and one on the first side
//of the second triangle
strokeWeight(6);

//double line 1 tri 1
push();
rotate(rot1);
line(offset1-50, offset2+34.6, offset1, offset2-48);
pop();

//double line 2 tri 1
push();
rotate(rot1);
line(offset1, offset2-48, offset1+50, offset2+34.6);
pop();

//single line tri 2
push();
rotate(rot2);
line(offset3-50, offset4+34.6, offset3, offset4-48);
pop();
pop();

strokeWeight(3);
push();
  pop();

  push();

  rotate(rot1);
  triangle(offset1-50, offset2+36.6, offset1, offset2-50, offset1+50, offset2+36.6);

  pop();

  push();

  rotate(rot2);  
  triangle(offset3-50, offset4+36.6, offset3, offset4-50, offset3+50, offset4+36.6);

  pop();

  pop();

}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y-80, 10, letterA);
  drawLetter(center_x, center_y-10, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
