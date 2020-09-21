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


var book_w = 350;
var book_h = 450;
var book_x = 10;
var book_y = 10;

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  resetFocusedRandom(curRandomSeed);

  // clear screen
  background(bg_color1);
  // noStroke();
  // rect(book_x,book_y,book_w,book_h);
  // rect(book_x+5+book_w,book_y, book_w,book_h);
  // draw a 7x4 grid of faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
      push();
      translate(x, y);
      scale(w/25, h/25);
      if((i+j)%2 == 0) {
        // push();
        a1 = focusedRandom(0,10,2,4);
        a2 = focusedRandom(0,100,1,25);
        a3 = focusedRandom(0,10,2,4);
        a4 = 1 - focusedRandom(0,1);
        a5 = focusedRandom(0,1);
        a6 = focusedRandom(-0.3,0.7);
        a7 = focusedRandom(-0.5,0.5);
        a8 = focusedRandom(-1.5,0.5);
        a9 = focusedRandom(0,5);
        a10 = focusedRandom(0,3);
        a11 = focusedRandom(0,5,4,5);
        a12 = focusedRandom(0,5,2,2);
        drawFace1(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
        // pop();
      }
      else {
        a1 = focusedRandom(0,8,2,2.5);
        a2 = focusedRandom(0,10,1,4);
        a3 = focusedRandom(0,10,1,3);
        a4 = focusedRandom(0,10,2,4);
        a5 = focusedRandom(0,1);
        a6 = focusedRandom(-0.4,0.6);
        a7 = focusedRandom(-0.8,0.2);
        a8 = focusedRandom(-1.5,0.5);
        a9 = focusedRandom(0,5);
        a10 = focusedRandom(0,3);
        a11 = focusedRandom(0,5,4,5);
        a12 = focusedRandom(0,5,2,2);
        drawFace3(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
      }
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
