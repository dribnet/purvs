const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
let a = 280;
let b = 320;
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(204); // light gray background
  strokeWeight(0.5); // Stroke weight to 8 pixels
  fill(46);

  //first number 4
  //vertical line of circles for the "4"
  ellipse(a, 100, 40, 40);
  ellipse(a, 141, 40, 40);
  ellipse(a, 182, 40, 40);
  ellipse(a, 223, 40, 40);
  ellipse(a, 264, 40, 40);
  ellipse(a, 305, 40, 40);
  ellipse(a, 346, 40, 40);
  //horizontal line of circles for the "4"
  ellipse(160, 264, 40, 40);
  ellipse(200, 264, 40, 40);
  ellipse(240, 264, 40, 40);
  ellipse(320, 264, 40, 40);
  //circles to finish the "4"
  ellipse(239, 139, 40, 40);
  ellipse(160, 223, 40, 40);
  ellipse(200, 182, 40, 40);

  //circles for the time dots
  ellipse(400, 141, 40, 40);
  ellipse(400, 305, 40, 40);

  //second 4
  //vertical line of circles for the "4"
  ellipse(a+b, 100, 40, 40);
  ellipse(a+b, 141, 40, 40);
  ellipse(a+b, 182, 40, 40);
  ellipse(a+b, 223, 40, 40);
  ellipse(a+b, 264, 40, 40);
  ellipse(a+b, 305, 40, 40);
  ellipse(a+b, 346, 40, 40);
  //horizontal line of circles for the "4"
  ellipse(160+b, 264, 40, 40);
  ellipse(200+b, 264, 40, 40);
  ellipse(240+b, 264, 40, 40);
  ellipse(320+b, 264, 40, 40);
  //circles to finish the "4"
  ellipse(239+b, 139, 40, 40);
  ellipse(160+b, 223, 40, 40);
  ellipse(200+b, 182, 40, 40);

//number 5
//horizontal top line
ellipse(730, 100, 40, 40);
ellipse(771, 100, 40, 40);
ellipse(812, 100, 40, 40);
ellipse(853, 100, 40, 40);
ellipse(894, 100, 40, 40);
//joining dot for two horizontal lines
ellipse(730, 141, 40, 40);
//second horizontal line
ellipse(730, 182, 40, 40);
ellipse(771, 182, 40, 40);
ellipse(812, 182, 40, 40);
ellipse(853, 182, 40, 40);
//vertical line
ellipse(894, 223, 40, 40);
ellipse(894, 264, 40, 40);
ellipse(894, 305, 40, 40);
//last horizontal line
ellipse(853, 345, 40, 40);
ellipse(812, 345, 40, 40);
ellipse(771, 345, 40, 40);
//last dot for number 5
ellipse(730, 305, 40, 40);
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
