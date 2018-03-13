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

  //background(0); // light gray background
  loadPixels();
  for (var i = 0; i < height; i++){
    for (var j = 0; j < width; j++){
      var index = (i + j * 1000)*4;
      pixels[index+0] = 120;
      pixels[index+1] = i;
      pixels[index+2] = 255;
      pixels[index+3] = j;
    }
  }

  updatePixels();

  strokeWeight(2); // Stroke weight to 8 pixels
  //hour
  fill(255);
  ellipse(100, 100, 30, 30);
  ellipse(150, 100, 30, 30);
  ellipse(200, 100, 30, 30);
  ellipse(250, 100, 30, 30);
  ellipse(250, 150, 30, 30);
  ellipse(200, 200, 30, 30);
  ellipse(150, 250, 30, 30);
  ellipse(150, 300, 30, 30);
  ellipse(150, 350, 30, 30);
  //dot
  fill(0);
  ellipse(350, 150, 30, 30);
  ellipse(350, 300, 30, 30);
  //mins
  fill(255);
  ellipse(600, 100, 30, 30);
  ellipse(550, 100, 30, 30);
  ellipse(500, 150, 30, 30);
  ellipse(500, 200, 30, 30);
  ellipse(500, 250, 30, 30);
  ellipse(500, 300, 30, 30);
  ellipse(550, 350, 30, 30);
  ellipse(600, 350, 30, 30);
  ellipse(650, 150, 30, 30);
  ellipse(650, 200, 30, 30);
  ellipse(650, 250, 30, 30);
  ellipse(650, 300, 30, 30);
  //mins2nd
  ellipse(800, 100, 30, 30);
  ellipse(750, 100, 30, 30);
  ellipse(700, 150, 30, 30);
  ellipse(700, 200, 30, 30);
  ellipse(700, 250, 30, 30);
  ellipse(700, 300, 30, 30);
  ellipse(750, 350, 30, 30);
  ellipse(800, 350, 30, 30);
  ellipse(850, 150, 30, 30);
  ellipse(850, 200, 30, 30);
  ellipse(850, 250, 30, 30);
  ellipse(850, 300, 30, 30);

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
