const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(0); // light gray background
  stroke(255);
  rect(200, 115, 40, 230);
  rect(80, 250, 200, 40);
  rect(80, 210, 40, 40);
  rect(120, 170, 40, 40);
  rect(160, 130, 40, 40);

  rect(560, 130, 30, 180);
  rect(480, 240, 140, 30);
  rect(480, 210, 30, 30);
  rect(510, 190, 30, 30);
  rect(540, 160, 30, 30);

  rect(780, 130, 30, 180);
  rect(700, 240, 140, 30);
  rect(700, 210, 30, 30);
  rect(730, 190, 30, 30);
  rect(760, 160, 30, 30);


  
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
