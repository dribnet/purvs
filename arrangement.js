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
  let BGcol = [50, 217, 100];//green
  let BGcol2 = [255, 251, 219];//paper
  let BGcol3 = [255, 224, 235];//pink
  let BGcol4 = [251, 255, 8];//yellow
  let BGcol5 = [255, 181, 197];//paper2
  drawZig(100,-50,1000,200,7,BGcol4,10);
drawZig(-100,-50,300,300,7,BGcol,10);
drawZig(50,-50,800,700,7,BGcol2,10);
drawZag(700,700,1000,-100,7,BGcol3,10);
drawZig(250,150,900,300,7,BGcol2,10);
drawZig(-250,350,1200,700,7,BGcol2,10);
drawZag(-100,700,100,-100,7,BGcol3,10);
drawZig(560,300,1700,700,7,BGcol5,7);
drawZag(500,350,700,700,17,BGcol5,7);
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
      translate(x+random(-100,100), y+random(-100,100));
      rotate(focusedRandom(-45,45,7));
      let scaleFactor = focusedRandom(10,20,3);
      scale(w/scaleFactor, h/scaleFactor);
      faceWidth = focusedRandom(-7, 2,1);
      faceLength = focusedRandom(-5, 2,1);
      let browLength = focusedRandom(1,3,1);
      let noseWidth = focusedRandom(-1,0,1);
      let mouthWidth = focusedRandom(0,7,1);
      let faceColorSpinner = int(focusedRandom(1, 100));
      let flipSpinner = int(focusedRandom(1, 100));
      let pupilsSpinner = int(focusedRandom(1, 100));
      let teeth =0;
      let pupils = false;
      let flip = false;
      if(faceColorSpinner >=1 && faceColorSpinner <=18) {
        faceColor = 5;
      }
      else if(faceColorSpinner >= 19 && faceColorSpinner <=20) {
        faceColor = 2;
      }
      else if(faceColorSpinner >= 21 && faceColorSpinner <= 40) {
        faceColor = 1;
      }
      else if(faceColorSpinner >= 31 && faceColorSpinner <= 70){
        faceColor = 3;
      }
      else{
        faceColor = 4;
      }
      if(flipSpinner <30){
        flip = true;
      }
      else{
        flip = false;
      }
      if(pupilsSpinner <70){
        pupils = true;
      }
      else{
        pupils = false;
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
