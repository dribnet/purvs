let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let graphicElements=[];

let sourceFile = "input_5.jpg";
let maskFile   = "mask_5.png";
let outputFile = "artwork_5.png";

let graphicFile1 = "graphic_2.png";
let graphicFile2 = "graphic_3.png";


function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
  graphicElements[0] = loadImage(graphicFile1);
  graphicElements[1] = loadImage(graphicFile2);


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
  let petalColour = color(120, 255, 255, 100);
  angleMode(DEGREES);
  for(let i=0;i<1500;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = color(sourceImg.get(x, y));
    let mask = maskImg.get(x, y);
    let pointSize = 20;
    let halfSize = 50;
    if(mask[0] > 50) {
      if (random(0,1) > 0.05) continue;
      let petalCol = lerpColor(pix, petalColour, mask[0]/500.0);
      petalCol = color(petalCol.levels[0], petalCol.levels[1], petalCol.levels[2]);
      push();
        translate(x, y);
        rotate(random(-20, 20));
        if (random(0, 1) > 0.5 ) scale(-1, 1);
        tint(petalCol);
        image(graphicElements[round(random(0,1))], 0 , 0);
      pop();
    }
    else {
      fill(pix);
      ellipse(x, y, pointSize, pointSize);

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
