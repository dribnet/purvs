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
  background(100);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {

  let tile_width = 5.5;
  let tile_height = 5.5;
  strokeWeight(0.3);
  for(let y = 0; y < height; y = y + tile_height){
    for(let x = 0; x < width; x = x + tile_width){
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);
      fill(pix);
      stroke(pix);
        let from = color(pix);
        let to = color(67, 114, 168); 
        let r = random(0, 1);
        let random_color = lerpColor(from, to, r);

      if(mask[0] >= 0 && mask[0] < 128) {           /// this is the background
        line(x, y, x+20, y+20);
        line(x+20, y, x, y+20);  
      }

      else if (mask[0] >= 212 && mask[0] < 255) {
        stroke(80);
        strokeWeight(0.1);
        ellipse(x, y, tile_width, tile_height);
        line(x + 2.5, y, x + 2.5, y+50); 
      }

      else if (mask[0] >= 203 && mask[0] < 212) {   ////// this is the frames
        stroke(random_color);
        strokeWeight(0.1);
        push()
        ellipseMode(CENTER);
        fill(random_color)
        ellipse(x, y, tile_width+3, tile_height+3);
        pop()
        line(x + 2.5, y, x + 2.5, y+50); 
      }

      else {                                        /// rects inside the frame                        
        push();
        rectMode(CENTER);
        rect(x, y, tile_width, tile_height);
        pop();
      }
    }
  }

  for(let i=0;i<2000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    if(mask[0] >= 128 && mask[0] < 203) {
      fill(pix);
      ellipse(x, y, 10, 10);
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