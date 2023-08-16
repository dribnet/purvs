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
const bg_color1 = [250, 220, 172];

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

  // draw a 6x4 grid of faces
  let w = canvasWidth / 5;
  let h = canvasHeight / 4;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
      if(i<1 || i > 2){
        // all other faces
        push();
          translate(x  , y);
          scale(w/37.5, h/25);
          let eyelid_height = focusedRandom(0, 1);
          let eyelid_rotate = focusedRandom(0, 8);
          let blush = focusedRandom(0, 1);
          let mouth = focusedRandom(0, 1);
          let ear_rotate = focusedRandom(-5, 20);
          let mouth_curve = focusedRandom(1.3, 1.9);
          let colour_number = focusedRandom(0, 3);
          drawFace1(eyelid_height,eyelid_rotate,blush,mouth,ear_rotate,colour_number,mouth_curve);
        pop();
      }else if(j<1 || j > 3){
        // all other faces
        push();
          translate(x  , y);
          scale(w/37.5, h/25);
          let eyelid_height = focusedRandom(0, 1);
          let eyelid_rotate = focusedRandom(0, 8);
          let blush = focusedRandom(0, 1);
          let mouth = focusedRandom(0, 1);
          let ear_rotate = focusedRandom(-5, 20);
          let mouth_curve = focusedRandom(1.3, 1.9);
          let colour_number = focusedRandom(0, 3);
          drawFace1(eyelid_height,eyelid_rotate,blush,mouth,ear_rotate,colour_number,mouth_curve);
        pop();
      }
    }
  }
  // all other faces
  push();
    translate(w*2.5 , h*2.1);
    scale(w/15, h/10);
    let eyelid_height = focusedRandom(0, 1);
    let eyelid_rotate = focusedRandom(0, 8);
    let blush = focusedRandom(0, 1);
    let mouth = focusedRandom(0, 1);
    let ear_rotate = focusedRandom(-5, 20);
    let mouth_curve = focusedRandom(1.3, 1.9);
    let colour_number = focusedRandom(0, 3);
    drawFace1(eyelid_height,eyelid_rotate,blush,mouth,ear_rotate,colour_number,mouth_curve);
    drawCrown();
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
