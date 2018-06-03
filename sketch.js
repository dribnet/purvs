let sourceImg=null;
let maskImg=null;
let renderCounter=0;
const pointSize = 30;
let count = 0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
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
  for(let i=0; i<1080/pointSize; i++) {
    let x = i * pointSize;
    let y = renderCounter * pointSize;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;
	fill(0,0,0);
	rect(x-halfSize, y-halfSize, pointSize, pointSize); 
	/*
	if(pix[0] > pix[1] && pix[0] > pix[2]){
		pix = color(pix[0],0,0);
	}else if(pix[1] > pix[0] && pix[1] > pix[2]){
		pix = color(0,pix[1],0);
	}else if(pix[2] > pix[1] && pix[2] > pix[0]){
		pix = color(0,0,pix[2]);
	}else{
		pix = color(128,128,128);
	}
	*/
    fill(pix);
    if(mask[0] > 128) {
		if(count % 2){
			triangle(x-pointSize/2, y-pointSize/2, x, y+pointSize/2, x+pointSize/2, y-pointSize/2);
		}else{
			triangle(x-pointSize/2, y+pointSize/2, x, y-pointSize/2, x+pointSize/2, y+pointSize/2);
		}		
		count++;
    }
    else {
		ellipse(x, y, pointSize, pointSize);   
    }
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
