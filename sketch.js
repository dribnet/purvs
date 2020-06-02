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

  imageMode(CENTER); //centering image
  noStroke(); //no stroke on the circles
  background(10); //background colour
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 60; //tile hieght
const tileWidth = 10; //tile width

const x_step = 20; //circle width
const y_step = 20; //circle height

function draw() {
  for(var x = 0; x < sourceImg.width; x = x+ x_step){
    for(var y = 0; y < sourceImg.height; y = y+ y_step){
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        fill(pix);
        stroke(pix);

        let pointSize = 15;

        if (mask[0] > 128) {
           rect(x,y,tileWidth,tileHeight); //tile lines
        }
        else{
          line(x, y, x + pointSize, y); // horizonal lines
          if(pix[1] > pix[0]) {
            strokeWeight(8); //thicker stroke if pix is larger than pix0
            // let pixMod = sourceImg.get(x, y);
            // pixMod[0] = pixMod[0]/2;
            // pixMod[1] = pixMod[1];
            // pixMod[2] = pixMod[2]/2;
            // stroke(pixMod);
          } else {
            stroke(pix);
            strokeWeight(1); //otherwise stroke weight is 1
          }
}
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

  // for(let i=0;i<2000;i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   fill(pix);
  //   if(mask[0] > 128) {
  //     let pointSize = 5;
  //     rect(x, y, pointSize+50, pointSize);
  //   }
  //   else {
  //     let pointSize = 5;
  //     rect(x, y, pointSize, pointSize);
  //   }
  // }
  // renderCounter = renderCounter + 1;
  // if(renderCounter > 10) {
  //   console.log("Done!")
  //   noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
//   }
// }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
