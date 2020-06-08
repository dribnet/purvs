let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile = "mask_3.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let tilewidth = 10
let tileheight = 10



function draw() {

  for (var x = 0; x < sourceImg.width; x = x + tilewidth) {
    beginShape()
    for (var y = 0; y < sourceImg.height; y = y + tileheight) {

      let pix = sourceImg.get(x, y)
      console.log(pix)

      noStroke()
      fill(pix)

      ellipse(x + (960 - x) / (pix[0] / 5), y + (320 - y) / (pix[0] / 5), 2, 2)
    }
    endShape()
  }
  for (var y = 0; y < sourceImg.height; y = y + tileheight) {

    beginShape()
    for (var x = 0; x < sourceImg.width; x = x + tilewidth) {

      let pix = sourceImg.get(x, y)
      let mask = maskImg.get(x, y);
      console.log(pix)
      strokeWeight(.05)




      if (mask[0] == !255) {
        stroke(pix)
        noFill()
        beginShape()
        pix = sourceImg.get(x, y)
        vertex(x + (960 - x) / (pix[0] / 5), y + (320 - y) / (pix[0] / 5))
        pix = sourceImg.get(x + tileheight, y)
        vertex(x + tileheight + (960 - (x - tileheight)) / (pix[0] / 5), y + (320 - y) / (pix[0] / 5))
        pix = sourceImg.get(x + tileheight, y + tileheight)
        vertex(x + tileheight + (960 - (x - tileheight)) / (pix[0] / 5), y + tileheight + (320 - (y + tileheight)) / (pix[0] / 5))
        pix = sourceImg.get(x, y + tileheight)
        vertex(x + (960 - x) / (pix[0] / 5), y + tileheight + (320 - (y + tileheight)) / (pix[0] / 5))
        endShape(CLOSE)

} else {
  fill(pix)
  strokeWeight(.5)
stroke(0)

        beginShape()
        pix = sourceImg.get(x, y)
        vertex(x + (960 - x) / (pix[0] / 5), y + (320 - y) / (pix[0] / 5))
        pix = sourceImg.get(x + tileheight, y)
        vertex(x + tileheight + (960 - (x - tileheight)) / (pix[0] / 5), y + (320 - y) / (pix[0] / 5))
        pix = sourceImg.get(x + tileheight, y + tileheight)
        vertex(x + tileheight + (960 - (x - tileheight)) / (pix[0] / 5), y + tileheight + (320 - (y + tileheight)) / (pix[0] / 5))
        pix = sourceImg.get(x, y + tileheight)
        vertex(x + (960 - x) / (pix[0] / 5), y + tileheight + (320 - (y + tileheight)) / (pix[0] / 5))
        endShape(CLOSE)
      }
      endShape()
    }
}
  renderCounter = renderCounter + 1;
  if (renderCounter > 15) {
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
z_
