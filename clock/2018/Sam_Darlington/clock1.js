const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

var mainx=480;
var mainy=250;
var xoutfactor=1;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  if (mouseIsPressed) {
    xoutfactor=lerp(xoutfactor,0,0.1);
  } else {
    xoutfactor=lerp(xoutfactor, map(mouseX,0,900,-2,2),0.6);
  }
  background(204); // light gray background
  strokeWeight(6); // Stroke weight to 8 pixels
  stroke(58, 71, 89);
  noStroke();

  //Seconds
  fill(58, 71, 89);
  ellipse(mainx-20*xoutfactor, mainy, 350, 400);
  rect(mainx-20*xoutfactor,mainy-200,20*xoutfactor,400);
  fill(63, 87, 124);
  ellipse(mainx, mainy, 350, 400);

  fill(255,0,255);
  ellipse(mainx, mainy, 306.25, 350);

  fill(255)
  ellipse(mainx, mainy-175,16,32)
  
  //Minutes
  fill(58, 71, 89);
  ellipse(mainx, mainy, 262.5, 300);
  rect(mainx,mainy-150,20*xoutfactor,300);
  fill(85, 129, 198);
  ellipse(mainx+20*xoutfactor, mainy, 262.5, 300);

  fill(255,255,0);
  ellipse(mainx+20*xoutfactor, mainy, 218.75, 250);
  
  //Hours
  fill(58, 71, 89);
  ellipse(mainx+20*xoutfactor, mainy, 175, 200);
  rect(mainx+20*xoutfactor,mainy-100,20*xoutfactor,200);
  fill(125, 168, 237);
  ellipse(mainx+40*xoutfactor, mainy, 175, 200);

  fill(0,255,255);
  ellipse(mainx+40*xoutfactor, mainy, 131.25, 150);
  
  //Alarm
  fill(58, 71, 89);
  ellipse(mainx+40*xoutfactor, mainy, 87.5, 100);
  rect(mainx+40*xoutfactor,mainy-50,20*xoutfactor,100);
  fill(168, 202, 255);
  ellipse(mainx+60*xoutfactor, mainy, 87.5, 100);
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
