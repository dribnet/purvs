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
  background(204); // light gray background
  fill(20, 20, 20, 160);
  strokeWeight(0.5)
  stroke(255)
  //quad(width/2, 200, width/2, 400, 330, 350, 330, 150)
  //quad(width/2, 200, width/2, 400, 630, 350, 630, 150)
  //quad(width/2, 200, 630, 150,width/2, 100, 330, 150)

  ellipse(300, 250, 20)
  ellipse(320, 250, 20)
  ellipse(340, 230, 20)
  ellipse(340, 210, 20)
  ellipse(300, 190, 20)
  ellipse(320, 190, 20)
  ellipse(280, 190, 20)
  ellipse(260, 210, 20)
  ellipse(340, 270, 20)
  ellipse(340, 290, 20)
  ellipse(320, 310, 20)
  ellipse(300, 310, 20)
  ellipse(280, 310, 20)
  ellipse(260, 290, 20)
//3
  ellipse(380, 210, 20)
  ellipse(380, 290, 20)
//:
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
