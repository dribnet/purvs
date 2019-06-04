/* Set to true to make final high-resolution version */
let finalVersion = true;

/* Default versions of variables */
let elementSpacing = 40;
let squareSize = 40;
let colorSquareSize = 40;

/* Override some variables with high-resolution final version*/
if (finalVersion){
  elementSpacing = 5;
  squareSize = 5;
  colorSquareSize = 5;
}

let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let outputFile = "artwork_3.png";

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');
  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<(2000/elementSpacing);i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let patternSize = colorSquareSize/100.0;
    let halfSize = squareSize/2;

    // Black (background)
    if (mask[0] >= 0 && mask[0] < 64) {
    fill(255);
    rect(x-halfSize, y-halfSize, squareSize/2, squareSize*2);


    // Gray
    } else if (mask[0] >= 150 && mask[0] < 255) {
      push();
      x = x + dx; // Random order
      y = y + dy;
      stroke(255, 223, 0);
      strokeWeight(3); // Outline of square
      fill(255);
   
      rect(x-halfSize, y-halfSize, squareSize, squareSize);   
      pop();


    // White (model)
    } else {
      fill(pix);
      let halfSize = squareSize/2;
      rect(x-halfSize, y-halfSize, colorSquareSize, colorSquareSize);
      }

  } 


  renderCounter = renderCounter + 1;
  
  if(renderCounter > 1920) {
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

