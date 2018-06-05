// Constant Variables
const pointSize = 10;
const halfSize = pointSize/2;
const width = 1080/pointSize;
const height = 1920/pointSize;
//Used in Both Shape functions 
const p1 = pointSize/2;
// Used in InnerMask Shape function
const p2 = pointSize/3.5;
const p3 = pointSize/4;
// Used in Star function
const p4 = pointSize/8;
// Changeable Variables
let sourceImg = null;
let maskImg = null;
let currentY = 0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');
  imageMode(CENTER);
  noStroke();
  background(30);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i = 0; i < width; i++) {
    let x = i * pointSize;
    let y = currentY * pointSize;	
	let mask = maskImg.get(x, y);		
	if(mask[0] == 255){	//Check if pixel is in the mask
		fill(sourceImg.get(x, y));
		// Draw inner pixel 
		drawInnerPixelShape(x, y);	
	}else { // Decide Whether we draw a background star
		var n = random(100);
		if(n > 99.5){
			n = random(10);
			//Decide on a color
			if(n <= 2){
				fill(255,0,0); // Red
			}else if(n <= 5){
				fill(0,255,0); // Green
			}else if(n <= 7){
				fill(0,0,255); // Blue
			}else {
				fill(255,255,0); // Yellow
			}
			// Draw a star
			drawStar(x, y);
		}
	}    
  }  
  currentY += 1;
  if(currentY > height) {	  
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

/*
	Function which draws an Honeycomb inspired shape, made to be thinner like the inner strips of a LED or CRT pixel.
*/
function drawInnerPixelShape(x, y){	
	beginShape();
	vertex(x, y-p1);
	vertex(x+p2, y-p3);
	vertex(x+p2, y+p3);
	vertex(x, y+p1);
	vertex(x-p2, y+p3);
	vertex(x-p2, y-p3);
	endShape(CLOSE);	
}

/*
	Function which draws a star shape
*/
function drawStar(x, y){	
	beginShape();
	vertex(x, y-p1);
	vertex(x+p4, y-p4);
	vertex(x+p1, y);
	vertex(x+p4, y+p4);
	vertex(x, y+p1);
	vertex(x-p4, y+p4);
	vertex(x-p1, y);
	vertex(x-p4, y-p4);
	endShape(CLOSE);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
