let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let i = 0;


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

  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 7;
const tileWidth = 7;

function draw () {
background(i,0,0);
  for(var x = 0; x < sourceImg.width; x = x + tileWidth){
    for(var y = 0; y< sourceImg.height; y = y + tileHeight){
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      if(mask[0] > 100) {
        i=0;
        let pointSize = 5;
        ellipse(x, y, tileWidth, tileHeight);
      }
      if(mask[0]>0 && mask[0]<110){
        i=100;

      }
      else {
        i = 200;
        stroke(pix);
        strokeWeight(3);
        let pointSize = 5;
        //rect(x, y, pointSize, pointSize);

      line(x,y,x+5,y+5);
      line(x,y,x-5,y-5);

      }
    }
  }
  /*for(let i=0;i<10000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);

    if(mask[0] > 128) {
      let pointSize = 5;
      ellipse(x, y, pointSize, pointSize);
    }
    else {
  stroke(pix);
      let pointSize = 5;
      //rect(x, y, pointSize, pointSize);

      line(x,y,x+30,y);
      //line(x,y,x-5,y-5);


    }*/


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
