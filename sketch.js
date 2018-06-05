let sourceImg=null;
let maskImg=null;
let renderCounter=0;

//Image and mask loader
function preload() {
  sourceImg = loadImage("z_input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

//size and spacing of pixels
let pointSize = 40;
let elementSpacing = 20;
let squareSize = 20;
let circleSize = 30

function draw () {
  for(let i=0;i<1180/elementSpacing;i++) {
    //random element for nature
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    let x = i * elementSpacing;
    let y = renderCounter * elementSpacing;
    //colour
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = 50;
    fill(pix);

    //Nature
    if(mask[0] == 0) {
      noStroke();
      x = x + dx;
      y = y + dy;
      ellipse(x-50, y-50, circleSize, circleSize);
    }
    //Clothes
    else if(mask[0] == 255){
      push();
      fill(0);
      rect(x-halfSize, y-halfSize, squareSize, squareSize);
      pop();
      strokeWeight(2);
      stroke(pix);
      noFill();
      ellipse(x-halfSize+10, y-halfSize+10, squareSize/2, squareSize/2);
      ellipse(x-halfSize+5, y-halfSize+5, squareSize/2, squareSize/2);
      ellipse(x-halfSize+15, y-halfSize+5, squareSize/2, squareSize/2);
      ellipse(x-halfSize+5, y-halfSize+15, squareSize/2, squareSize/2);
      ellipse(x-halfSize+15, y-halfSize+15, squareSize/2, squareSize/2);
    }
    //skin
    else if(mask[0]>0 && mask[0]<100){
      noStroke();
      fill(pix);
      rect(x-halfSize-5, y-halfSize, squareSize+2.5, squareSize+2.5);
    }
    //fur and hair
    else if(mask[0]>100 && mask[0]<150){
      strokeWeight(3);
      stroke(pix);
      noFill();
      arc(x-halfSize+35, y-halfSize+16, circleSize+20, circleSize+25, PI, PI + QUARTER_PI);
      arc(x-halfSize+37, y-halfSize+24, circleSize+20, circleSize+25, PI, PI + QUARTER_PI);
      arc(x-halfSize+33, y-halfSize+22, circleSize+20, circleSize+25, PI, PI + QUARTER_PI);
      arc(x-halfSize+30, y-halfSize+14, circleSize+20, circleSize+25, PI, PI + QUARTER_PI);
      arc(x-halfSize+39, y-halfSize+20, circleSize+20, circleSize+25, PI, PI + QUARTER_PI);
      arc(x-halfSize+31, y-halfSize+18, circleSize+20, circleSize+25, PI, PI + QUARTER_PI);
      arc(x-halfSize+27, y-halfSize+14, circleSize+20, circleSize+25, PI, PI + QUARTER_PI);
      arc(x-halfSize+29, y-halfSize+20, circleSize+20, circleSize+25, PI, PI + QUARTER_PI);
      arc(x-halfSize+25, y-halfSize+18, circleSize+20, circleSize+25, PI, PI + QUARTER_PI);
      arc(x-halfSize+23, y-halfSize+14, circleSize+20, circleSize+25, PI, PI + QUARTER_PI);
      arc(x-halfSize+21, y-halfSize+20, circleSize+20, circleSize+25, PI, PI + QUARTER_PI);
     
    }
    //background/other
    else {
      noStroke();
      fill(pix);
      beginShape();
      vertex(x-halfSize, y-halfSize);
      vertex(x-halfSize-20, y-halfSize+20);
      vertex(x-halfSize, y-halfSize+40);
      vertex(x-halfSize+20, y-halfSize+20);
      endShape();
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter * elementSpacing > 2020) {
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
