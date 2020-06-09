let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
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
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw() {

  // Sets resolution of the grid
  let gridsize = 10

  // Sets size of the ellipse
  let circsize = 2

  // Sets stroke weight of the grid where the mask is Black
  let gridWeightB = .05

  // Sets stroke weight of the grid where the mask is white
  let gridWeightW = .5

  // Defines a singular pixel
  function draw_Pixel() {

    // Defines the centre of the image
    let xcentre = 960
    let ycentre = 320

    // Determines the strength of parallax
    let paraStrength = 5

    // Draws a given 'square' of the grid, each vertices position is drawn in relation to its red value. The lesser value of red, and the further away from the centre of the image, the greater the strength of parallax.
    beginShape()
    pix = sourceImg.get(x, y)
    vertex(x + (xcentre - x) / (pix[0] / paraStrength), y + (ycentre - y) / (pix[0] / paraStrength))
    pix = sourceImg.get(x + gridsize, y)
    vertex(x + gridsize + (xcentre - (x - gridsize)) / (pix[0] / paraStrength), y + (ycentre - y) / (pix[0] / paraStrength))
    pix = sourceImg.get(x + gridsize, y + gridsize)
    vertex(x + gridsize + (xcentre - (x - gridsize)) / (pix[0] / paraStrength), y + gridsize + (ycentre - (y + gridsize)) / (pix[0] / paraStrength))
    pix = sourceImg.get(x, y + gridsize)
    vertex(x + (xcentre - x) / (pix[0] / paraStrength), y + gridsize + (ycentre - (y + gridsize)) / (pix[0] / paraStrength))
    endShape(CLOSE)
  }

  // Draws the pixel in the grid
  for (var y = 0; y < sourceImg.height; y = y + gridsize) {
    for (var x = 0; x < sourceImg.width; x = x + gridsize) {

      // Defines the colour of a given pixel of the input image
      let pix = sourceImg.get(x, y)

      // Defines the colour of a given pixel of the mask image
      let mask = maskImg.get(x, y);

      // If the mask is black...
      if (mask[0] == 0) {

        // Sets the pixel to draw with only a stroke and in the colour of the input image
        noFill()
        strokeWeight(gridWeightB)
        stroke(pix)

        // Draws the pixel
        draw_Pixel()

        // Sets the ellipse to draw with only a fill and in the colour of the input image
        noStroke()
        fill(pix)

        // Draws the ellipse at each vertice of the pixel
        ellipse(x + (960 - x) / (pix[0] / 5), y + (320 - y) / (pix[0] / 5), circsize, circsize)

        // If the mask is not black...
      } else {

        // Sets the pixel to draw with a black stroke and with a fill in the colour of the input image
        fill(pix)
        strokeWeight(gridWeightW)
        stroke(0)

        // Draws the pixel
        draw_Pixel()

        // Sets the ellipse to draw with a black fill and no stroke
        noStroke()
        fill(0)

        // Draws the ellipse at each vertice of the pixel
        ellipse(x + (960 - x) / (pix[0] / 5), y + (320 - y) / (pix[0] / 5), circsize, circsize)
      }
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
