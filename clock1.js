const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
  angleMode(DEGREES);
  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background('black');
  translate(460,260);
  rotate(second()*6);
  clo();
  function clo(){
    textSize(70);
    fill('gray');
    text(second(),-20,20);
    textSize(30);
    fill('white');
    text(hour(),20,-140);
    fill('red');
    text(':',30,-170);
    fill('white');
    text(minute(),20,-200);
  }
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
