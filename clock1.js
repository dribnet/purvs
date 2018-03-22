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
    angleMode(DEGREES);
  push()
  translate(150, -150);
  rotate(30)
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
  pop()
  push()
  fill(255,0,0,80)
  translate(CANVAS_WIDTH/2,CANVAS_HEIGHT/2)
  rotate(-30)
  ellipse(0,0, 20)
  ellipse(0,20,20)
  ellipse(0,40,20)
  ellipse(0,60,20)
  ellipse(0,80,20)
  ellipse(0,100,20)
  ellipse(0,120,20)
  ellipse(0,140,20)
  ellipse(0,160,20)
  ellipse(0,180,20)
  ellipse(20,0,20)
  ellipse(40,0,20)
  ellipse(60,0,20)
  ellipse(80,0,20)
  ellipse(100,20,20)
  ellipse(100,40,20)
  ellipse(100,60,20)
  ellipse(80,80,20)
  ellipse(60,80,20)
  ellipse(40,80,20)
  ellipse(20,80,20)

  ellipse(140,0, 20)
  ellipse(140,20, 20)
  ellipse(140,40, 20)
  ellipse(140,60, 20)
  ellipse(140,80, 20)
  ellipse(140,100, 20)
  ellipse(140,120, 20)
  ellipse(140,140, 20)
  ellipse(140,160, 20)
  ellipse(140,180, 20)

  ellipse(160,20, 20)
  ellipse(180,40, 20)
  ellipse(200,60, 20)
  ellipse(220,40, 20)
  ellipse(240,20, 20)

  ellipse(260,0, 20)
  ellipse(260,20, 20)
  ellipse(260,40, 20)
  ellipse(260,60, 20)
  ellipse(260,80, 20)
  ellipse(260,100, 20)
  ellipse(260,120, 20)
  ellipse(260,140, 20)
  ellipse(260,160, 20)
  ellipse(260,180, 20)




  pop()
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
