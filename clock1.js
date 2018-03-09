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
  background(60); // light gray background
  noFill ();
  strokeWeight(3);
  stroke (255, 0, 0);

  //for (let i = -100; i <= 100; i = i+50) {
    //ellipse(width/2, height/2+i. 40, 40);
     //}
  //red 4
  
  ellipse(480, 100, 25, 25);
  ellipse(480, 150, 25, 25);
  ellipse(480, 200, 25, 25);
  ellipse(480, 250, 25, 25);
  ellipse(480, 300, 25, 25);
  ellipse(480, 350, 25, 25);
  ellipse(480, 400, 25, 25);

  ellipse(530, 300, 25, 25);
  ellipse(580, 300, 25, 25);

  ellipse(430, 300, 25, 25);
  ellipse(380, 300, 25, 25);
  ellipse(330, 300, 25, 25);

  ellipse(355, 250, 25, 25);
  ellipse(395, 200, 25, 25);
  ellipse(435, 150, 25, 25);

  //yellow 4

  stroke(255, 255, 0);

  ellipse(330, 100, 25, 25);
  ellipse(330, 150, 25, 25);
  ellipse(330, 200, 25, 25);
  ellipse(330, 250, 25, 25);
  ellipse(330, 300, 25, 25);
  ellipse(330, 350, 25, 25);
  ellipse(330, 400, 25, 25);

  ellipse(380, 300, 25, 25);
  ellipse(430, 300, 25, 25);

  ellipse(280, 300, 25, 25);
  ellipse(230, 300, 25, 25);
  ellipse(180, 300, 25, 25);

  ellipse(205, 250, 25, 25);
  ellipse(245, 200, 25, 25);
  ellipse(285, 150, 25, 25);

  //blue 4

  stroke (0, 0, 255);

  ellipse(630, 100, 25, 25);
  ellipse(630, 150, 25, 25);
  ellipse(630, 200, 25, 25);
  ellipse(630, 250, 25, 25);
  ellipse(630, 300, 25, 25);
  ellipse(630, 350, 25, 25);
  ellipse(630, 400, 25, 25);

  ellipse(680, 300, 25, 25);
  ellipse(730, 300, 25, 25);

  ellipse(580, 300, 25, 25);
  ellipse(530, 300, 25, 25);
  ellipse(480, 300, 25, 25);

  ellipse(505, 250, 25, 25);
  ellipse(545, 200, 25, 25);
  ellipse(585, 150, 25, 25);








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
