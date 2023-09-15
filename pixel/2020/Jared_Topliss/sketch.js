let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_2.png";

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

function draw () {
    for (let y = 0; y < 1000; y+=10) {
    for (let x = 0; x < 1920; x+=10) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);

      if(mask[0] > 300) {
        noStroke();
        // pixels inside mask
        if (pix[2] > 200 && pix[2] > 200 && pix[2] > 200) {
        lines(x+random(-30,5), y+random(-20,1), 5, 5);
        }
        // pixels outside mask
        else {
        lines(x+random(-30,5), y-random(-20,1), 5, 5);
        }
      } // draws the lines around my mask and non mask areas
      else {
        stroke(pix);
        strokeWeight(random(1,7));
        line(x + random(-30, 10), y - random(-20,20), x + random(-20, 10), y - random (-20,20));
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
