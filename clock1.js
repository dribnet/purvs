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
  background(204); // light gray background
  strokeWeight(8); // Stroke weight to 8 pixels
  ellipse(480, 250, 190, 190);
  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  rect(500, 280, 260, 20);
  triangle(347,54,392,9,392,66)
  //rect(50,50,80,80)
  //ellipse(50,50,80,80);
  //arc(90,60,80,80,0, HALF_PI);
  arc(90,60,80,80,0,radians(90))
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
