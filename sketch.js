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

// draw owl at x,y with darkness g and scaling s
function owl(x, y, g, s) {
  push();
  translate(x, y);
  scale(s);  // Set the createCanvas
  stroke(g); // Set the gray value
  strokeWeight(70);
  line(0, -35, 0, -65); // Body
  noStroke();
  fill(255-g);
  ellipse(-17.5, -65, 35, 35); // Left eye dome
  ellipse(17.5, -65, 35, 35);  // Right eye dome
  arc(0, -65, 70, 70, 0, PI);  // Chin
  fill(g);
  ellipse(-14, -65, 8, 8);  // Left eye
  ellipse(14, -65, 8, 8);   // Right eye
  quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
  pop();
}

const tile_width = 12;
const tile_height = 18;
const tile_step_x = 20;
const tile_step_y = 30;

function draw () {
  background(50);

  // version 1: just draw all the tiles
  for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      if(mask[0] > 128) {
        rect(x, y, tile_step_x, tile_step_y);
        var die = int(random(0, 4));
        if (die == 0) {
          var gray = int(random(0, 102));
          var scalar = random(0.2, 0.45);
          owl(x, y, gray, scalar);          
        }
      }
      else {
        rect(x, y, tile_width, tile_height);
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
