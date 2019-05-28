let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let sourceFile = "input_3.jpg";
let maskFile = "mask_3.png";
let outputFile = "artwork_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}
let drawer;
function setup() {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  drawers = []
  for (var i = 0; i < 200; i++) {
    drawers.push(new Drawer());
  }
}

class Drawer {
  constructor() {
    this.x = sourceImg.width / 2;
    this.y = sourceImg.height / 2;
    this.r = random(4, 32);
  }

  /**
   * Responsible for moving our Drawer
   */
  update() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  /**
   * Method is responsible for displaying Drawers pixel!
   * @param sourceImg used to get pixel value in image
   * @param maskImg 
   */
  show(sourceImg,maskImg) {
    noStroke();
    var px = floor(this.x);
    var py = floor(this.y);
    var col = sourceImg.get(px, py);
    let mask = maskImg.get(px, py); // corresponding x&y in the mask
    fill(col[0], col[1], col[2]);
    if (mask[0] > 128) {
      ellipse(this.x, this.y, this.r, this.r);
    }
    else {
      ellipse(this.x, this.y, 5, 5);
    }
  }

}
function draw() {
  const numberOfPoints = 1000;

  drawers.forEach(drawer => {
    drawer.update();
    drawer.show(sourceImg,maskImg);
  })
  // for (let i = 0; i < numberOfPoints; i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y); //gets the colour at the x & y of the images
  //   let mask = maskImg.get(x, y); // corresponding x&y in the mask
  //   let pointSize = 20;
  //   let halfSize = 50;
  //   fill(pix);

  //   //if the mask is more white that black -> draw ellipse o.w rectangle
  //   //TODO: change this logic bellow to our custom logic.
  //   if (mask[0] > 128) {
  //     for (let xd = x; xd < x + pointSize; xd++) {
  //       for (let yd = y; yd < y + pointSize; yd++) {
  //         fill(sourceImg.get(xd, yd));
  //         let randomOffSetX = random(0, pointSize);
  //         let randomOffSetY = random(0, pointSize);
  //         rect(xd - randomOffSetX, yd - randomOffSetY, 3, 3);
  //       }
  //     }
  //   } else {
  //     for (let xd = x; xd < x + pointSize; xd++) {
  //       for (let yd = y; yd < y + pointSize; yd++) {
  //         fill(sourceImg.get(xd, yd));
  //         rect(xd, yd, 3, 3);
  //       }
  //     }
  //   }
  //   // if(mask[0] > 128) {
  //   //   ellipse(x, y, pointSize, pointSize);
  //   // }
  //   // else {
  //   //   rect(x, y, pointSize, pointSize);    
  //   // }
  // }

  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    // noLoop();
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
