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
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const gridlen = width/300
const gridhi = height/100

function draw () {
  for(let i=0;i<5000;i++) {
    let x = random(sourceImg.width);
    let y = random(sourceImg.height);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 50;
    let len = 255-mask
    fill(pix);
    stroke(pix);
    if(mask[0] > 50) {
      strokeWeight(mask[0]/100);
      strokeCap(ROUND);
      let pointSize = 10;
      line(x,y,x,y+pointSize)
    } else{
      strokeWeight(5);
      strokeCap(SQUARE);
      let pointSize = 10;
      line(x,y-pointSize,x,y+pointSize)
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
