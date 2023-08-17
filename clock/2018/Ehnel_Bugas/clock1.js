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
  strokeWeight(5);
  const spacing = 100;

  stroke(255, 0, 0);
  for(let i = -2*spacing; i <= 2*spacing; i = i+spacing) {
    ellipse(width/2, height/2+i, 45, 45);
  }

  strokeWeight(3);
  stroke(255, 255, 0);
  for(let i = -2*spacing; i <= 2*spacing; i = i+spacing) {
    ellipse(width/2, height/2+i, 40, 40);
  }

  stroke(0, 0, 255);
  for(let i = -2*spacing; i <= 2*spacing; i = i+spacing) {
    ellipse(width/2, height/2+i, 30, 30);
  }
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