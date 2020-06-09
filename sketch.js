let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";


function preload() {
  sourceImg =loadImage(sourceFile);
  maskImg=loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
 main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();

}

function draw () {
  for (let y = 0; y < 1000; y+=10) {
    for (let x = 0; x < 1920; x+=20) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      //if mask is white
      if(mask[0] > 240) {
        noStroke();
        //draws the whiter pixels as rects
        if (pix[0] > 175 && pix[1] > 175 && pix[2] > 175) {
          rect(x+random(-6,5), y+random(-6,5), 30, 30);
        }

        else {
        ellipse(x+random(-10,5), y+random(-10,5), 30, 30);
        }
      }
      else if(mask[0] > 120) {
        noStroke();
        ellipse(x+random(-10,2), y+random(-10,1), random(-10,10), random(-30,30));

      }
      else {
        stroke(pix);
        strokeWeight(random(1,5));
        line(x - random(0, 20), y + random(-10,10), x + random(-10, 10), y + random (-10,10));
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
