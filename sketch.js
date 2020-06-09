let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// CHANGE FOR APPROPIATE IMAGE
let sourceFile = "input_3.jpg";
let maskFile = "mask_3.png";
let outputFile = "output_3.png";

// PROCESS SHOWING IMAGE
function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 5;
const tileWidth = 5;
const x_step = 5;
const y_step = 5;

// DARWING PATTERN AND DESIGN
function draw() {
  // BACKGROUND
  for (var x = 0; x < sourceImg.width; x = x + x_step) {
    for (var y = 0; y < sourceImg.height; y = y + y_step) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      // BLACK MASK (BACKGROUND)
      if (mask[0] == 0) {
        strokeWeight(2);
        let pixMod = sourceImg.get(x, y);
        let satDivision = 1.8; // HOW MUCH ORIGINAL SATURATION TO BE DIVIDED BY
        let myColour = color(pix[0], pix[1], pix[2]); // ORGINAL COLOUR FROM CANVAS
        let HUE = hue(myColour);
        let SAT = saturation(myColour) / satDivision; // EXTRACT SAT & DIVIDES BY A NUMBER TO MAKE IT SMALLER
        let BRIGHT = brightness(myColour); // EXTRACTS BRIGHTNESS
        colorMode(HSB);
        let desatColour = color(HUE, SAT, BRIGHT); // CREATES NEW COLOUR WITH HSB
        stroke(desatColour);
        noFill();
        triangle(x, y, x + tileWidth * 4, y + tileHeight * 4, x - tileWidth * 5, y + tileHeight * 3);
        colorMode(RGB, 255);
      }
      // (GIRL) THIS IS THE COLOUR OF THE GIRL TO HIDE ANY WHITE LINES FROM THE MASKS
      else {
        noStroke();
        fill(pix[0], pix[1], pix[2], 50);
        rect(x, y, tileWidth, tileHeight);
      }
    }
  }
  // HAIR
  for (var x = 0; x < sourceImg.width; x = x + x_step) {
    for (var y = 0; y < sourceImg.height; y = y + y_step) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      // GREY MASK (HAIR)
      if (mask[0] == 195) {
        drawWaves(x, y, 15, 15, pix);
      }
    }
  }
  // SKIN
  for (var x = 0; x < sourceImg.width; x = x + x_step) {
    for (var y = 0; y < sourceImg.height; y = y + y_step) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      // WHITE MASK (SKIN)
      if (mask[0] > 200) {
        stroke(pix);
        fill(pix);
        strokeWeight(1);
        ellipse(x, y, tileWidth - 0.5, tileHeight - 0.5);
        ellipse(x + 3, y + 3, tileWidth - 0.5, tileHeight - 0.5);
      }
    }
  }
  // OUTLINE OF GIRL
  for (var x = 0; x < sourceImg.width; x = x + x_step + 14) {
    for (var y = 0; y < sourceImg.height; y = y + y_step + 14) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      // WHITE MASK (SKIN)
      if (mask[0] == 55) {
        stroke(pix);
        fill(pix);
        strokeWeight(1);
        drawSadFace(x, y, 3, 240);
      } else if (mask[0] == 60) {
        drawUpsetFace(x, y, 3, 240);
      } else if (mask[0] == 70) {
        drawHappyFace(x, y, 3, 240);
      }
    }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 5) {
    console.log("Done!")
    noLoop();
    // UNCOMMENT TO SAVE
    //saveArtworkImage(outputFile);
  }
}

function drawSadFace(x, y, size, c) {
  push()
  fill(c);
  noStroke();
  ellipse(x + 4, y + 5, size, size) // LEFT EYE
  ellipse(x + 11, y + 5, size, size) // RIGHT EYE
  stroke(c);
  strokeWeight(1)
  noFill()
  arc(x + 8, y + 10, size + 2, size, 180, 0); // FROWN
  ellipse(x + 7.5, y + 7, size + 12, size + 12) // FACE OULTINE
  pop()
}

function drawUpsetFace(x, y, size, c) {
  push();
  fill(c);
  noStroke();
  ellipse(x + 4, y + 5, size, size) // LEFT EYE
  ellipse(x + 11, y + 5, size, size) // RIGHT EYE
  stroke(c);
  strokeWeight(1);
  noFill();
  line(x + 4, y + 9, x + 11, y + 9); // MOUTH
  ellipse(x + 7.5, y + 7, size + 12, size + 12); // FACE OULTINE
  pop();
}

function drawHappyFace(x, y, size, c) {
  push()
  fill(c);
  noStroke();
  ellipse(x + 4, y + 5, size, size) // LEFT EYE
  ellipse(x + 11, y + 5, size, size) // RIGHT EYE
  stroke(c);
  strokeWeight(1);
  noFill();
  arc(x + 8, y + 10, size + 2, size, 0, 180); // SMILE
  ellipse(x + 7.5, y + 7, size + 12, size + 12) // FACE OULTINE
  pop();
}

function drawWaves(x, y, sizeW, sizeH, c) {
  push();
  angleMode(DEGREES);
  stroke(c)
  strokeWeight(2)
  noFill();
  arc(x, y, sizeW, sizeH, 0, 90);
  arc(x + 30, y - 20, sizeW, sizeH, 0, 90);
  arc(x + 30, y - 15, sizeW, sizeH, 180, 270);
  arc(x - 10, y - 10, sizeW, sizeH, 330, 70);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
