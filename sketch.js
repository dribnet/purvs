
const finalVersion = true;


let elementSpacing = 40;
let snowSpacing = 150;
let circleSize = 75;


if (finalVersion) {
	let elementSpacing = 20;
	let snowSpacing = 75;
	let circleSize = 37.5;

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


function snowflower(x, y, c, s){
	push();
	rectMode(CENTER);
	translate(x, y);
	scale(s);  
  	// stroke(c); 
  	noStroke();
  	fill(c);
  	for (var i = 0; i <= 135; i = i + 45) {
  		rotate(i);
  		rect(0,0,2,15);
  	}
  	pop();
}



function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    let dx = floor(random(elementSpacing));
    let dy = floor(random(elementSpacing));

    let dx2 = floor(random(snowSpacing));
    let dy2 = floor(random(snowSpacing));

    let dx1 = floor(random(circleSize));
    let dy1 = floor(random(circleSize));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    // fill(pix);
    let hsluvColor = convertRgbToHsluv(pix);

    let arcSize = map(hsluvColor[1], 0, 100, 40, 60);
    let startAngle = map(hsluvColor[2], 0, 100, 180, 360);
    let endAngle = map(hsluvColor[0], 0, 100, 359, 179);
    let rectSize = arcSize;
    let halfSize = rectSize/2;
    let snowflowerSize = map(y,1920,0,0,1);
    let snowflowerColor = map(y,0,1920,255,100);

    let circleSize2 = map(y,1920,0,0,40);

    if(mask[0] < 128) {
    	noStroke();
      push();
      fill(pix);
      rect(x, y, rectSize, rectSize);
      pop();

		x1 = dx1 + x;
    	y1 = dy1 + y;
      ellipse(x1, y1, circleSize2, circleSize2);

    }


    else {
    x1 = dx + x;
    y1 = dy + y;
    noStroke();
    let hsluvColor = convertRgbToHsluv(pix);
	fillHsluv(hsluvColor[0], 0, hsluvColor[2]/2);
    rect(x, y, rectSize, rectSize);
    fill(pix);
	arc(x1-halfSize, y1-halfSize, arcSize, arcSize, startAngle, endAngle);

	x = dx2 + x;
	y = dy2 + y;
	snowflower(x, y, snowflowerColor, snowflowerSize);
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