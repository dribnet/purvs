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

function draw () {
  for(let i=0;i<4000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    noFill();
    if(mask[0] > 180){
      let size = 30;
      brushStroke(x, y, size, pix, 3);
    }else if(mask[0] > 90){
      let size = 10;
      brushStroke(x, y, size, pix, 3);
    }else{
      let size = 10;
      brushStroke(x, y, size, pix, 3);
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

function brushStroke(x, y, size, c, level){ //Recursive function
  var rand = random(-5, 5);

  stroke(c);
  strokeWeight(size/2);

  for(var i = 0; i < 10; i++){
    line(x + rand, y, x, y+rand);
  }

  if(level>1 && (random(0,1)>0.4)){ //adds chance to fail
    level-=1;
    brushStroke(x-level, y, size/2, level);
    brushStroke(x, y-level, size/2, level);
  }
}