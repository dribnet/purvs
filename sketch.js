let sourceImg=null;
let maskImg=null;

function preload() {
	sourceImg = loadImage("input_1.jpg");
	maskImg = loadImage("mask_1.png");
}

function setup () {
	  let main_canvas = createCanvas(1080, 1920);
	  main_canvas.parent('canvasContainer');
	  angleMode(DEGREES);
	  imageMode(CENTER);
	  noStroke();
	  background(200);
	  sourceImg.loadPixels();
	  maskImg.loadPixels();
}

let pointWidth = 60;
let pointHeight = 60;
let pointSize = 60;

function draw () {
	//draw squares across background
	for(let i=0;i<1080;i+=pointWidth){ 
		for(let j = 0; j < 1920; j+=pointHeight) {
			let xBack = i;
			let yBack = j;
			pointHeight = floor(random(40, 70));
			if(i>=1920-70){
				pointWidth = 1920 - j;
			}
			let pix = sourceImg.get(xBack+pointWidth/2, yBack+pointHeight/2);
			let mask = maskImg.get(xBack+pointWidth/2, yBack+pointHeight/2);
			if(mask[0] <= 128){
				// convert to grayscale (remove color, keep brightness in hsluv colorspace)
      			let hsluvColor = convertRgbToHsluv(pix);
				fillHsluv(0, 0, hsluvColor[2]);
				rect(xBack, yBack, pointWidth, pointHeight); 
			}
			else{
				fill(pix);
				rect(xBack, yBack, pointWidth, pointHeight); 
			}
		}
	}
	//draw hearts 
	for(let i=0;i<2000;i++) {
		let xFront = floor(random(sourceImg.width));
		let yFront = floor(random(sourceImg.height));
		let pix = sourceImg.get(xFront, yFront);
		let mask = maskImg.get(xFront, yFront);
		let heartSize = 150;
		if(mask[0] > 128) {
			fill(pix);
			drawHeart(xFront, yFront, heartSize, heartSize, pix);
		}
	}

	//when done
    console.log("Done!")
    noLoop();
    // saveBlocksImages();

}

function drawHeart(centreX, centreY, size, size, values){
	let height = size/4;
  	let r = values[0];
  	let g = values[1];
	//update width
	let width = map(g, 0, 255, size/5, size/2);
  	let b = values[2];	
	//update rotation
	let rotation = map(b, 0, 255, -90, 90);
		
	
	//draw heart
	push();
	translate(centreX, centreY);
	rotate(rotation);
	arc(-width/4, 0, width/2, width/2, 180, 360);
	arc(width/4, 0, width/2, width/2, 180, 360);
	triangle(-width/2, 0, width/2, 0, 0, height);
	pop();
	
	
}

function convertRgbToHsluv(c) {
	return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}






