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

  imageMode(CENTER); //centering image
  noStroke(); //no stroke on the circles
  background(255); //background colour
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 10; //tile hieght
const tileWidth = 10; //tile width

const x_step = 30; //circle width
const y_step = 30; //circle height

const pointSize = 3;

function draw() {

  for(var x = 0; x < sourceImg.width; x = x+ x_step){
    for(var y = 0; y < sourceImg.height; y = y+ y_step){
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        fill(pix);
        stroke(pix);
         if (mask[0] > 200) {
           stroke(255);
           rect(x,y,tileWidth,tileHeight); //tile lines
  }
  else{
    if(mask[0] > 128) {
      stroke(pix);
      strokeWeight(2);
      fill(255); //fills white
      ellipse(x+pointSize,y+pointSize,pointSize,pointSize); //the circles
    } else {
      stroke(255);
      strokeWeight(5);
      ellipse(x,y,x_step,y_step); //the circles
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
