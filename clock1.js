const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
  pixelDensity(1);

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {

  background(204); // light gray background
  // loadPixels();
  // for (var i = 0; i < height; i++){
  //   for (var j = 0; j < width; j++){
  //     var index = (i + j * 1000)*4;
  //     pixels[index+0] = 120;
  //     pixels[index+1] = i;
  //     pixels[index+2] = 255;
  //     pixels[index+3] = j;
  //   }
  // }

  // updatePixels();

  strokeWeight(1); // Stroke weight to 8 pixels
  //oldclocks
  ellipse(width/2, height/2, 300, 300);

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
