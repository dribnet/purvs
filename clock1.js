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
  background(0); // black background
  noStroke(); //remove stroke
  
  //4
  fill(255); //white
  rect(300, 250, 20, 40);
  rect(320, 230, 20, 20);
  rect(340, 210, 20, 20);
  rect(360, 190, 20, 140);
  rect(300, 270, 100, 20);
  
  //01
  fill(140); //gray
  rect(550, 240, 10, 50);
  rect(590, 240, 10, 50);
  rect(560, 230, 30, 10);
  rect(560, 290, 30, 10);

  rect(640, 230, 10, 70);
  rect(630, 240, 10, 10);


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
