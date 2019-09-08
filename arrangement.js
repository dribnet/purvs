/*
* This program draws your arrangement of faces on the canvas.
*/

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 5000;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

// global variables for colors
const bg_color1 = [240, 240, 206];

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  resetFocusedRandom(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  let faceWidth;
  let earSize, earDist;
  let faceColor;

  let gridWidth = 6;
  let gridHeight = 4;

  // draw a 5x3 grid of faces
  let w = canvasWidth / gridWidth;
  let h = canvasHeight / gridHeight;
  for(let i=0; i<gridHeight; i++) {
    for(let j=0; j<gridWidth; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
      // center face
      push();
      translate(x, y);
      scale(w/25, h/25);
      faceWidth = focusedRandom(-7, 2,5);
      faceLength = focusedRandom(-7, 2,3);
      let browLength = focusedRandom(1,3,1);
      let faceColorSpinner = int(focusedRandom(2, 2));
      if(faceColorSpinner >= 2 && faceColorSpinner <= 3) {
        faceColor = 1;
      }
      else if(faceColorSpinner >= 4 && faceColorSpinner <= 6) {
        faceColor = 2;
      }
      else if(faceColorSpinner == 7) {
        faceColor = 3;
      }
      else {
        faceColor = 4;
      }
      drawMickeyMouse(faceWidth, faceLength, browLength);
      pop();
    }
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
