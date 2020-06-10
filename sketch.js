let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let tileHeight = 5;
let tileWidth = 5;

let x_step = 5;
let y_step = 5;

function draw () {
  for(let i=0;i<8000;i++) {
     let x_line = floor(random(sourceImg.width));
     let y_line = floor(random(sourceImg.height));
     let pix = sourceImg.get(x_line, y_line);
     let mask = maskImg.get(x_line, y_line);
     fill(pix[0], pix[1], pix[2]);
     stroke(pix);

  let point_size = 90;
  let dice = random (1,6);
  //console.log(mask[0]);

    if(mask[0] > 200) {
    noStroke();
    fill(0);
    }

    else {
      line(x_line + x_step, y_line, x_line + x_step + point_size, y_line);
      line(x_line, y_line + y_step, x_line, y_line + y_step + point_size);
      }
        }

        for (var x = 0; x < sourceImg.width; x = x + x_step) {
            for (var y = 0; y < sourceImg.height; y = y + y_step) {
              let pix = sourceImg.get(x, y);
              let mask = maskImg.get(x, y);

              if(mask[0] > 128) {
                fill(pix);
                stroke(pix);
                rect(x, y, tileWidth, tileHeight);
              }

              else if (mask[0] == 60) {
                fill(255);
                noStroke();
                ellipse(x, y, tileWidth + 1, tileHeight + 1);
              }
            }
          }

          if(mask[0] > 60) {
          fill(pix);
          stroke(pix);
          }
        }

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    //console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
