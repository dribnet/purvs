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
  let w = canvasWidth / 6;
  let h = canvasHeight / 3;
  for(let i=0; i<3; i++) {
    for(let j=0; j<6; j++) {

      let y = h/2 + h*i;
      let x = w/2 + w*j;
      // center face
      push();
      translate(x, y);
      scale(w/25, h/25);
      
        if((i+j)%3 == 0) {
          /*********FACE ONE********/
          let tallness_value1 = focusedRandom(0,100,100);
          let ear_value1 = focusedRandom(0,3 );
          let cheek_value1 = focusedRandom(0,3);
          let mouth_value1 = focusedRandom(0,100, 0);
          let eye_value1 = focusedRandom(0,100);
          drawFace1(tallness_value1, ear_value1, cheek_value1, mouth_value1, eye_value1);
        }

        else if((i+j)%3 == 1){
          /********FACE TWO**********/
          let tallness_value2 = focusedRandom(0, 100);
          let ear_value2 = focusedRandom(0,3);
          let eye_value2 = focusedRandom(0,3);
          let mouth_value2 = focusedRandom(0, 100);
          let mouth_curve2 = focusedRandom(0, 100, 0);
          drawFace2(tallness_value2, ear_value2, eye_value2, mouth_value2, mouth_curve2);
        }
        else {
          /********FACE THREE********/
          let tallness_value3 = focusedRandom(0,100);
          let ear_value3 = focusedRandom(0,3);
          let mouth_value3 = focusedRandom(0,100, 0);
          let mouth_width3 = focusedRandom(0,100);
          let eye_value3 = focusedRandom(0,3);
          drawFace3(tallness_value3, ear_value3, mouth_value3, mouth_width3, eye_value3);
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
