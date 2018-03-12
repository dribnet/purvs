const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// This function is used to redraw the clock at each tick
function time() { 
textAlign(CENTER, CENTER);  
textSize(40);
  fill(200);
  
  // decides whether time is am or pm and draws it
  if(hour()>11) {
    text("PM", 0, 0);
  }
  else{
    text("AM", 0, 0);
  }

  // draws the rest of the time
  textSize(25);
  fill(255);
  text(hour(), 0, -180);

  fill(255, 0, 0);
  text(":", 0, -205);

  fill(255);
  text(minute(), 0, -225);
}

// Update this function to draw you own maeda clock
function draw () {
  background(0); // Black background
  noStroke(); // removes the stroke
  translate(CANVAS_WIDTH/2, CANVAS_HEIGHT/2); // moves the clock into the center of the canvas
  rotate((2*Math.PI/60)*second()); // rotates around the axis in 60 increments
  time(); // draws the clock
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
