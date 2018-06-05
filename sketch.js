/* Set to true to make final high-resolution version */
let finalVersion = true;

/* Default versions of variables */
let elementSpacing = 40;
let squareSize = 40;
let colorSquareSize = 40;

/* Override some variables with high-resolution final version*/
if (finalVersion){
  elementSpacing = 5;
  squareSize = 5;
  colorSquareSize = 5;
}

let sourceImg=null;
let maskImg=null;
let curRow=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function convertRgbToHsluv(c){
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

/* Cross Pattern with "V" letter in the middle*/
function crossPattern(x, y, c, s){
	push();
	translate(x, y);
	scale(s); // Set the createCanvas
	noStroke();
	fill(c);
	rect(-50, -50, 100, 100); // Background square
	stroke(c); // Set the gray value
    strokeWeight(5);
    	// Draw the cross shape
    	fill(90, 15, 15); // Dark Red
    	beginShape();
    	vertex(0, -25);
    	vertex(-25, -50);
    	vertex(-50, -25);
    	vertex(-25, 0);
    	vertex(-50, 25);
    	vertex(-25, 50);
    	vertex(0, 25);
    	vertex(25, 50);
    	vertex(50, 25);
    	vertex(25, 0);
    	vertex(50, -25);
    	vertex(25, -50);
    	vertex(0, -25);
    	endShape();

    	//Draw the "V" letter
    	fill(c); 
    	noStroke();
    	beginShape();
    	vertex(0, -2);
    	vertex(-8, -11);
    	vertex(-6, -11);
    	vertex(-6, -15);
    	vertex(-16, -15);
    	vertex(-16, -11);
    	vertex(-14, -11);
    	vertex(0, 15);
    	vertex(14, -11);
    	vertex(16, -11);
    	vertex(16, -15);
    	vertex(6, -15);
    	vertex(6, -11);
    	vertex(8, -11);
    	vertex(0, -2);
    	endShape();
	pop();
}

function draw () {
  for(let i=0;i<(1080/elementSpacing);i++) {
    //let dx = floor(random(elementSpacing/4));//offset X
    //let dy = floor(random(elementSpacing/4));//offset Y
    let x = int(i * elementSpacing);
    let y = int(curRow * elementSpacing);

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let patternSize = colorSquareSize/100.0;
    
    //fill(pix);
    if(mask[0] > 128) {
      fill(pix);
      let halfSize = squareSize/2;
      rect(x-halfSize, y-halfSize, colorSquareSize, colorSquareSize);

      /* Cross pattern*/
      //crossPattern(x, y, pix, patternSize);
    }
    else {
      /* Offset */
      //x = x + dx;
      //y = y + dy; 

      /* Remove color*/
      let hsluvColor = convertRgbToHsluv(pix);
      fillHsluv(0, 0, hsluvColor[2]);

      crossPattern(x, y, pix, squareSize/100.0);

      /* Normal square*/
      //let halfSize = squareSize/2;
      //rect(x-halfSize, y-halfSize, squareSize, squareSize);    
    }
  }
  curRow = curRow + 1;
  
  if(curRow > 1920/elementSpacing) {
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
