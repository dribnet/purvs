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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for (let y = 0; y < 800; y+=5) {
    for (let x = 0; x < 1920; x+=5) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      //if mask is white
      if(mask[0] > 240) {
        noStroke();
        //draws the whiter pixels as rects
        if (pix[0] > 175 && pix[1] > 175 && pix[2] > 175) {
          rect(x+random(-5,5), y+random(-5,5), 15, 15);
        }
        //and the darker pixels as ellipses
        else {
        ellipse(x+random(-5,5), y+random(-5,5), 25, 25);
        }
      }
      else if(mask[0] > 180) {  //mask is light grey
        noStroke();
        rect(x,y, 5, 5);
        rect(x+random(-1,1), y+random(-1,1),3,3);
      }
      else if(mask[0] > 120) {  //mask is dark grey
        noStroke();
        ellipse(x+random(-1,1), y+random(-1,1), random(5,10), random(5,10));
        ellipse(x+random(-2,2), y+random(-2,2), random(5,10), random(5,10));
      }
      else { // mask is black
        stroke(pix);
        strokeWeight(random(1,5));
        line(x - random(0, 10), y + random(-10,10), x + random(0, 10), y + random (-10,10));
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
