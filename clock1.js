const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
  background(204);

  var x;
  var y;
  for(let i = 0; i<300; i++){
    x = int(random(0, 96));
    y = int(random(0, 50));
    rect(x*10, y*10, 10, 10);
  }

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
   // light gray background
  strokeWeight(1); // Stroke weight to 8 pixels
  rect(20, 20, 10, 10);
  rect(20, 30, 10, 10);
  rect(30, 20, 10, 10);
  rect(30, 40, 10, 10);


  

  ellipse(480, 250, 10, 10);
  ellipse(490, 250, 10, 10);
  ellipse(500, 250, 10, 10);
  ellipse(510, 260, 10, 10);
  ellipse(510, 270, 10, 10);
  ellipse(500, 280, 10, 10);
  ellipse(490, 280, 10, 10);
  ellipse(480, 280, 10, 10);
  ellipse(470, 270, 10, 10);
  ellipse(470, 260, 10, 10);
  ellipse(470, 240, 10, 10);
  ellipse(470, 230, 10, 10);
  ellipse(480, 220, 10, 10);
  ellipse(490, 220, 10, 10);
  ellipse(500, 220, 10, 10);
  ellipse(510, 230, 10, 10);
  ellipse(510, 240, 10, 10);
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
