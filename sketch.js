const finalVersion = false;

      elementSpacing = 10;
      elementySpacing = 30;
      circleSize = 10;
      squareSize = 15;
  
  if (finalVersion) {
    elementSpacing = 10;
    elementySpacing = 30;
    circleSize = 25;
    squareSize = 15;
  }

//   pointSize = 40;
  
// if (finalVersion) {
//   pointSize = 20;
// }

      sourceImg=null;
      maskImg=null;
      renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
       main_canvas = createCanvas(1080, 1920);
  
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  scale(0.5);
  for( i=0;i<1080/elementSpacing;i++) {
          x = int(i * elementSpacing);
          y = int(renderCounter * elementySpacing);
          dx = floor(random(elementSpacing/2));
          dy = floor(random(elementySpacing/2));
    x = x + dx;
    y = y + dy;
          pix = sourceImg.get(x, y);
          mask = maskImg.get(x, y);
          halfSize = squareSize/2;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, circleSize, circleSize);
    }
    else {
      rect(x-halfSize, y-halfSize, squareSize, squareSize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacing) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
