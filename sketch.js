let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let sourceFile = "my_input1.jpg";
let maskFile = "my_mask1.png";
let outputFile = "artwork_3.png";
let customPixel;

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}
let drawer;
function setup() {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');
  img = loadImage('dansHead.png');
  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  drawers = []
  for (var i = 0; i < 200; i++) {
    drawers.push(new Painter(sourceImg));
  }
  painter = new Painter(sourceImg);
  console.log(sourceImg.get(0, 0));
  fill(255, 0, 0)
  ellipse(0, 0, 5, 5)
  console.log(get(0, 0))
}

class Painter {

  constructor(sourceImg) {
    this.r = 8;
    this.sourceImg = sourceImg;
    this.velocity = p5.Vector.random2D();
    this.accel = createVector(0, 0);
    this.position = this.initStartingPosition();
    // this.initColour = sourceImg.get(sourceImg.width / 2, sourceImg.height / 2);
    this.isPainting = true;

  }

  initStartingPosition() {
    let foundStartingPosition = false;
    let possiblePosition;
    while (!foundStartingPosition) {
      possiblePosition = createVector(random(0, sourceImg.width), random(0, sourceImg.height));
      //check if this area has already been coloured.
      let colourAtPos = get(possiblePosition.x, possiblePosition.y);
      if (colourAtPos[0] === 255 && colourAtPos[1] === 255 && colourAtPos[2] === 255) {
        //found a valid starting point.
        foundStartingPosition = true;
        break;
      }
    }
    return possiblePosition;
  }

  /**
   * Responsible for moving our Drawer
   */
  update() {
    if (this.isPainting) {
      this.accel = p5.Vector.random2D();
      this.velocity.add(this.accel);
      this.position.add(this.velocity);
    }

    this.velocity.limit(5);


    //TODO: when the painter leave the canvas stop him from drawing
    this.position.x = constrain(this.position.x, 0, width);
    this.position.y = constrain(this.position.y, 0, height);
  }

  /**
   * Method is responsible for displaying Drawers pixel!
   * @param sourceImg used to get pixel value in image
   * @param maskImg 
   */
  show(sourceImg, maskImg) {
    noStroke();
    var px = floor(this.position.x);
    var py = floor(this.position.y);
    var col = sourceImg.get(px, py);
    let mask = maskImg.get(px, py); // corresponding x&y in the mask
    fill(col[0], col[1], col[2]);
    // if (mask[0] > 128) {
    ellipse(this.position.x, this.position.y, this.r, this.r);

    // }
    // else {
    // }
  }

}

let painter;

function draw() {

  drawers.forEach(drawer => {
    drawer.update();
    drawer.show(sourceImg, maskImg);
  })


  renderCounter = renderCounter + 1;
  if (renderCounter > 500) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
    saveArtworkImage(outputFile);
  }
}
