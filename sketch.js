/* Set to true to make final high-resolution version */
const finalVersion = false;

/* Default versions of variables */
let elementSpacing = 20;
let squareSize = 30;
let pointSize = 30;

/* Override some variables with high-resolution final version */
if (finalVersion) {
  elementSpacing = 20;
  squareSize = 30;
  pointSize = 30;
}

let sourceImg=null;

// Mask for model
let maskImg=null;

let renderCounter=0;

let putputFile = "artwork_3.png";

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");

  //Clothes image
  cl = loadImage("3.png");
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();  
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 5.5;
const tile_height = 5.5;


function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;

    strokeWeight(0.3);
    for(let y = 0; y < height; y = y + tile_height){
    for(let x = 0; x < width; x = x + tile_width){}
    }


    if(mask[0] > 128) {
      push();
      rect(x, y, tile_width, tile_height);
      pop();
    }

    else {
      push();
      // Add random offsets
      x = x + dx;
      y = y + dy;
      stroke(pix);
      // Outline of squares
      strokeWeight(2);
      noFill();
      rect(x-halfSize, y-halfSize, squareSize, squareSize);   
      pop();
    }
  }



  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/pointSize) {
    console.log("Done!")
    noLoop();

    //clothes
    image(cl,350,630);
  }
}

function star(x,y) {
  push();
  noStroke();
  scale(0.2);

  push();
  fill(255);
  stroke(255);
  strokeWeight();
  ellipse(100, 100, 30, 30);
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
