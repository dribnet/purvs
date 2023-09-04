const canvasWidth = 960;
const canvasHeight = 500;

/*There are 6 parameters per letter. Each letter is made up of two triangles. The first
triangle has two sides with a heavy weight line, each of the lines and the triangle are 
moved using the tri1X, tri1Y and rotate1. The second triangle has one side with a heavy weight line, 
both of which are controlled by tri2X, tri2Y and rotate 2.  
*/


//Draw letters A, B and C 

const letterA = {
  "tri1X": 0,
  "tri1Y": 100,
  "tri2X": -62,
  "tri2Y": -43,
  "rotate1": 0,
  "rotate2": 240
}


const letterB = {
  "tri1X": 20,
  "tri1Y": 0,
  "tri2X": -20,
  "tri2Y": 0,
  "rotate1": 90,
  "rotate2": 90
}

const letterC = {
  "tri1X": 20,
  "tri1Y": 0,
  "tri2X": 0,
  "tri2Y": 0,
  "rotate1": 270,
  "rotate2": 270
}
 
//background colour
const colorBack   = "#E7FDF7"; //duck egg blue
//stroke colour
const colorStroke = "#FF84BC"; //pink


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  //stroke setup
  noFill();
  stroke(colorStroke);
  angleMode(DEGREES)

  // with no animation, redrawing the screen is not necessary
  noLoop(); 
}

//set variables for the x, y and rotation of each triangle
function drawLetter(posx, posy, scale, letterData) {
  let tri1X = letterData["tri1X"]
  let tri1Y = letterData["tri1Y"]
  let tri2X = letterData["tri2X"]
  let tri2Y = letterData["tri2Y"]
  let rot1 = letterData["rotate1"];
  let rot2 = letterData["rotate2"];


//draw two triangles with seperate rotation ability, collective and individual push and pops to position correctly
//draw three lines, two on adjacent sides of the first triangle, and one on the first side of the second triangle

  push();

    translate(posx, posy);

    push();
      strokeWeight(6);

//double line 1 tri 1
      push();
        rotate(rot1);
        line(tri1X-50, tri1Y+34.6, tri1X, tri1Y-48);
      pop();

//double line 2 tri 1
      push();
        rotate(rot1);
        line(tri1X, tri1Y-48, tri1X+50, tri1Y+34.6);
      pop();

//single line tri 2
      push();
        rotate(rot2);
        line(tri2X-50, tri2Y+34.6, tri2X, tri2Y-48);
      pop();

    pop();


//create triangles 1 and 2

   
//tri1
      push();
        strokeWeight(2);
        rotate(rot1);
        triangle(tri1X-50, tri1Y+36.6, tri1X, tri1Y-50, tri1X+50, tri1Y+36.6);
      pop();

//tri2   
      push();
        strokeWeight(2);
        rotate(rot2);  
        triangle(tri2X-50, tri2Y+36.6, tri2X, tri2Y-50, tri2X+50, tri2Y+36.6);
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
