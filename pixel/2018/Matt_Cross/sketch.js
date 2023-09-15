let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let triSize = 10;
let triSize2 = 7;
let elementSpacing = 12.5;
let squareSize = 12.5
let circleSize = 2
let banSize = 16

function Ban (x, y, s) {
push();
translate(x, y);
scale(s);
stroke(255);
ellipse(-50, -50, 100)
fill(255);
arc(-55, -45, 70, 70, 50, 230, CHORD)
arc(-45, -55, 70, 70, 230, 50, CHORD)

pop();
}

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let x2 = floor(random(sourceImg.width));
    let y2 = floor(random(sourceImg.height));
    let x = i * elementSpacing;
    let y = renderCounter * elementSpacing;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let mask2 = maskImg.get(x2, y2);
    let trix1 = floor(random(sourceImg.width));
    let triy1 = floor(random(sourceImg.height));
    let trix2 = floor(random(sourceImg.width));
    let triy2 = floor(random(sourceImg.height));
    let trix3 = floor(random(sourceImg.width));
    let triy3 = floor(random(sourceImg.height));

   
    let halfSize = squareSize/2;
    fill(pix);
    push();
    // Creates the outer randomly placed squares.
    if(mask2[0] < 85) {
      push();
      // rect(x2, y2, squareSize, squareSize);
      // ellipse(x2, y2, banSize);
      Ban(x2, y2, banSize/100);

      pop();

      pop();


    }
    // Creates the triangles that act as a type of stroke for the mask inbetween the circles and squares.
    if(mask[0] > 85 && mask[0] < 170) {

      triangle(x, y+10, x-triSize, y-triSize, x+triSize, y-triSize);

    // Makes the triangles shrink in size as the render goes on.
      if(triSize > 2){

        triSize = triSize - 0.01;
}
          else(triSize = 2);

    }
    // Creates the main body of circles that make up the inner image.
    if(mask[0] > 170){

      ellipse(x, y, circleSize);

    // Makes the circles grow in size as the render goes on to get a type of fizz effect.
      if(circleSize < 15){

      circleSize = circleSize + 0.008;
}
        else(circleSize = 15);
        



    }

  }
  renderCounter = renderCounter + 1;
  if(renderCounter*elementSpacing > 1920) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }    
  console.log(1*renderCounter);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
