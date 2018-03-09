const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

var h = hour();
var m = minute();
var s = second();

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  rectMode(CENTER);
  if (hour()>12) {
    h=hour()-12;
  } else {
    h=hour();
  }
  if (minute()<10) {
    m='0'+minute();
  } else {
    m=minute();
  }
  m = minute();
  s = second();
  background(127);

  translate(CANVAS_WIDTH/2,CANVAS_HEIGHT/2)
  fill(0)
  textSize(200);
  text(h,-50,75);
  textSize(150);
  fill(255)
  text(m,-80,50);
  textSize(100);
  fill(255,0,0)
  text(s,-60,30);
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
