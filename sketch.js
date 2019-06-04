let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let sourceFile = "input_3.jpg";
let maskFile = "mask_3.png";
let outputFile = "artwork_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();

}

const tile_width = 10;
const tile_height = 10;
const tile_step_x = 20;
const tile_step_y = 20;

const tile_width1 = 6;
const tile_height1 = 6;


function draw_some_lines(x, y) {
  push();
  for (let i = 0; i < 100; i = i + 1) {
    let dx1 = random(0, 30);
    let dy1 = random(0, 30);
    let dx2 = random(0, 10);
    let dy2 = random(0, 10);
    let coin_flip = random([0, 1]);
    if (coin_flip == 0) {
      stroke(0);
    } else {
      stroke(255);

    }
    line(x + dx1, y + dy1, x + dx2, y + dy2);
  }
  pop();
}


function draw() {
  randomSeed(99);
  background(220);
  //phonebackground
  for (let y = 0; y < height; y = y + tile_step_y) {
    for (let x = 0; x < width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
    


     // console.log(pix);

      stroke(pix);
      fill(pix);
      if (mask[0] > 85 && mask[0] < 170) {
         draw_some_lines(x, y);
      }

    }
  }


  //dithering
  for (let y = 0; y < height; y = y + tile_step_y / 14) {
    for (let x = 0; x < width; x = x + tile_step_x / 14) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
 

      if (mask[0] > 170) {
        noStroke(pix[1]);
        fill(pix[1]);
          // stroke(pix);
        // fill(pix);
      
        rect(x + random(-10, 10), y + random(-10, 10), 2, 2);
      }

    }
  }

  //this does background rect
  for (let y = 0; y < height; y = y + tile_height1) {
    for (let x = 0; x < width; x = x + tile_width1) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);



      if (mask[0] < 85) {
        stroke(pix);
        fill(pix);

         rect(x, y, tile_width1, tile_height1);;
      }

    }
  }

}

renderCounter = renderCounter + 1;
if (renderCounter > 5) {
  console.log("Done!")
  noLoop();
  //uncomment this to save the result
  saveArtworkImage(outputFile);
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}