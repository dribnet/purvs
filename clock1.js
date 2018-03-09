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
  noStroke();

  fill(255);
  rect(110, 140, 40, 40);
  rect(150, 100, 40, 40);  //this section is the one
  rect(190, 70, 40, 240);
  rect(110, 310, 200, 40);
  
  fill(200);
  rect(380, 170, 30, 30);
  rect(410, 140, 90, 30);
  rect(500, 170, 30, 60); // this section is the two
  rect(470, 230, 30, 30);
  rect(440, 260, 30, 30);
  rect(410, 290, 30, 30);
  rect(380, 320, 150, 30);


  fill(150);
  rect(640, 230, 20, 40);
  rect(660, 210, 80, 20);  //this section is the eight
  rect(660, 270, 60, 20);
  rect(640, 310, 20, 20);
  rect(660, 330, 60, 20);
  rect(720, 290, 20, 40);

  fill(85);
  rect(780, 280, 30, 10);
  rect(770, 290, 10, 50);
  rect(780, 340, 30, 10); //this section is the zero
  rect(810, 290, 10, 50);

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
