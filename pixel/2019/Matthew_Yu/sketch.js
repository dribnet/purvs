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

function draw () {
  for(let i=0;i<10000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let greyA = 30;
    let blackA = 4;
    let round = random(2, 3);
    let round2 = random(10, 20);
    let position = map(round, 0, width, 0, height);
    let position2 = map(round2, 0, width,0 ,height);
    fill(pix);
    stroke(pix);

    if(mask[0] == 255) {
      fill(pix);
      strokeWeight(1);
      let ff = random(0, 200);
      stroke(ff, 20);
      rect(x, y, position2, position/position2);
      rect(x+random(20,30), y-random(20,30), position, position2);
          }
    else if(mask[0] == 0) {
      rect(x, y, blackA ,blackA);
      ellipse(x, y, blackA, blackA); 
    }
    else {
      noFill();
      stroke(pix);
      strokeWeight(1);
      rect(x, y, greyA, greyA); 
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
