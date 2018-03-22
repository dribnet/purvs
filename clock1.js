
const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  //main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(237,237,237,240); // light gray background
  noStroke();
  //strokeWeight(8); // Stroke weight to 8 pixels
  
  fill(0, 0, 0);
  arc(width/2, height/2, 450, 450, PI+HALF_PI, TWO_PI+HALF_PI );
  fill(255, 255, 255);
  arc(width/2, height/2, 450, 450, TWO_PI+HALF_PI, PI+HALF_PI );
  fill(255, 255, 255, 235);
  arc(width/2, height/2, 150, 150, PI+HALF_PI, TWO_PI+HALF_PI );
  fill(0, 0, 0, 220);
  arc(width/2, height/2, 150, 150, TWO_PI+HALF_PI, PI+HALF_PI );
  noFill();
  stroke(0, 0, 0);
  strokeWeight(7);
  arc(width/2, height/2, 450, 450,radians(245),radians(251));
  stroke(255, 255, 255);
  strokeWeight(7);
  arc(width/2, height/2, 150, 150,radians(270),radians(300));
  textSize(45);
  noStroke();
  fill(255);
  text('1', width/2-40, height/2+15);
  fill(0);
  text('55', width/2+10, height/2+15);
  
  

  //fill(255, 255, 255);
  //ellipse(width/2, height/2, 450, 450);
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
