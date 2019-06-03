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

const tile_width = 8;
const tile_height = 8;
const tile_step_x = 8;
const tile_step_y = 8;

const back_width = 55;
const back_height = 55;






function draw_special_rect(x, y, width, height) {
  rect(x, y, width, height);
  let die_roll = random([0, 1, 2, 3]);
  if(die_roll == 0) {
    //fill(0, 0, 0, 50);
    ellipse(x, y, width, height);
  }
  else if (die_roll == 1) {
    //fill(255, 255, 255, 50);
    ellipse(x, y, width, height);
  }
  else if (die_roll == 2) {
    //fill(255, 255, 255, 50);
    ellipse(x, y, width, height);
    //fill(0, 0, 0, 50);
    ellipse(x, y, width, height);
  }

}

function draw () {
  //background(50);


  for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix);
      if(mask[0] == 0) {
        // draw_some_lines(x, y);
        stroke(1);
         rect(x, y, tile_width, tile_height);
  
             stroke(1);
      }
      if(mask[0] == 255) {
        // draw_some_lines2(x, y);
        noFill();
      stroke(pix);
      strokeWeight(1);
      //ellipse(x+x2, y+y2, pointSize, pointSize);
      squareBase = map(y, 0, 500, 35, 2);
      squareSize = squareBase + floor(random(3, 15));
      rect(x, y, squareSize, squareSize);  
      }
      else {
        draw_special_rect(x, y, tile_width, tile_height);
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
