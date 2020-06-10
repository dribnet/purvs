let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let i = 200;//I'm using this to draw the background red


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
  background(i,0,0);
  imageMode(CENTER);
  noStroke();

  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 5;
const tileWidth = 5;

function draw () {

  for(var x = 0; x < sourceImg.width; x = x + tileWidth){
    for(var y = 0; y< sourceImg.height; y = y + tileHeight){
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      if(mask[0] > 140) {// this is being drawn in the white area of my mask
        //let pointSize = 5;
        ellipse(x, y, tileWidth, tileHeight);//circles drawing hand, the stroke is being taken from the black mask
      }
      if(mask[0]>10 && mask[0]<140){//this is being drawn in the grey area
        stroke(0);
        point(x,y);//black dots on red background
      }
      if(mask[0]<20) {//this is being drawn in the black area
        i = 200;
        stroke(pix);
        strokeWeight(3);
        //let pointSize = 5;
        //rect(x, y, pointSize, pointSize);

      line(x,y,x+5,y+5);//close lines drawing background
      line(x,y,x-5,y-5);

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
