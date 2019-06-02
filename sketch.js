let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  background(175);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

  // const tile_width = 5.5;
  // const tile_height = 5.5;

function draw () {

  // for(let i=0;i<5000; i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   let pointSize = 10;
  //   let halfSize = 10;
  //   fill(pix);
  //   if(mask[0] > 128) {
  //     ellipse(x, y, 10, 10);
  //     // rect(x-5, y, 10, 5);
  //   }
  //   else {
  //     rect(x, y, 5, 30);    
  //   }
  // }
  let tile_width = 5.5;
  let tile_height = 5.5;
  strokeWeight(0.3);
  for(let y = 0; y < height; y = y + tile_height){
    for(let x = 0; x < width; x = x + tile_width){
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);
      fill(pix);
      stroke(pix);
      if(mask[0] >= 0 && mask[0] < 128) {
        line(x, y, x+20, y+20);
        line(x+20, y, x, y+20);  
      }

      else if (mask[0] >= 128 && mask[0] < 216) {
        let tile_width = 5;
        let tile_height = 50;
        stroke(80);
        strokeWeight(0.1);
        rect(x, y, tile_width, tile_height);
        line(x + 2.5, y, x + 2.5, y+50); 
      }

      else {
        let tile_width = 5.5;
        let tile_height = 5.5;
        rect(x, y, tile_width, tile_height);
      }
    }
  }

  for(let i=0;i<5000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    if(mask[0] >= 128 && mask[0] < 216) {
      fill(50, 100);
      ellipse(x, y, 10, 10);
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}