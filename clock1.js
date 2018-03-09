const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
var x;
var y;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  x = mouseX;
  y = mouseY;
  background(200); // light gray background
  strokeWeight(5); // Stroke weight to 8 pixels
  ellipse(width/2, height/2, 400, 250);
  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  rect(500, 280, 260, 20);
  ellipse(x, y, 20, 20);
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
