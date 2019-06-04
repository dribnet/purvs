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

function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 100;

    //fixed to all inputs
    fill(pix);
    noStroke();
    if(mask[0] >= 155) {
    rect (x, y, x/5, y/5);
    }

  }

//input 2
    const tile_width3 = 8;
    const tile_height3 = 8;

    for (let y = 0; y < height; y = y + tile_height3){
      for (let x = 0; x < width; x = x + tile_width3){
        let pix = sourceImg.get (x, y);
        let mask = maskImg.get (y, x);
        noFill();
        stroke(pix);
        if (mask[0] >= 50 && mask[0] < 150){
          push();
          stroke(pix);
          strokeWeight(2);
          line (x+10, y-10, x-10, y-10);
          pop();
        }
      }
    }

    // background

    for (let y = 0; y < height; y = y + tile_height6){
      for (let x = 0; x < width; x = x + tile_width6){
        let pix = sourceImg.get (x, y);
        let mask = maskImg.get (x, y);
        noFill();
        stroke(pix);
        strokeWeight(2);
        if (mask[0] <= 0){
          ellipse (x, y, tile_width6/2.5, tile_height6/2.5);
        }
      }
    }




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
  

  
