/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

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
const bg_color1 = [225, 206, 187];

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
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
      if (i == 0) {
        // center face
        let eye_value = 2;
        let tilt_value = focusedRandom(-15, 45);
        let mouth_value = focusedRandom(1, 3);
        let is_cyclops = focusedRandom(0, 100);
        if(is_cyclops < 10) {
          eye_value = 1;
          tilt_value = focusedRandom(-5, 5);
          mouth_value = focusedRandom(5, 10);
        }
        push();
        translate(x, y);
        scale(w/25, h/25);
        b2 = focusedRandom(1,100);
        b1 = focusedRandom(1,100);
        b3 = focusedRandom(1,100);
        b4 = focusedRandom(1,100);
        b5 = focusedRandom(1,100);
        b6 = focusedRandom(1,100);
        b7 = focusedRandom(1,100);
        b8 = focusedRandom(1,100);
        b9 = focusedRandom(1,100);
        b10 = focusedRandom(0,100);
        b11 = focusedRandom(0,5,4,5);
        b12 = focusedRandom(0,5,2,2);
        drawFace3(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12);
        pop();
      }
      else if (i > 0) {
        // all other faces
        push();
        translate(x, y);
        scale(w/25, h/25);
        if((i+j)%2 == 0) {
          // push();
          a1 = focusedRandom(1,100);
          a2 = focusedRandom(1,100);
          a3 = focusedRandom(1,100);
          a4 = focusedRandom(1,100);
          a5 = focusedRandom(1,100);
          a6 = focusedRandom(1,100);
          a7 = focusedRandom(1,100);
          a8 = focusedRandom(1,100);
          a9 = focusedRandom(1,100);
          a10 = focusedRandom(0,100);
          a11 = focusedRandom(0,5,4,5);
          a12 = focusedRandom(0,5,2,2);

          drawFace1(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
          // pop();
        }
        else {
          a1 = focusedRandom(1,100);
          a2 = focusedRandom(1,100);
          a3 = focusedRandom(1,100);
          a4 = focusedRandom(1,100);
          a5 = focusedRandom(1,100);
          a6 = focusedRandom(1,100);
          a7 = focusedRandom(1,100);
          a8 = focusedRandom(1,100);
          a9 = focusedRandom(1,100);
          a10 = focusedRandom(0,100);
          a11 = focusedRandom(0,5,4,5);
          a12 = focusedRandom(0,5,2,2);
          drawFace3(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
        }
        pop();
      }
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
