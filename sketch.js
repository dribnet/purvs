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
const tile_step_x2 = 6;
const tile_step_y2 = 6;











function draw () {
  //background(50);


  // first pass
  for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix);
      if(mask[0] < 110) {
        // draw_some_lines(x, y);
        noStroke();
        let offset = random(-3,3);
        ellipse(x+offset, y+offset, tile_width*1.2, tile_height*1.2);
  
             
      }
      if(mask[0] > 140) {
        // draw_some_lines2(x, y);
        noFill();
      stroke(pix);
      strokeWeight(1);
      //ellipse(x+x2, y+y2, pointSize, pointSize);
      squareBase = map(y, 0, 500, 35, 2);
      squareSize = squareBase + floor(random(3, 56));
      let offset = random(-3,3);
      rect(x, y, squareSize, squareSize);  
      } 
      else if (mask[0] > 110 && mask[0] < 140){
        stroke(255, 204, 0);
        fill(255, 204, 0);
        let offset = random(-3,3);
        let pointSize = 10
        ellipse(x+offset, y+offset, pointSize, pointSize);
      }
    }
  }

   for(let y=0; y<height; y = y + tile_step_y2) {
    for(let x=0; x<width; x = x + tile_step_x2) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      if (mask[0] > 80 && mask[0] < 200){
        fill(pix);
        noStroke();
        let offset = random(-8,8);
        let pointSize = 2;
        ellipse(x+offset, y+offset, tile_width, tile_height);
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
