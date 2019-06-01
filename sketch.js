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
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 8;
const tile_height = 8;
const tile_step_x = 8;
const tile_step_y = 8;

function draw () {
  //background(255,96,96);


  for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      
      let mask = maskImg.get(x, y);
        let x2 = floor(random(sourceImg.width));
        let y2 = floor(random(sourceImg.height));
       let pointSize = 8;
      fill(pix);
      if(mask[0] > 128) {
        rect(x, y, tile_width, tile_height);
        var die = int(random(0, 4));
        if (die == 0) {
          var gray = int(random(0, 102));
          var scalar = random(0.2, 0.45);
             stroke(1);
        }
      }
      else {
       
        noFill();
      stroke(pix);
      strokeWeight(1);
      //ellipse(x+x2, y+y2, pointSize, pointSize);
      squareBase = map(y, 0, 1080, 35, 2);
      squareSize = squareBase + floor(random(3, 15));
      ellipse(x+x2, y+y2, squareSize, squareSize);    
      //fill(255, 255, 0, 40);
      //ellipse(x-x2, y-y2, pointSize, pointSize);
      }
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
