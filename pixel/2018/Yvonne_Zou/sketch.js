
const finalVersion = false;
let elementSpacing = 43;
let elementSpacing2 = 10;
let elementSpacing3 = 20;
let circleSize = 50;
let circleSize2 = 15;
let circleSize3 = 58;
let squareSize = 20;
let squareSize2 = 15;
let squareSize3 = 25;
let squareSize4 = 35;
let layerOneRendered = false;
let layerTwoRendered = false;
let layerThreeRendered = false;

// let imageWidth = 1080;
// let imageHeight = 1920;
let imageWidth = 1080;
let imageHeight = 1920;



if (finalVersion) {
  elementSpacing = 43;
  elementSpacing2 = 10;
  elementSpacing3 = 20;
  circleSize = 50;
  circleSize2 = 15;
  circleSize3 = 25;
  squareSize = 20;
  squareSize2 = 15;
  squareSize3 = 25;
  squareSize4 = 35;
}

let sourceImg=null;
let maskImg=null;
let maskImg2=null;
let maskImg3=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
  //maskImg2 = loadImage("mask_3_2.png");
  //maskImg3 = loadImage("mask_3_3.png")
}

function setup () {
  let main_canvas = createCanvas(imageWidth, imageHeight);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background('gray');
  sourceImg.loadPixels();
  maskImg.loadPixels();
  //maskImg2.loadPixels();
  //maskImg3.loadPixels();
}

function convertRgbToHsluv(c) {
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

function draw () {

    if(!layerOneRendered){
      // draws large cirlces
      for(let i=0;i<imageWidth/elementSpacing;i++) {
          let x = int(i * elementSpacing);
          let y = int(renderCounter * elementSpacing);

         // let x2 = int(i * elementSpacing2);
          //let y2 = int(renderCounter * elementSpacing2);

          let dx = floor(random(elementSpacing/2));
          let dy = floor(random(elementSpacing/2));
          let pix = sourceImg.get(x, y);
          let mask = maskImg.get(x, y);
          //let mask2 = maskImg2.get(x, y);
          //let mask3 = maskImg3.get(x,y);
          let halfSize = squareSize/2;

          if(mask[0] > 128) {
            push();
            noFill();
            strokeWeight(10);
            stroke(pix);
            ellipse(x, y, circleSize, circleSize);
            strokeWeight(2);
            pop();
          }else {
            x = x + dx;
            y = y + dy;
            push();
            let hsluvColor = convertRgbToHsluv(pix)
            fillHsluv(0,0,hsluvColor[2]);
            strokeWeight(3);
            stroke(105, 105, 105);
            rect(x-halfSize, y-halfSize, squareSize4, squareSize4);
            pop();
            }
        }

        renderCounter = renderCounter + 1;
        if(renderCounter > imageHeight/elementSpacing) {
          layerOneRendered = true;
          renderCounter = 0;
        }
    }

    // if(!layerTwoRendered && layerOneRendered){
    //   //high res loops
    //   for(let i=0;i<imageWidth/elementSpacing2;i++) {
    //     let x = int(i * elementSpacing2);
    //     let y = int(renderCounter * elementSpacing2);

    //    // let x2 = int(i * elementSpacing2);
    //     //let y2 = int(renderCounter * elementSpacing2);

    //     let dx = floor(random(elementSpacing2/2));
    //     let dy = floor(random(elementSpacing2/2));
    //     let pix = sourceImg.get(x, y);
    //     let mask = maskImg.get(x, y);
    //     let mask2 = maskImg2.get(x, y);
    //     let mask3 = maskImg3.get(x,y);
    //     let halfSize = squareSize/2;

    //      if(mask2[0] > 128) {
    //       fill(pix);
    //       ellipse(x, y, circleSize2, circleSize2);
    //     }
    //   }
    //   renderCounter = renderCounter + 1;
    //     if(renderCounter > imageHeight/elementSpacing2) {
    //       layerTwoRendered = true;
    //       renderCounter = 0;
    //     }
    // }

    // if(!layerThreeRendered && layerOneRendered && layerTwoRendered){
    //   //high res loops
    //   for(let i=0;i<imageWidth/elementSpacing3;i++) {
    //     let x = int(i * elementSpacing3);
    //     let y = int(renderCounter * elementSpacing3);

    //    // let x2 = int(i * elementSpacing2);
    //     //let y2 = int(renderCounter * elementSpacing2);

    //     let dx = floor(random(elementSpacing3/2));
    //     let dy = floor(random(elementSpacing3/2));
    //     let pix = sourceImg.get(x, y);
    //     let mask = maskImg.get(x, y);
    //     let mask2 = maskImg2.get(x, y);
    //     let mask3 = maskImg3.get(x,y);
    //     let halfSize = squareSize/2;

    //      if(mask3[0] > 128) {
    //       noFill();
    //       stroke(pix);
    //       strokeWeight(3)
    //       rect(x-halfSize, y-halfSize, squareSize2, squareSize2);
    //       stroke(51);
    //       rect(x-halfSize,y-halfSize,squareSize,squareSize);
    //       stroke(pix);
    //       rect(x-halfSize,y-halfSize,squareSize3,squareSize3);
    //       stroke(pix);
    //       rect(x-halfSize-10,y-halfSize-10,squareSize,squareSize);

    //     }
    //   }
    //   renderCounter = renderCounter + 1;
    //     if(renderCounter > imageHeight/elementSpacing3) {
    //       layerThreeRendered = true;
    //       renderCounter = 0;
    //     }
    // }
  

  if(layerOneRendered){//&& layerTwoRendered && layerThreeRendered) {
    console.log("Done!")
    noLoop();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
