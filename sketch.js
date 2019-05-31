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

const tile_width = 20;
const tile_height = 20;
const tile_step_x = 20;
const tile_step_y = 20;

function draw_some_lines(x, y) {
  for(let i=0; i<100; i=i+1) {
    let dx1 = random(-100, 100);
    let dy1 = random(-100, 100);
    let dx2 = random(-100, 100);
    let dy2 = random(-100, 100);
    let coin_flip = random([0, 1]);
    if(coin_flip == 0) {
      // dark red line
      stroke(100, 0, 0);
    }
    else {
      // white line
      stroke(255);
    }
    line(x+dx1, y+dy1, x+dx2, y+dy2);
  }
}

function draw_some_lines2(x, y) {
  for(let i=0; i<100; i=i+1) {
    let dx1 = random(-10, 10);
    let dy1 = random(-10, 10);
    let dx2 = random(-100, 100);
    let dy2 = random(-100, 100);
    line(x+dx1, y+dy1, x+dx2, y+dy2);
  }
}

function draw_special_rect(x, y, width, height) {
  rect(x, y, width, height);
  let die_roll = random([0, 1, 2, 3]);
  if(die_roll == 0) {
    fill(0, 0, 0, 50);
    ellipse(x, y, width/2, height/2);
  }
  else if (die_roll == 1) {
    fill(255, 255, 255, 50);
    ellipse(x, y, width/2, height/2);
  }
  else if (die_roll == 2) {
    fill(255, 255, 255, 50);
    ellipse(x, y, width/2, height/2);
    fill(0, 0, 0, 50);
    ellipse(x, y, width/4, height/4);
  }

}

function draw () {
  background(50);

  // pass 1: draw the rectangles where mask is gray
  for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix);
      if(mask[0] == 0) {
        // draw_some_lines(x, y);
      }
      if(mask[0] == 255) {
        // draw_some_lines2(x, y);
      }
      else {
        draw_special_rect(x, y, tile_width, tile_height);
      }
    }
  }

  // pass 2: draw the lines where the mask is white or black
  for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix);
      if(mask[0] == 0) {
        draw_some_lines(x, y);
      }
      if(mask[0] == 255) {
        // draw_some_lines2(x, y);
      }
      else {
        // rect(x, y, tile_width, tile_height);
      }
    }
    // pass 2: draw the lines where the mask is white or black
    for(let y=0; y<height; y = y + 1) {
      for(let x=0; x<width; x = x + 1) {
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        if(mask[0] == 255) {          
          // let r = 255 - pix[0];
          // let g = 255 - pix[1];
          // let b = 255 - pix[2];
          let g = pix[1];
          stroke(g/2, g/2, g);
          point(x, y);
        }
      }
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 3) {
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
