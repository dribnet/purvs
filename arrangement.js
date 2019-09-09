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
const bg_color1 = [193, 214, 227];

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
        
        /*
        let eye_value = 2;
        let tilt_value = focusedRandom(-15, 45);
        let mouth_value = focusedRandom(1, 3);
        let is_cyclops = focusedRandom(0, 100);
        if(is_cyclops < 10) {
          eye_value = 1;
          tilt_value = focusedRandom(-5, 5);
          mouth_value = focusedRandom(5, 10);
        }
        */
        push();

        translate(x, y);
        scale(w/25, h/25);

        let tallness_value3 = focusedRandom(0,100,3);
        drawFace3(tallness_value3);
        pop();
      }
      else if (i > 0) {
        // all other faces
        push();
        translate(x, y);
        scale(w/25, h/25);
        if((i+j)%2 == 0) {
          let tallness_value1 = focusedRandom(0,100,3);
          drawFace1(tallness_value1);
        }
        else {
          let tallness_value2 = focusedRandom(0, 100, 3);
          let ear_values = [1,2];
          let ear_value2 = random(ear_values);
          let eye_values = [1, 2, 3];
          let eye_value = random(eye_values);
          drawFace2(tallness_value2, ear_value2, eye_value);
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
