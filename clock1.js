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
  //strokeWeight(8); // Stroke weight to 8 pixels
  //ellipse(480, 250, 190, 190);
  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  //rect(500, 280, 260, 20);
  fill(255);
  rect(150, 150, 50, 250);
  rect(200, 100, 100, 50);
  rect(300, 150, 50, 250);
  rect(200, 400, 100, 50);

  rect(400, 150, 50, 250);
  rect(450, 100, 100, 50);
  rect(550, 150, 50, 250);
  rect(450, 400, 100, 50);

  rect(250, 100, 50, 50);
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
