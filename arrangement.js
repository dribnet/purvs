/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 5000;
let angle = 0;
let angle2 =  2;
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
  redraw();

}

// global variables for colors
const bg_color1 = [36,45,50];

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
  let total = 8;
  let total2 = 16;  
  for(let i=0; i<8; i++) {
    for(let j=0; j<16; j++) {
  
  let x=175*cos(degrees(angle)) + width/2;
  let y=175*sin(degrees(angle)) + height/2;

  let x1=275*cos(degrees(angle2)) + width/2;
  let y1=275*sin(degrees(angle2)) + height/2;
    angle = Math.PI*2/total*i;
    angle2 = Math.PI*2/total2*j;
      noLoop();
      if (i == 1) {         
        push();
          translate(canvasWidth/2,canvasHeight/2);
          scale(10.0);
          let horns = int(focusedRandom(0, 5));
          let width = focusedRandom(0, 1);
          let cheekbones = focusedRandom(-0.5,0.3);
          drawFace2(horns, width, cheekbones);
        pop();
      }

      if(j > 0 || j <= 16) {
          push();
          translate(x1,y1);
          scale(w/35,h/35);
          let horns = int(focusedRandom(0, 5));
          let width = focusedRandom(0, 1);
          let cheekbones = focusedRandom(0.5,1);
          drawFace1(horns, width,cheekbones);
          pop();
        }
        
      if (i > 0 || i <= 8) {
        // all other faces*      
        push();
        translate(x, y);        
        scale(w/25, h/25);                      
        if((i+j)%2 == 0) {                 
          let horns = int(focusedRandom(0, 6));
          let width = focusedRandom(0, 1);
          let cheekbones = focusedRandom(-0.5,0.3);         
          drawFace2(horns, width, cheekbones);       
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
