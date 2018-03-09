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
  fill(0);
  background(0);
  stroke(0, 255, 0);
  strokeWeight(5);
  ellipse(width/2, height/2, 40, 40);
  ellipse(width/2, height/2-100, 40, 40);
  ellipse(width/2, height/2-50, 40, 40);
  ellipse(width/2, height/2+100, 40, 40);
  ellipse(width/2, height/2+50, 40, 40);
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
