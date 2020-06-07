let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

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
  for(let i = 0; i < 240 i++) {
    let y = i * 8;
    for (let j = 0; j < 80; j++) {
      let x = j * 8;
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix);
      if (mask[0] > 128) {
        let pointsize = 8;
        cross(x, y,pointSize);
      }
      else { //if mask is anything else, make it a rectangle
        let pointSize = 50;
        embroirder(x, y,pointSize);
      }
    }
  }

  /*for(let i=0;i<200;i++) {
    //sets position of pixel
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);

    //if mask is white, make pixel a circle
    
  }*/ 
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}

function cross(x, y, size){
  let left = x - size/2;
  let top = y - size/2;

  line(left, top, left + x, top + y);
  line(left + x, top, left, top + y);
}

function embroider(x, y, size){
  let mid = x + size/2;
  let top = y + (size*1.5);
  let h = size * 3;

  line (mid, top, mid, top + h);
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
