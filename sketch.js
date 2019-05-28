let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let graphicElements=[];

let sourceFile = "input_3.jpg";
let maskFile   = "mask_5.png";
let outputFile = "artwork_3.png";

let graphicFile1 = "graphic.png";
// let graphicFile2 = "graphic_3.png";


function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
  graphicElements[0] = loadImage(graphicFile1);
  // graphicElements[1] = loadImage(graphicFile2);
}

function setup () {
  let main_canvas = createCanvas(sourceImg.width, sourceImg.height);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();

}

function draw () {
  let petalColour = color(194, 30, 86, 100);
  angleMode(DEGREES);
  for(let i=0;i<3000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = color(sourceImg.get(x, y));
    let mask = maskImg.get(x, y);
    let pointSize = 10;
    let halfSize = 50;
    if(mask[0] > 50) {
      if (random(0,1) > 0.01) continue;
      let petalCol = lerpColor(pix, petalColour, mask[0]/500.0);
      petalCol = color(petalCol.levels[0], petalCol.levels[1], petalCol.levels[2]);
      push();
        translate(x, y);
        rotate(random(-20, 20));
        if (random(0, 1) > 0.5 ) scale(-1, 1);
        tint(petalCol);
        image(graphicElements[0], 0 , 0);
      pop();
    }
    else {
      fill(pix);
      let randSize = random(0.3, 1.2);
      ellipse(x, y, pointSize*randSize, pointSize*randSize);

    }
  }


  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
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
