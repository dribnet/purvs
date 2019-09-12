/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 5000;
let angle = 0;
let angle2 =  0;

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
  
 
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  let total = 8;
  let total2 = 16;  
  for(let i=0; i<8; i++) {    
   
  let x=175*cos(degrees(angle)) + width/2;
  let y=175*sin(degrees(angle)) + height/2;  
  
    angle = Math.PI*2/total*i;
    
   
      if (i == 0) {
        push();
        translate(canvasWidth/2,canvasHeight/2);
        scale(30.0);
        background(bg_color1);
        drawFace3();
        pop();
      }

      if (i == 0) { 
        push();
          translate(canvasWidth/2,canvasHeight/2);
          scale(10.0);
          let horns = int(focusedRandom(0, 5));
          let width = focusedRandom(0, 1);
          let cheekbones = focusedRandom(-0.5,0.3);
          drawFace2(horns, width, cheekbones);
        pop();
      }      
        
      if (i >= 1 || i <= 8) {
            
        push();
        translate(x, y); 
        scale(w/25, h/25);
        rotate(int(map(i,0,7,45,360)));;                    
        if((i)%2 == 0) {                 
          let horns = int(focusedRandom(0, 6));
          let width = focusedRandom(0, 1);
          let cheekbones = focusedRandom(-0.5,0.3);         
          drawFace2(horns, width, cheekbones);       
        }
        pop();
    }
  }
 
  for(let j=0; j<16; j++) {
  let x1=240*cos(degrees(angle2)) + width/2;
  let y1=240*sin(degrees(angle2)) + height/2;

    angle2 = Math.PI*2/total2*j;

        if(j > 0 || j < 16) {
              push();
              translate(x1,y1);
              scale(w/35,h/35);
              rotate(map(j,0,15,67.5,400));
              let horns = int(focusedRandom(0, 5));
              let width = focusedRandom(0, 1);
              let cheekbones = focusedRandom(0.5,1);
              drawFace1(horns, width,cheekbones);              
        }
        pop();      
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
