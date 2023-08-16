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
const bg_color1 = [219, 245, 255];

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
  let w;
  let h;
  for(let i=0; i<7; i++) {
    let k;
    if(i == 2|| i == 4){
      k = 2;
    } else {
      k = 6;
    }
      w = canvasWidth / 7;
      h = canvasHeight / k;
     for(let j=0; j<k; j++) {

      let y = h/2 + h*j;
      let x = w/2 + w*i; 

      push(); 

      if(i == 2){
        translate(x/1.125, y);        
  
      } else if(i == 4){
        translate(x/0.94, y);
      } 
      else if(i ==3){
        translate(x/1, y);

      } else if(i == 5 || i ==6){
        translate(x/1.6, y);
        translate(360, 0);
      }
      else {
        translate(x/1.6, y);
      }

      if(i == 2 || i == 4){        
        scale(13, 13);
      } else {
        scale(4, 4);
      }

      let curly = focusedRandom(0, 100);
      let hair_length = focusedRandom(0, 100, 2, (int(focusedRandom(0, 2, 10, 2)))*100);
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