const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
var a = 280;
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(204); // light gray background
  strokeWeight(0.5); // Stroke weight to 8 pixels

  //vertical line of circles for the "4"
  ellipse(a, 100, 40, 40);
  ellipse(a, 141, 40, 40);
  ellipse(a, 182, 40, 40);
  ellipse(a, 223, 40, 40);
  ellipse(a, 264, 40, 40);
  ellipse(a, 305, 40, 40);
  ellipse(a, 346, 40, 40);
  //horizontal line of circles for the "4"
  ellipse(160, 264, 40, 40);
  ellipse(200, 264, 40, 40);
  ellipse(240, 264, 40, 40);
  ellipse(320, 264, 40, 40);
  //circles to finish the "4"
  ellipse(239, 139, 40, 40);
  ellipse(160, 223, 40, 40);
  ellipse(200, 182, 40, 40);
  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  //rect(80, 50, 800, 400);
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
