let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_4.jpg";
let maskFile = "mask_4.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
// Black Lines Grid
const tileHeight = 10;
const tileWidth = 10;

const x_step = 20;
const y_step = 15;

function draw() {

  for(var x = 0; x < sourceImg.width; x = x+ x_step){
    for(var y = 0; y < sourceImg.height; y = y+ y_step){
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        fill(pix);
        stroke(pix);
         if (mask[0] > 128) {
        rect(x,y,tileWidth,tileHeight);
  }
  else{
    rect(x,y,x_step,y_step);
  }
}

}

  //
  // for (let i = 0; i < 1000; i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   fill(pix);
  //   stroke(pix);
  //
  //   let pointSize = 20;
  //   let dice = random(1, 6);
  //   if (mask[0] > 128) {
  //     drawEllipse(x,y,15);
  //   } else {
  //    if (dice > 5) {
  //
  //     } else {
  //
  //     }
  //   }
  // }



  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function drawEllipse(x,y,size){
  push();
  //strokeWeight(4);
  translate(x,y);
  for(var i = 0; i < 10; i++){
    line(size,0,-size,0);
      rotate(360/ i);
    }
  pop();
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
