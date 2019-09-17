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
const bg_color1 = [232, 232, 232];

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


  // draw a 7x4 grid of faces
  let w = canvasWidth / 4;
  let h = canvasHeight / 2;
  for(let i=0; i<2; i++) {
    for(let j=0; j<4; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;     
     
      // all other faces
      push();
      translate(x, y);
      scale(h/20, h/20);

      let curly = focusedRandom(0, 100);
      let hair_length = focusedRandom(0, 100, 2, (int(focusedRandom(0, 2, 2, 2)))*100);
      hair_length = map(hair_length, 0, 100, 0, 340);

      let  eye = focusedRandom(0, 100, 3, int(focusedRandom(0, 5))*25);
      let hairColour = focusedRandom(0, 100);
      let eyeColour = focusedRandom(0, 360);

      let acc = focusedRandom(0, 5);
      let makeup = focusedRandom(0, 100, 10, (int(focusedRandom(0, 2)))*100);
      drawFace1(hair_length, curly ,eye, eyeColour,acc, hairColour, makeup);

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
