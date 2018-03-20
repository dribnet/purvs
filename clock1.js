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
  background(176,196,222); 
  // light gray background
  fill(255);
  noStroke();
  rect(400,200,20,20);
  rect(400,220,20,20);
  rect(400,240,20,20);
  rect(400,260,20,20);
  rect(400,280,20,20);
  rect(400,300,20,20);
  rect(400,320,20,20); 
  rect(400,340,20,20);

  rect(420,300,20,20);
  rect(380,300,20,20);
  rect(360,300,20,20);
  rect(340,300,20,20);
  rect(320,300,20,20);
  rect(320,280,20,20);
  rect(340,260,20,20);
  rect(360,240,20,20);
  rect(380,220,20,20);

  rect(600,250,10,10);
  rect(600,260,10,10);
  rect(600,270,10,10);
  rect(600,280,10,10);
  rect(600,290,10,10);
  rect(600,300,10,10);

  rect(610,280,10,10);
  rect(590,280,10,10);
  rect(580,280,10,10);
  rect(570,280,10,10);
  // rect(560,280,10,10);
  rect(570,270,10,10);
  rect(580,260,10,10);
  rect(590,250,10,10);
  rect(600,240,10,10);

  rect(640,240,10,10);
  rect(650,240,10,10);
  rect(660,240,10,10);
  rect(630,250,10,10);
  rect(630,260,10,10);
  rect(640,270,10,10);
  rect(650,270,10,10);
  rect(650,270,10,10);
  rect(660,270,10,10);
  rect(670,250,10,10);
  rect(670,260,10,10);

  rect(670,280,10,10);
  rect(670,290,10,10);
  rect(630,280,10,10);
  rect(630,290,10,10);
  rect(640,300,10,10);
  rect(650,300,10,10);
  rect(660,300,10,10);
  

  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  //rect(500, 280, 260, 20);
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
