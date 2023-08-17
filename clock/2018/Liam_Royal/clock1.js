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
  background(0, 0, 0); // light gray background
  stroke(255, 15, 15);
  strokeWeight(2); // Stroke weight to 8 pixels
  fill(251, 255, 68)

  // 4(1)
  ellipse(320, 250, 15, 15);
  ellipse(340, 250, 15, 15);
  ellipse(360, 250, 15, 15);
  ellipse(380, 250, 15, 15);
  ellipse(400, 250, 15, 15);
  ellipse(380, 270, 15, 15);
  ellipse(380, 290, 15, 15);
  ellipse(320, 230, 15, 15);
  ellipse(340, 210, 15, 15);
  ellipse(360, 190, 15, 15);
  ellipse(380, 170, 15, 15);
  ellipse(380, 190, 15, 15);
  ellipse(380, 210, 15, 15);
  ellipse(380, 230, 15, 15);

  // :
  ellipse(450, 190, 15, 15);
  ellipse(450, 270, 15, 15);

  //4(2)
  ellipse(500, 250, 15, 15);
  ellipse(520, 250, 15, 15);
  ellipse(540, 250, 15, 15);
  ellipse(560, 250, 15, 15);
  ellipse(580, 250, 15, 15);
  ellipse(560, 270, 15, 15);
  ellipse(560, 290, 15, 15);
  ellipse(500, 230, 15, 15);
  ellipse(520, 210, 15, 15);
  ellipse(540, 190, 15, 15);
  ellipse(560, 170, 15, 15);
  ellipse(560, 190, 15, 15);
  ellipse(560, 210, 15, 15);
  ellipse(560, 230, 15, 15);

  //8
  ellipse(620, 250, 15, 15);
  ellipse(620, 270, 15, 15);
  ellipse(640, 290, 15, 15);
  ellipse(660, 290, 15, 15);
  ellipse(680, 290, 15, 15);
  ellipse(700, 270, 15, 15);
  ellipse(700, 250, 15, 15);
  ellipse(640, 230, 15, 15);
  ellipse(660, 230, 15, 15);
  ellipse(680, 230, 15, 15);
  ellipse(620, 210, 15, 15);
  ellipse(620, 190, 15, 15);
  ellipse(700, 210, 15, 15);
  ellipse(700, 190, 15, 15);
  ellipse(640, 170, 15, 15);
  ellipse(660, 170, 15, 15);
  ellipse(680, 170, 15, 15);







  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  
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
