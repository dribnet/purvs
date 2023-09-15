let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(100);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  rectMode(CENTER);
}

let xstep = 5;
let ystep = 5;
function draw() {
  //noLoop();
  for (var x = 0; x < sourceImg.width; x = x + xstep) {
    for (var y = 0; y < sourceImg.height; y = y + ystep) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
     if (mask[0] > 100) {
        stroke(pix);
        let randAngle = floor(random(360));
        let randLength = floor(random(-15, 15));
        let randWeight = floor(random(3));
        strokeWeight(randWeight);
        push();
        translate(x,y);
        rotate(randAngle);
        line(0, 0, randLength,randLength);
        pop();
      }
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
