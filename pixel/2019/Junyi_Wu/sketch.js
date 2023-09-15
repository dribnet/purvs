let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  let spacing = 10;
  for(let i=0; i < 1000/spacing; i++) {
    let x = int(i * spacing);
    let y = int(renderCounter * spacing);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 2;
    let halfSize = 50;

    //BACKGROUND
    if(mask[0] == 190) {
      fill(0);
      ellipse(x, y, pointSize, pointSize);
    }
    //WHAT THEY WANT TO BECOME
    if(mask[0] == 130) {
      pointSize = 5;
      fill(60);
      rect(x, y, pointSize, pointSize);
    }
  }

  for(let i=0; i < 300; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 5;
    let halfSize = 50;
    
    //MAIN SILHOUETTE FIGURE
    if (mask[0] == 0) {
      fill(pix);
      ellipse(x, y, pointSize, pointSize);  
    }

    //WHAT THEY WANT TO CHANGE
    else if (mask[0] == 255) {
      fill(pix);
      ellipse(x, y, pointSize, pointSize);
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter * spacing > 1920) {
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
