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

const tileHeight = 100; //tile hieght
const tileWidth = 100; //tile width

const x_step = 40; //circle width
const y_step = 40; //circle height

function draw() {
  for(var x = 0; x < sourceImg.width; x = x+ x_step){
    for(var y = 0; y < sourceImg.height; y = y+ y_step){
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        fill(pix);
        stroke(pix);

        let pointSize = 5;

        if (mask[0] > 128) {
          // stroke(20, 50)
          // strokeWeight(10);
          //  ellipse(x,y,tileWidth,tileHeight); //tile lines
        }
        else{
          ellipse(x, y, x + pointSize, y-350); // horizonal lines
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
