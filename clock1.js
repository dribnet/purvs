const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
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
    noStroke();
    fill(255);
    //Number 4
    rect (180, 155, 40, 40);
    rect (140, 195, 40, 40);
    rect (100, 235, 40, 80);
    rect (140, 275, 160, 40);
    rect (220, 115, 40, 280);
    
    //Number 1
    rect (500, 60, 60, 380);
    rect (440, 120, 60, 60);
    
    //Number 0
    rect (620, 120, 60, 260);
    rect (860, 120, 60, 260);
    rect (680, 60, 180, 60);
    rect (680, 380, 180, 60);
    
    //stroke(0);
    fill(0);
    //Number 4
    rect (185, 160, 35, 30);
    rect (145, 200, 30, 30);
    rect (105, 240, 30, 70);
    rect (135, 280, 160, 30);
    rect (225, 120, 30, 270);
    
    //Number 1
    rect (510, 70, 40, 360);
    rect (450, 130, 50, 40);
    
    //Number 0
    rect (630, 130, 40, 240);
    rect (870, 130, 40, 240);
    rect (690, 70, 160, 40);
    rect (690, 390, 160, 40);
    
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
