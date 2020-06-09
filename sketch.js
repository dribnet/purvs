let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  rectMode(CENTER);
}

let xstep = 5;
let ystep = 5;
function draw() {
  //noLoop();
  angleMode(DEGREES);
  for (var x = 0; x < sourceImg.width; x = x + xstep) {
    for (var y = 0; y < sourceImg.height; y = y + ystep) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
     if (mask[0] > 100) {
        stroke(pix);

        let randAngle = floor(random(360));
        let rand = floor(random(-15, 15));
        let randWeight = floor(random(3));
        strokeWeight(randWeight);
        let rand1 = floor(random(-25, 25));
        let rand2 = floor(random(-25, 25));
        push();
        translate(x,y);
        rotate(randAngle);
        bezier(0, 0, rand1, rand1, rand2, rand2, rand,rand);
        pop();
      } else {
        stroke(0);
        line(x, y, x-10, y);
      }
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 5) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
     saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
