let sourceImg=null;
let maskImg=null;
let currentRow=0;

//Mask elements to begin a rotate and scale disolve.
let fadeCount=0;
let fadeRowBegin = 15;
let rot=10;
//Render Quality settings: 'low' 'med' 'high'
let quality = "low";
let diamondSize = 10;
let circleSize = 10;
let spacing = 10;

//renderer Quality settings:
switch(quality){
  case "low":
    diamondSize = 80;
    circleSize = 80;
    spacing = 80;
    break;

  case "med":
    diamondSize = 30;
    circleSize = 30;
    spacing = 30;
    break;

  case "high":
    diamondSize = 10;
    circleSize = 10;
    spacing = 10;
    break;

  default:
    diamondSize = 50;
}
//Image loading for operations
function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

//Canvas and image information setup.
function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');
  angleMode(DEGREES);
  imageMode(CENTER);
  noStroke();
  background(195,68,47);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<1080/diamondSize;i++) {
    //let x = floor(random(sourceImg.width));
    //let y = floor(random(sourceImg.height));
    let x = i * spacing;
    let y = currentRow * spacing;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    if(mask[0] > 128) {
      let halfSize = spacing/2;
      push();
      if (currentRow > fadeRowBegin){
      rot = rot + 2;
      fadeCount = fadeCount + 1;
      fadeDiamondSize = map(currentRow, 0, 30, diamondSize, 5);
      translate(x,y);
      rotate(rot);
      rect(0-halfSize, 0-halfSize, fadeDiamondSize, fadeDiamondSize);
    } else {
      translate(x,y);
      rotate(rot);
      rect(0-halfSize, 0-halfSize, diamondSize, diamondSize);
    }
      pop();
    }
    else {
      ellipse(x, y, circleSize, circleSize);
    }
    //rowFade();
  }
  currentRow = currentRow + 1;
  if(currentRow *  spacing>1920) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

//Starts the scaling and rotating of elements at fade begin point
/*function rowFade(){
  if (currentRow > fadeRowBegin){
  let fadeCount = fadeCount + 1;
  map(y, y, 24, diamondSize, 0);
  }
}*/

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
