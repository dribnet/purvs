let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 200;
const tileWidth = 200;


function draw () {
  // for(var x = 0; x = sourceImg.width; x = x+ tileWidth){
  //   for(var y = 0; y = sourceImg.height; y = y+ tileHeight){
  //     let pix = sourceImg.get(x, y);
  //     let mask = maskImg.get(x, y);
  //     fill(pix);
  //     stroke(pix);
  //     rect(x,y,tileWidth,tileHeight);
  //   }
  // }
  for(let i=0;i<3000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);


    // let pointSize = 50;
    // let dice = random(1,6);
    // if (dice > 5)(
    // line(x, y, x+pointSize, y)
    // )
    //
    // else (
    // line(x,y,x,y+pointSize)
    // )
    noStroke();
    if(mask[0] > 30) {
      let pointSize = 10;
      rect(x, y, pointSize, pointSize);
    }
    else {
      let pointSize = 20;
      rect(x, y, pointSize, pointSize);
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
