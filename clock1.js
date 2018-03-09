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
  background(000); // light gray background
  strokeWeight(0); // Stroke weight to 8 pixels
  stroke(255,255,255);
  rect(370, 130, 20, 260); //number 1
  rect (350, 150, 30, 20);

  rect (650, 202, 15, 15);  //number two
  rect (665, 187, 43, 15);
  rect (708, 202, 15, 35);
  rect (693, 237, 15, 15);
  rect (678, 253, 15, 15);
  rect (663, 269, 15, 15);
  rect (650, 284, 74, 15);

    rect (750, 187, 74, 15); //number 5
    rect (750, 201, 15, 35);
    rect (750, 222, 60, 15);
    rect (810, 237, 15, 45);
    rect (765, 282, 45, 15);
    rect (750, 268, 15, 15);


  







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
