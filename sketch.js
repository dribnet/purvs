
const finalVersion = true;


let elementSpacing = 40;
let circleSize = 75;
// let circleSize2 = 60;
// let circleSize3 = 45;
// let circleSize4 = 30;
// let circleSize5 = 15;
// let arcSize = 40;


if (finalVersion) {
	let elementSpacing = 20;
	let circleSize = 37.5;
	// let circleSize2 = 30;
	// let circleSize3 = 22.5;
	// let circleSize4 = 15;
	// let circleSize5 = 7.5;
	// let arcSize = 20;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  angleMode(DEGREES);
  // noStroke();
  background(10);
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
    let dx = floor(random(elementSpacing));
    let dy = floor(random(elementSpacing));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    // fill(pix);
    let hsluvColor = convertRgbToHsluv(pix);
    let circleSize2 = map(hsluvColor[1], 0, 100, 60, 70);
    let circleSize3 = map(hsluvColor[1], 0, 100, 45, 55);
    let circleSize4 = map(hsluvColor[1], 0, 100, 30, 40);
    let circleSize5 = map(hsluvColor[1], 0, 100, 15, 25);

    let arcSize = map(hsluvColor[1], 0, 100, 40, 60);
    let startAngle = map(hsluvColor[1], 0, 100, 180, 359);
    let endAngle = map(hsluvColor[1], 0, 100, 360, 179);
    let halfSize = arcSize/2;

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
    x = dx + x;
    y = dy + y;
    	noStroke();
    fill(pix);
      arc(x-halfSize, y-halfSize, arcSize, arcSize, startAngle, endAngle); 
  
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