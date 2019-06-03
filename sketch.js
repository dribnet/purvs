let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "artwork_2.png";

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

const tile_step_y = 10;
const tile_step_x = 10;

function draw () {
<<<<<<< HEAD

  for(let i=0; i<10000; i++) {
    
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pos1 = map(5, 0, width, 0, height);
    let pos2 = map(3, 0, width, 0, height);
 
    if(mask[0] == 255) {

      noFill();
      stroke(pix);
      strokeWeight(1);
      rect (x, y, 25, 25); 
    }

    else if(mask[0] == 0) {

      fill(pix);
      noStroke();
      strokeWeight(1);
      rect(x, y, pos1, pos2);
    }
  }
=======
    
    for (let y = 0; y < height; y = y + tile_step_y) {
    for (let x = 0; x < width; x = x + tile_step_x) {
      
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);

    if(mask[0] > 128) {

      fill(pix);
      noStroke();
      rect (x, y, 10, 10);
    }
    else {
      fill(pix);
      stroke(0);
      strokeWeight(1);
      rect(x, y, 9, 9);
    }
  }
}
>>>>>>> 1dfd5e698a29db3180a558ffb1402b235a03ff9d

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
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

