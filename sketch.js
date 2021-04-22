const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "points": [3, 6, 1, 4, 4]
}

const letterB = {
  "points": [4, 0, 6, 2, 0]
}

const letterC = {
  "points": [2, 4, 6, 6, 6]
}

const backgroundColor  = "#000000";
const strokeColor      = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);
  main_canvas.parent('canvasContainer');

  // clear screen
  background(backgroundColor);

  // color/stroke setup
  stroke(strokeColor);

  // // draw background stars
  // for (let i = 0; i < 600; i++) {
  //   strokeWeight(random(1, 4));
  //   point(random(width), random(height));
  // }

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  translate(-width/2,-height/2,0);
  orbitControl(1, 0, 0);

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  let radius = 100;

  // draw points around the circle
  stroke(255);
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 5; j++) {
      if (letterData["points"][j] == i) {
        strokeWeight(8);
      } else {
        strokeWeight(random(1, 4));
      }

    }
  }

  strokeWeight(2);
  for (let i = 0; i < 5; i++) {
    let lineStartX = radius * cos(letterData["points"][i] * PI/4) + posx;
    let lineStartY = radius * sin(letterData["points"][i] * PI/4) + posy;

    let lineEndX = radius * cos(letterData["points"][i+1] * PI/4) + posx;
    let lineEndY = radius * sin(letterData["points"][i+1] * PI/4) + posy;

    let lineVector = createVector(lineEndX - lineStartX, lineEndY - lineStartY); // Get the vector for the current line segment

    stroke(255);
    line(lineStartX, lineStartY, lineStartX + lineVector.x, lineStartY + lineVector.y);
    point(radius * cos(i * PI/4) + posx, radius * sin(i * PI/4) + posy);

    stroke(255, 0, 0);
    noFill();
    beginShape();
    // for (let i = 1; i >= -1; i-=2) {
    //   let perpVector = lineVector.copy().rotate(i * HALF_PI).setMag(20);
    //   vertex(lineStartX + perpVector.x, lineStartY + perpVector.y);
    // }
    // for (let i = -1; i <= 1; i+=2) {
    //   let perpVector = lineVector.copy().rotate(i * HALF_PI).setMag(20);
    //   vertex(lineEndX + perpVector.x, lineEndY + perpVector.y);
    // }
    let perpVector = lineVector.copy().rotate(-1 * HALF_PI).setMag(20);
    vertex(lineStartX + perpVector.x, lineStartY + perpVector.y);
    vertex(lineEndX + perpVector.x, lineEndY + perpVector.y);
    endShape();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
