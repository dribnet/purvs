//Code for my mask layers referenced from Hansol Gal's work
//Code also referenced from Phoebe's code

let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile = "mask_3.png";
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(232, 189, 242); //light purple
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw() {
  for (let i = 0; i < 5000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);


    if (mask[0] >= 0 && mask[0] < 201) { //Black mask - background
      let pointSize = 15;
      push();
      strokeWeight(12);
      stroke(pix[0] + 50, pix[1] + 25, pix[2] + 20, 10);
      line(x, y, x + pointSize - 10, y + 10);
      pop();
    } else if (mask[0] >= 201 && mask[0] < 255) { //Grey - outline of leaves
      let pointSize = 10;
      push();
      noFill();
      stroke(pix[0] + 70, pix[1] + 70, pix[2] + 70);
      strokeWeight(3);
      arc(x, y, pointSize, pointSize, HALF_PI, PI);
      pop();
    } else { //white - details inside leaves
      let pointSize = 10;
      push();
      noFill();
      stroke(pix[0] + 90, pix[1] + 60, pix[2] + 60);
      strokeWeight(5);
      arc(x, y, pointSize, pointSize, HALF_PI, PI);
      pop();
      push();
      line(x, y, x + pointSize - 10, y + 10); //adds more colour depth
      pop();
      drawBlock(x, y, 3, pix); //adds depth and makes leaves look more detailed
    }
  }

  //Layer 2
  //Code of background mask & sub detail(grey mask) mask details
  for (var x2 = 0; x2 < sourceImg.width; x2 = x2 + x_step) {
    for (var y2 = 0; y2 < sourceImg.height; y2 = y2 + y_step) {
      let pix = sourceImg.get(x2, y2);
      let mask = maskImg.get(x2, y2);

      var tileHeight = 5;
      var tileWidth = 5;

      var x_step = 10;
      var y_step = 8;
      noStroke();

      if (mask[0] >= 0 && mask[0] < 150) { //Black mask - background
        fill(pix[0] + 190, pix[1] + 100, pix[2] + 50);
        ellipse(x2, y2, tileWidth, tileHeight); //circle detail
      } else if (mask[0] >= 201 && mask[0] < 250) { //Grey - outline of leaves
        push();
        var tileHeight = 5;
        var tileWidth = 18;
        var x_step = 9;
        var y_step = 10;
        fill(pix[0] + 100, pix[1] + 100, pix[2] + 250, 190);
        ellipse(x2, y2, tileWidth, tileHeight); //line detail
        pop();
      }
    }
  }

  function drawBlock(x, y, size, pixelCol) { //For small additional detail to leaves
    fill(pixelCol);
    push();
    rect(x, y, size, 3);
    pop();
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 28) {
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
