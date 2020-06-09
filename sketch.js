let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_2.png";

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

const tileHeight = 12; //tile hieght
const tileWidth = 25; //tile width

const x_step = 30; //circle width
const y_step = 30; //circle height

const pointSize = 3;

function draw() {
  for(let i=0;i<100;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height/2 +50));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    // if(mask[0] > 10 && mask[0] < 157) {
      noStroke();
      let lineSize = 40;
      fill(0,70);
      rect(x, y, lineSize, lineSize+80);
      rect(x, y, lineSize+50, lineSize);
    // }
  }

  for(var x = 0; x < sourceImg.width; x = x+ x_step){
    for(var y = 0; y < sourceImg.height; y = y+ y_step){
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        fill(pix);
        stroke(pix);
         if (mask[0] > 200) {
           fill(204, 255, 247, 20);
        rect(x,y,tileWidth,tileHeight); //tile lines
  } else{
    if(mask[0] > 128) {
      noStroke();
      stroke(pix);
      // strokeWeight(2);
      fill(255); //fills white
      ellipse(x+pointSize,y+pointSize,pointSize,pointSize); //the circles
    } else {
      if(mask[0] > 10 && mask[0] < 100) {
        ellipse(x,y,x_step,y_step);
        noStroke();
        fill(0, 50);
        ellipse(x+5,y+5,x_step,y_step);
      } else {
      ellipse(x,y,25,25); //the circles
      fill(0);
      stroke(204, 255, 247, 150);
      ellipse(x,y,2,40); //the circles
      stroke(50, 100);
      ellipse(x,y,40,2); //the circles
    }
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

function drawDesign(x, y) {
  let pix = sourceImg.get(x, y);
  let mask = maskImg.get(x, y);
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
