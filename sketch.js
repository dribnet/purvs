const finalVersion = false;

      elementSpacing = 22;
      circleSize = 20;
      squareSize = 20;
  
  if (finalVersion) {
    elementSpacing = 20;
    circleSize = 20;
    squareSize = 20;
  }

//   pointSize = 40;
  
// if (finalVersion) {
//   pointSize = 20;
// }

      sourceImg=null;
      maskImg=null;
      renderCounter=0;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  sourceImg2 = loadImage("input_2.2.jpg");
  maskImg = loadImage("mask_2.png");
}

function setup () {
       main_canvas = createCanvas(1080, 1920);
  
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(80);
  sourceImg.loadPixels();
  sourceImg2.loadPixels();
  maskImg.loadPixels();
}

function draw () {
scale(0.45);
  for( i=0;i<1080/elementSpacing;i++) {
          x = int(i * elementSpacing);
          y = int(renderCounter * elementSpacing);
    //       dx = floor(random(elementSpacing/2));
    //       dy = floor(random(elementSpacing/2));
    //       x1 = floor(random(sourceImg.width));
    //       y1 = floor(random(sourceImg.height));
    // x1 = x1 + dx;
    // y1 = y1 + dy;
    // x = x + dx;
    // y = y + dy;
          pix = sourceImg.get(x, y);
          pix2 = sourceImg2.get(x, y);
          mask = maskImg.get(x, y);
      
          halfSize = squareSize/2;
    fill(pix);
    stroke(pix2);
      strokeWeight(4);
    if(mask[0] > 128) {
      
      ellipse(x, y, circleSize, circleSize);
      line(x-12, y-12, x+12, y+12);
    }
    else {
      noFill();
      
      
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
