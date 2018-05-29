let sourceImg=null;
let maskImg=null;
let maskTwo=null;
let renderCounter=0; 
let renderCounterTwo=0;
var SecondDraw = false;
var DrawCalls = 400;
let circleSize = 40;
const pointSize = 40;


function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
  maskTwoImg = loadImage("mask_1_2.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i = 0; i < 1080 / pointSize * 2; i++) {
  	/* First Mask */
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);


    /* Second Mask */
	let x2 = floor(random(sourceImg.width));
	let y2 = floor(random(sourceImg.height));
	let pix2 = sourceImg.get(x2, y2);
	let maskTwo = maskTwoImg.get(x2, y2);
    let halfSize = pointSize/2;
    fill(pix);

    /* Masking */
    if(mask[0] > 128 && !SecondDraw) {
    fill(pix);
      polygon(x, y, pointSize, 6);
    }
    if(maskTwo[0] > 128 && SecondDraw) {
    fill(pix2);
    //triangle(x2-halfSize, y+pointSize, x2, y2, x2+halfSize, y2+pointSize); 
    rect(x2, y2, circleSize, circleSize);
    }
     else {
      fill(pix);
      //triangle(x-halfSize, y+pointSize, x, y, x+halfSize, y+pointSize); 
      rect(x, y, pointSize/1.1, pointSize/1.1);
    }
  }
  renderCounter ++;

  /* First Loop */
  if(renderCounter > 1920/pointSize && !SecondDraw) {
    console.log("Done!");
    SecondDraw = true;
    //noLoop();
    // saveBlocksImages();
  }
  /* Second Loop */
  if(SecondDraw) {
		renderCounterTwo++;
		if(renderCounterTwo > DrawCalls) {
			console.log("Done!");
			noLoop();
			// saveBlocksImages();
		}
	}
}
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
function convertRgbToHsluv(c) {
	return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

//polygon code from https://p5js.org/es/examples/form-regular-polygon.html
function polygon(x, y, radius, npoints) {
	angleMode(RADIANS);
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
