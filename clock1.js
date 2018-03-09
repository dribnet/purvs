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
  background(0);
  rectMode(CENTER);
  noStroke();

  fill(255);
  rect(300,250,40,200);
  rect(260,210,40,40);
  rect(340,330,40,40);
  rect(260,330,40,40);

  noStroke();
  fill(150);
  rect(600,250,10,40);
  rect(635,250,10,40);
  rect(618,225,25,10);
  rect(618,275,25,10);

  noStroke();
  rect(661,237.5,10,35);
  rect(680,225,30,10);
  rect(675,250,20,10);
  rect(690,263,10,15);
  rect(670.5,275,29,10);

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
