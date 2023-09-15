let sourceImg=null;
let maskImg=null;
let currentRow=0;

//Mask elements to begin a rotate and scale disolve.
let fadeCount=0;
let fadeRowBegin = 60 ; //60 good result under med quality
let rot=10;
let s=1.0;
//Render Quality settings: 'low' 'med' 'high'
let quality = "med";
let diamondSize = 10;
let circleSize = 10;
let spacing = 10;
var Y_AXIS = 1;
//renderer Quality settings:
switch(quality){
  case "low":
    diamondSize = 80;
    circleSize = 80;
    spacing = 80;
    fadeDiamondSize = 80;
    break;

  case "med":
    diamondSize = 20;
    circleSize = 20;
    spacing = 20;
    fadeDiamondSize = 20;
    break;

  case "high":
    diamondSize = 10;
    circleSize = 10;
    spacing = 10;
    fadeDiamondSize = 10;
    break;

  default:
    diamondSize = 50;
}
//Image loading for operations
function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
  bgImg = loadImage('bg_3.jpg')
}

//Canvas and image information setup.
function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');
  image(bgImg, 0, 0);
  angleMode(DEGREES);
  imageMode(CENTER);
  noStroke();
  //cX used for gradient renders
  let c1 = color(195,68,47);
  let c2 = color(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
//setGradient(0, 0, width, height, c1, c2, Y_AXIS); //used in one off renders for generating background images
  for(let i=0;i<1080/diamondSize;i++) {
    let x = i * spacing;
    let y = currentRow * spacing;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    let halfSize = spacing/2;

    if(mask[0] > 128) {
      push();
      if (currentRow > fadeRowBegin){
      //rotates rows and scales diamonds when fadeRowBegin is met
      rot = rot + 1;
      translate(x,y);
      rotate(rot);
      scale(s);
      rect(0-halfSize, 0-halfSize,  diamondSize, diamondSize);
    } else {
      //otherwise make normal diamonds
      translate(x,y);
      rotate(rot);
      rect(0-halfSize, 0-halfSize, diamondSize, diamondSize);
    }
      pop();
    }
    else {
      //else if off the mask, make background circles
      //Juan Superrior BG cross settings
      ellipse(x-halfSize, y-halfSize, 5, circleSize);
      ellipse(x-halfSize, y-halfSize, circleSize, 5);

      //Anton BG cross settings
      //ellipse(x-halfSize, y-halfSize, 14, circleSize);
      //ellipse(x-halfSize, y-halfSize, circleSize, 14);

      //Marie BG Cross settings:
      //ellipse(x-halfSize, y-halfSize, 5, circleSize);
      //ellipse(x-halfSize, y-halfSize, circleSize, 5);
    }

  }

  s = map(currentRow, 65, 96, 1.0, 0);
  currentRow = currentRow + 1;
  if(currentRow *  spacing>1920) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}//draw


/*
function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}*/

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
