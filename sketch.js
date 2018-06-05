
const finalVersion = true;


let elementSpacing = 40;
// let circleSize = 75;


if (finalVersion) {
	let elementSpacing = 20;
	// let circleSize = 37.5;

}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  angleMode(DEGREES);
  // noStroke();
  background(100);
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
    let dx1 = floor(random(circleSize));
    let dy1 = floor(random(circleSize));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    // fill(pix);
    let hsluvColor = convertRgbToHsluv(pix);

    let arcSize = map(hsluvColor[1], 0, 100, 40, 60);
    let startAngle = map(hsluvColor[2], 0, 100, 180, 360);
    let endAngle = map(hsluvColor[0], 0, 100, 359, 179);
    let halfSize = arcSize/2;

    let circleSize2 = map(y,1920,0,0,40);

    if(mask[0] < 128) {
    	x1 = dx1 + x;
    	y1 = dy1 + y;
    	noStroke();
 
      push();
      fill(pix);
      rect(x, y, arcSize, arcSize);
      pop();

      ellipse(x1, y1, circleSize2, circleSize2);

    }


    else {
    x1 = dx + x;
    y1 = dy + y;
    noStroke();
    let hsluvColor = convertRgbToHsluv(pix);
	fillHsluv(hsluvColor[0], 0, hsluvColor[2]);
    rect(x, y, arcSize, arcSize);
    fill(pix);
	arc(x1-halfSize, y1-halfSize, arcSize, arcSize, startAngle, endAngle);

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