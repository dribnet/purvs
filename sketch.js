let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let gotNumber = false;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
  maskImgB = loadImage("mask_3b.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255, 240, 240);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  maskImgB.loadPixels();
}

const pointSize = 15;

function draw () {
  for(let i = 0; i < 1080 / pointSize * 2; i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let maskB = maskImgB.get(x, y);
    let halfSize = pointSize/2;
    fill(pix);
    if(mask[0] < 128) {
      polygon(x, y, pointSize, 6);
      fill(255, 255, 255);
      polygon(x, y, pointSize/1.5, 6);
      fill(pix);
      polygon(x, y, pointSize/2, 6);
      fill(255, 255, 255);
      polygon(x, y, pointSize/3, 6);
      fill(pix);
      polygon(x, y, pointSize/3.5, 6);
      polygon(x, y, pointSize/2, 6);
      fill(255, 255, 255);
      polygon(x, y, pointSize/4, 6); 
    }
    else if(maskB[0] < 128) {
    	fill(pix);
    	polygon(x, y, pointSize/2, 6);
    	fill(255, 255, 255);
    	polygon(x, y, pointSize/4, 6); 
    }

      fill(pix);
      ellipse(x, y, pointSize/2, pointSize/2);
      fill(255, 255, 255);
      ellipse(x, y, pointSize/4, pointSize/4);
       
      fill(pix);
      ellipse(x, y*1.5, pointSize/2, pointSize/2);
      fill(255, 255, 255);
      ellipse(x, y*1.5, pointSize/4, pointSize/4);
  }

  bee();

  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/pointSize) {
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

function bee(){

  var beeX;
  var beeY;

  let beeSize = 6;

  if(gotNumber == false)
  {
    beeX = random(800);
    beeY = random(1800);

    gotNumber = true
  }

	fill(0);
  ellipse(beeX+120/beeSize, beeY+24/beeSize, 37/beeSize, 27/beeSize);
	
	triangle(beeX+100/beeSize, beeY+40/beeSize, beeX+20/beeSize, beeY+40/beeSize, beeX+45/beeSize, beeY+55/beeSize);
	triangle(beeX+100/beeSize, beeY+40/beeSize, beeX+20/beeSize, beeY+70/beeSize, beeX+80/beeSize, beeY+70/beeSize);

	triangle(beeX+140/beeSize, beeY+40/beeSize, beeX+190/beeSize, beeY+55/beeSize, beeX+220/beeSize, beeY+40/beeSize);
	triangle(beeX+140/beeSize, beeY+40/beeSize, beeX+160/beeSize, beeY+70/beeSize, beeX+220/beeSize, beeY+70/beeSize);
	
	fill(0);
	rect(beeX+100/beeSize, beeY+40/beeSize, 40/beeSize, 10/beeSize);
	fill(244, 223, 66);
	rect(beeX+95/beeSize, beeY+50/beeSize, 50/beeSize, 10/beeSize);
	fill(0);
	rect(beeX+90/beeSize, beeY+60/beeSize, 60/beeSize, 10/beeSize);
	fill(244, 223, 66);
	rect(beeX+95/6, beeY+70/beeSize, 50/beeSize, 10/beeSize);
	fill(0);
	rect(beeX+100/beeSize, beeY+80/beeSize, 40/beeSize, 10/beeSize);
}

z_color_helper.js