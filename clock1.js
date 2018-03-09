const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
angleMode(DEGREES);

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  var s = second();
  var m = minute();
  var h = hour();
  //var t = h 
  //print(s);
  //print(h);
  background(30); //black background
  translate(width/2,height/2)
  let theta = map(s, 0, 60, 360, 0);
  rotate(theta);
  fill(255,255,255,50)
  textAlign(CENTER);
  textSize(50);
  if (h > 11){
  text('PM', 0, 0);
} else {
  text('AM', 0, 0);
}
  textSize(50);
  fill(255);
  text(h, 100,0);
  fill(255,0,0);
  text(':',140,0);
  fill(255);
  text(m,180,0);
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
