const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

VarRX = 35
VarRY = 35
VarYX = 25
VarYY = 25
VarBX = 15
VarBY = 15

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(0); // light gray background
  strokeWeight(2); // Stroke weight to 8 pixels
  //ellipse(480, 250, 190, 190);
  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  //rect(500, 280, 260, 20);

  //Red

  stroke(255, 0, 0);
  noFill()

  ellipse(width/2 - 70, 135, VarRX, VarRY);

  ellipse(width/2, 100, VarRX, VarRY);
  ellipse(width/2 + 35, 100, VarRX, VarRY);
  ellipse(width/2 - 35, 100, VarRX, VarRY);

  ellipse(width/2 + 70, 135, VarRX, VarRY);
  ellipse(width/2 + 70, 170, VarRX, VarRY);

  ellipse(width/2, 205, VarRX, VarRY);
  ellipse(width/2 + 35, 205, VarRX, VarRY);

  ellipse(width/2 + 70, 240, VarRX, VarRY);
  ellipse(width/2 + 70, 275, VarRX, VarRY);

  ellipse(width/2, 310, VarRX, VarRY);
  ellipse(width/2 + 35, 310, VarRX, VarRY);
  ellipse(width/2 - 35, 310, VarRX, VarRY);

  ellipse(width/2 - 70, 275, VarRX, VarRY);


//Yellow
//Left 5
 stroke(255,255,0);

 ellipse(width/2 - 35, 100, VarYX, VarYY);
 ellipse(width/2 - 70, 100, VarYX, VarYY);
 ellipse(width/2 - 105, 100, VarYX, VarYY);
 ellipse(width/2 - 140, 100, VarYX, VarYY);
 ellipse(width/2 - 175, 100, VarYX, VarYY);

 ellipse(width/2 - 175, 135, VarYX, VarYY);
 ellipse(width/2 - 175, 170, VarYX, VarYY);

 ellipse(width/2 - 70, 170, VarYX, VarYY);
 ellipse(width/2 - 105, 170, VarYX, VarYY);
 ellipse(width/2 - 140, 170, VarYX, VarYY);

 ellipse(width/2 - 35, 205, VarYX, VarYY);
 ellipse(width/2 - 35, 240, VarYX, VarYY);
 ellipse(width/2 - 35, 275, VarYX, VarYY);

 ellipse(width/2 - 70, 310, VarYX, VarYY);
 ellipse(width/2 - 105, 310, VarYX, VarYY);
 ellipse(width/2 - 140, 310, VarYX, VarYY);

 ellipse(width/2 - 175, 275, VarYX, VarYY);



//Right 3
  ellipse(width/2 - 70 + 105, 135, VarYX, VarYY);

  ellipse(width/2 + 70, 100, VarYX, VarYY);
  ellipse(width/2 + 140, 100, VarYX, VarYY);
  ellipse(width/2 + 105, 100, VarYX, VarYY);

  ellipse(width/2 + 70 + 105, 135, VarYX, VarYY);
  ellipse(width/2 + 70 + 105, 170, VarYX, VarYY);

  ellipse(width/2 + 105, 205, VarYX, VarYY);
  ellipse(width/2 + 35 + 105, 205, VarYX, VarYY);

  ellipse(width/2 + 70 + 105, 240, VarYX, VarYY);
  ellipse(width/2 + 70 + 105, 275, VarYX, VarYY);

  ellipse(width/2 + 105, 310, VarYX, VarYY);
  ellipse(width/2 + 35 + 105, 310, VarYX, VarYY);
  ellipse(width/2 - 35 + 105, 310, VarYX, VarYY);

  ellipse(width/2 - 70 + 105, 275, VarYX, VarYY);

  //Blue
  //Left 0 
  
  stroke(0, 0, 255);

 ellipse(width/2 - 70, 100, VarBX, VarBY);
 ellipse(width/2 - 105, 100, VarBX, VarBY);
 ellipse(width/2 - 140, 100, VarBX, VarBY);

 ellipse(width/2 - 175, 135, VarBX, VarBY);
 ellipse(width/2 - 175, 170, VarBX, VarBY);
 ellipse(width/2 - 175, 205, VarBX, VarBY);
 ellipse(width/2 - 175, 240, VarBX, VarBY);
 ellipse(width/2 - 175, 275, VarBX, VarBY);

 ellipse(width/2 - 35, 135, VarBX, VarBY);
 ellipse(width/2 - 35, 170, VarBX, VarBY);
 ellipse(width/2 - 35, 205, VarBX, VarBY);
 ellipse(width/2 - 35, 240, VarBX, VarBY);
 ellipse(width/2 - 35, 275, VarBX, VarBY);

 ellipse(width/2 - 70, 310, VarBX, VarBY);
 ellipse(width/2 - 105, 310, VarBX, VarBY);
 ellipse(width/2 - 140, 310, VarBX, VarBY);

//Right 3

ellipse(width/2 - 70 + 105, 135, VarBX, VarBY);

  ellipse(width/2 + 70, 100, VarBX, VarBY);
  ellipse(width/2 + 140, 100, VarBX, VarBY);
  ellipse(width/2 + 105, 100, VarBX, VarBY);

  ellipse(width/2 + 70 + 105, 135, VarBX, VarBY);
  ellipse(width/2 + 70 + 105, 170, VarBX, VarBY);

  ellipse(width/2 + 105, 205, VarBX, VarBY);
  ellipse(width/2 + 35 + 105, 205, VarBX, VarBY);

  ellipse(width/2 + 70 + 105, 240, VarBX, VarBY);
  ellipse(width/2 + 70 + 105, 275, VarBX, VarBY);

  ellipse(width/2 + 105, 310, VarBX, VarBY);
  ellipse(width/2 + 35 + 105, 310, VarBX, VarBY);
  ellipse(width/2 - 35 + 105, 310, VarBX, VarBY);

  ellipse(width/2 - 70 + 105, 275, VarBX, VarBY);

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
