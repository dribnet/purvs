const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// the draw functions of my clock
function draw () {

  var elipWidth = 50;
  var c = color(255, 204, 0);

  background(200); // light gray background
  strokeWeight(0); // Stroke weight to 0 pixels


  //Creates template circles (WILL BE DELETED!!! Just used to help guide the actual code)
  
  //Template ends

  push();
  translate(150,150);
  fill(c);

  for (let columns = 0; columns<3; columns++){
    for (let row = 0; row<2; row++){
    ellipse(0, 0, elipWidth);
    translate(100,0);
    }
    translate(-200,100);
  }
  pop();
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
