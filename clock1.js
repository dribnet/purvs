const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
for(i=0; i<300;i++){

  rect(random(0,CANVAS_WIDTH), random(0,CANVAS_HEIGHT),20, 20)
}
}

// Update this function to draw you own maeda clock
function draw () {
  background(40);
  fill(210, 210, 210, 160);
  strokeWeight(0.5)
  noStroke(255)

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
  ellipse(300+160, 250, 20)
  ellipse(320+160, 250, 20)
  ellipse(340+160, 230, 20)
  ellipse(340+160, 210, 20)
  ellipse(300+160, 190, 20)
  ellipse(320+160, 190, 20)
  ellipse(280+160, 190, 20)
  ellipse(260+160, 210, 20)
  ellipse(340+160, 270, 20)
  ellipse(340+160, 290, 20)
  ellipse(320+160, 310, 20)
  ellipse(300+160, 310, 20)
  ellipse(280+160, 310, 20)
  ellipse(260+160, 290, 20)
  
  ellipse(300+280, 250, 20)
  ellipse(320+280, 250, 20)
  ellipse(340+280, 230, 20)
  ellipse(340+280, 210, 20)
  ellipse(300+280, 190, 20)
  ellipse(320+280, 190, 20)
  ellipse(280+280, 190, 20)
  ellipse(260+280, 210, 20)
  ellipse(340+280, 270, 20)
  ellipse(340+280, 290, 20)
  ellipse(320+280, 310, 20)
  ellipse(300+280, 310, 20)
  ellipse(280+280, 310, 20)
  ellipse(260+280, 290, 20)
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
