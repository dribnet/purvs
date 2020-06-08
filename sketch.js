let elementSpacing = 40;
let squareSize = 40;
let colorSquareSize = 40;

let sourceImg = null;
let maskImg = null;
let renderCounter = 0;


// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  // noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileWidth = 30;
const tileHeight = 20;


function draw() {

  for(let i=0; i<1000; i++){
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);

    let pointSize = 20;
    let pixMod = sourceImg.get(x, y);
    console.log(mask[0]);

    if(mask[0] > 200){
      pixMod[0] = pixMod[0]*2;
      pixMod[1] = pixMod[1]/3;
      pixMod[2] = pixMod[2]*3;
      noStroke();
      fill(pixMod);
      ellipse(x, y, pointSize, pointSize);

    }  else if(mask[0]< 130 && mask[0] > 100){
      fill(15, 214, 208);
      ellipse(x, y, 20);



    }else{
          let pointSize = 5;
          pixMod[0] = pixMod[0]*2;
          pixMod[1] = pixMod[1];
          pixMod[2] = pixMod[2]/3;
          noStroke();
          fill(pixMod);
          rect(x, y, tileWidth/2, tileHeight/2);
        }
      }




  //runs 10 different times
  renderCounter = renderCounter + 1;
  if (renderCounter > 5) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}


function drawStar(x, y, size) {
  push();
  strokeWeight(3);
  translate(x, y);
  for (var i = 0; i < 10; i++) {
    line(size, 0, -size, 0);
    rotate(360 / 5);
  }
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
