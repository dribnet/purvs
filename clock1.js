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
  strokeWeight(0); // Stroke weight to 8 pixels
  fill(255);
  rect(300, 140, 30, 210);
  rect(270,170,30,30);
  rect(240,200,30,30);
  rect(210,230,30,30);
  rect(210,260,150,30);
  fill(100);
  rect(560,200,15,90);
  rect(620,200,15,90);
  rect(575,185,45,15);
  rect(575,290,45,15);
  rect(655,185,90,15);
  rect(730,185,15,55);
  rect(715,240,15,15);
  rect(700,255,15,50);
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
