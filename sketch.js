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
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
	/*
	for(let row = 0; row < sourceImg.height; row++){
		for(let col = 0; col < sourceImg.width; col++){
			let pix = sourceImg.get(col, row);
			let mask = maskImg.get(col, row);
			let pointSize = 1;
			let halfSize = pointSize/2;
			// Decide on the colour
			if(pix[0] > pix[1] && pix[0] > pix[2]){
				pix = color(pix[0],0,0);
			}else if(pix[1] > pix[0] && pix[1] > pix[2]){
				pix = color(0,pix[1],0);
			}else if(pix[2] > pix[1] && pix[2] > pix[0]){
				pix = color(0,0,pix[2]);
			}else{
				pix = color(128,128,128);
			}
			fill(pix);
			// If in the mask, use squares
			if(mask[0] > 128) {
			  rect(col-halfSize, row-halfSize, pointSize, pointSize);      
			}else {
			  ellipse(col, row, pointSize, pointSize);
			}
		}
	}
	*/	
  for(let i=0;i<100;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 50;
    let halfSize = pointSize/2;
	// Decide on the colour
	if(pix[0] > pix[1] && pix[0] > pix[2]){
		pix = color(pix[0],0,0);
	}else if(pix[1] > pix[0] && pix[1] > pix[2]){
		pix = color(0,pix[1],0);
	}else if(pix[2] > pix[1] && pix[2] > pix[0]){
		pix = color(0,0,pix[2]);
	}else{
		pix = color(128,128,128);
	}
    fill(pix);
	// If in the mask, use squares
    if(mask[0] > 128) {
	  rect(x-halfSize, y-halfSize, pointSize, pointSize);      
    }else {
      ellipse(x, y, pointSize, pointSize);
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 20) {
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
