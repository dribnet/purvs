let sourceImg=null;
let maskImg=null;
let renderCounter=0;
const pointSize = 10;
let count = 0;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
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
	fill(0);
	rect(x-halfSize, y-halfSize, pointSize, pointSize); 
    fill(pix);
    if(mask[0] > 128) {
		beginShape();
		vertex(x, y-pointSize/2);
		vertex(x+pointSize/3, y-pointSize/4);
		vertex(x+pointSize/3, y+pointSize/4);
		vertex(x, y+pointSize/2);
		vertex(x-pointSize/3, y+pointSize/4);
		vertex(x-pointSize/3, y-pointSize/4);
		endShape(CLOSE);		
    }
    else { // Blank Background		
		var n = random(10);
		if(n >= 9.5){
			n = random(10);
			//Decide on a color
			if(n <= 2){
				pix = color(255,0,0);
			}else if(n <= 5){
				pix = color(0,255,0);
			}else if(n <= 7){
				pix = color(0,0,255);
			}else {
				pix = color(255,255,0);
			}
			fill(pix);
			// Draw a star
			beginShape();
			vertex(x, y-pointSize/2);
			vertex(x+pointSize/8, y-pointSize/8);
			vertex(x+pointSize/2, y);
			vertex(x+pointSize/8, y+pointSize/8);
			vertex(x, y+pointSize/2);
			vertex(x-pointSize/8, y+pointSize/8);
			vertex(x-pointSize/2, y);
			vertex(x-pointSize/8, y-pointSize/8);
			endShape(CLOSE);
		}
    }
	count++;
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
