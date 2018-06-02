let sourceImg=null;
let maskImg=null;
let renderCounter=0; // Rename to row counter

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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  maskImgB.loadPixels();
}

const pointSize = 15;

function draw () {

   bee();

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

  let beeX = 100;
  let beeY = 100;

  if(gotNumber == false)
  {
    beeX = random(800);
    beeY = random(1800);

    gotNumber = true
  }

	fill(0);

	ellipse(beeX+120, beeY+24, 37, 27);

	//ellipse(120, 50, 40, 50);

	triangle(beeX+100, beeY+40, beeX+20, beeY+40, beeX+45, beeY+55);
	triangle(beeX+100, beeY+40, beeX+20, beeY+70, beeX+80, beeY+70);

	triangle(beeX+140, beeY+40, beeX+190, beeY+55, beeX+220, beeY+40);
	triangle(beeX+140, beeY+40, beeX+160, beeY+70, beeX+220, beeY+70);
	
	fill(0);
	rect(beeX+100, beeY+40, 40, 10);
	fill(244, 223, 66);
	rect(beeX+95, beeY+50, 50, 10);
	fill(0);
	rect(beeX+90, beeY+60, 60, 10);
	fill(244, 223, 66);
	rect(beeX+95, beeY+70, 50, 10);
	fill(0);
	rect(beeX+100, beeY+80, 40, 10);
}

z_color_helper.js