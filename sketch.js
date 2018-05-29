
const finalVersion = true;


let elementSpacing = 40;
let circleSize = 75;
// let circleSize2 = 60;
// let circleSize3 = 45;
// let circleSize4 = 30;
// let circleSize5 = 15;
let squareSize = 50;


if (finalVersion) {
	let elementSpacing = 20;
	let circleSize = 37.5;
	// let circleSize2 = 30;
	// let circleSize3 = 22.5;
	// let circleSize4 = 15;
	// let circleSize5 = 7.5;
	let squareSize = 25;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  // angleMode(DEGREES);
  // noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function convertRgbToHsluv (c) {
	return hsluv.rgbToHsluv([c[0]/255.0,c[1]/255.0,c[2]/255.0]);
}

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    // fill(pix);
    let hsluvColor = convertRgbToHsluv(pix);
    let circleSize2 = map(hsluvColor[1], 0, 100, 60, 70);
    let circleSize3 = map(hsluvColor[1], 0, 100, 45, 55);
    let circleSize4 = map(hsluvColor[1], 0, 100, 30, 40);
    let circleSize5 = map(hsluvColor[1], 0, 100, 15, 25);

    if(mask[0] > 128) {
      stroke(pix);
      strokeWeight(2.5);
      fill(10);
      ellipse(x, y, circleSize, circleSize);
      ellipse(x, y, circleSize2, circleSize2);
      ellipse(x, y, circleSize3, circleSize3);
      ellipse(x, y, circleSize4, circleSize4);
      ellipse(x, y, circleSize5, circleSize5);
    }
    else {
    	noStroke();
    	fillHsluv(0,0,hsluvColor[2]);
      rect(x-halfSize, y-halfSize, squareSize, squareSize); 
  
    }


  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacing) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}