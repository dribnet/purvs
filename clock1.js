const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

const bBW = 40;
const bBH = 40;
const lBH = 10;
const lBW = 10;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(0); // black background
  strokeWeight(0); // Stroke weight to 8 pixels
  //first four
  rect(200, 400, bBW, -300); //long vertical
  rect(90, 250, 200, bBH); //long horizontal
  rect(170, 140, bBW, bBH);
  rect(130, 180, bBW, bBH);
  rect(90, 220, bBW, bBH);

  //dots
  rect(470, 160, 30, 30);
  rect(470, 260, 30, 30);

  //second four
  rect(670, 325, lBW, -120); //long vertical
  rect(640, 245, 65, lBH); //long horizontal
  rect(660, 215, lBW, lBH);
  rect(650, 225, lBW, lBH);
  rect(640, 235, lBW, lBH);

  //eight
  rect(760, 215, lBW, 35); //vertical UL
  rect(760, 270, lBW, 35); //vertical LL
  rect(805, 215, lBW, 35); //vertical UR
  rect(805, 270, lBW, 35); //vertical LR
  rect(770, 200, 35, lBH); //horizontalT
  rect(770, 255, 35, lBH); //horizontalM
  rect(770, 310, 35, lBH); //horizontalL
}

// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
