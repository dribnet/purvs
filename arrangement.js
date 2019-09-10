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
  let BGcol = [245, 151, 144];
  let BGcol2 = [255, 251, 219];
  let BGcol3 = [255, 224, 235];
drawZig(-100,-50,300,300,7,BGcol,10);
drawZig(100,50,700,700,7,BGcol2,10);
drawZag(700,700,1000,-100,7,BGcol3,10);
drawZig(250,150,900,300,7,BGcol2,10);
drawZig(-250,350,1200,700,7,BGcol2,10);
drawZag(-100,700,100,-100,7,BGcol3,10);
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
      faceWidth = focusedRandom(-7, 2,1);
      faceLength = focusedRandom(-5, 2,1);
      let browLength = focusedRandom(1,3,1);
      let noseWidth = focusedRandom(-1,0,1);
      let mouthWidth = focusedRandom(0,7,1);
      let faceColorSpinner = int(focusedRandom(1, 100));
      let flipSpinner = int(focusedRandom(1, 100));
      let teeth =0;
      let pupils = false;
      let flip = false;
      if(faceColorSpinner >=1 && faceColorSpinner <=18) {
        faceColor = 1;
      }
      else if(faceColorSpinner >= 19 && faceColorSpinner <=20) {
        faceColor = 2;
      }
      else if(faceColorSpinner >= 21 && faceColorSpinner <= 30) {
        faceColor = 3;
      }
      else if(faceColorSpinner >= 31 && faceColorSpinner <= 40){
        faceColor = 4;
      }
      else{
        faceColor = 5;
      }
      if(flipSpinner <30){
        flip = true;
      }
      else{
        flip = false;
      }
      drawMickeyMouse(faceWidth, faceLength, browLength, noseWidth, mouthWidth,teeth, faceColor,pupils,flip);
      pop();
    }
  }
}
function drawZig(x,y,width,height,numOf,str,strW){
  noFill();
  stroke(str);
  strokeWeight(strW);
  for(var i = 0;i<numOf;i++){
    beginShape();
    for(var j =y;j<height;j+=10){
      vertex(random(x,width),j);
    }
    endShape();
  }
}
function drawZag(x,y,width,height,numOf,str,strW){
  noFill();
  stroke(str);
  strokeWeight(strW);
  for(var i = 0;i<numOf;i++){
    beginShape();
    for(var j =x;j<width;j+=10){
      vertex(j,random(y,height));
    }
    endShape();
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
