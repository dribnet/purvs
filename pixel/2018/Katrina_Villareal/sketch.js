
const finalVersion = false;


/* Default versions of variables */
let elementSpacing = 20;
let circleSize = 20;
let squareSize = 30;

/* Override some variables with high-resolution final version */
if (finalVersion) {
  elementSpacing = 10;
  circleSize = 20;
  squareSize = 30;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  background('white');
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
  let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    fill(pix);
    if(mask[0] > 128) {

push();
 //stroke(pix);
     //strokeWeight(3);
     //noFill();
      ellipse(x, y, circleSize, circleSize); //circle
       //stroke(pix);
    // strokeWeight(3);
    // noFill();
       ellipse(x, y, circleSize/2, circleSize/2); //smaller circle
      pop();

    }

    else {

      push();
      x = x + dx; //random order
      y = y + dy;
stroke(pix)
strokeWeight(4); //outline squares
noFill();
   
      rect(x-halfSize, y-halfSize, squareSize, squareSize);   
      pop();
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacing) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
