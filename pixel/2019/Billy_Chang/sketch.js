let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(17, 58, 124);
  angleMode(DEGREES);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
function flake (x, y){ //8 point star
	push()
	translate(x, y)
    for(i=0; i<10; i++){
    rotate(45);
    beginShape();
      vertex(0, 0);
      vertex(-3, 3);
      vertex(-20, 0);
      vertex(-3, -3);
      vertex(0, 0);
    endShape(CLOSE)
    }
    pop()
}
function flare (x, y){ //parallelogram
	beginShape();
	  vertex(x-10, y-5);
	  vertex(x+10, y-5);
	  vertex(x, y+5);
      vertex(x-20, y+5);
     // vertex(x-30, y+20);
	endShape(CLOSE);
}
function star (x, y){ //4 point star
	beginShape()
      vertex(x, y);
      vertex(x+5, y-15);
      vertex(x+20, y-20);
      vertex(x+5, y-25);
      vertex(x, y-40);
      vertex(x-5, y-25);
      vertex(x-20, y-20);
      vertex(x-5, y-15);
    endShape(CLOSE);
}
function blade(x, y){ //3 point star
	beginShape()
	  vertex(x-15, y-20);
	  vertex(x, y-7);
	  vertex(x+15, y-20);
	  vertex(x+2, y);
	  vertex(x, y+15);
	  vertex(x-2, y);
	endShape(CLOSE);
}
function draw () { //4 grayscales used to represent change in elements
  for(let i=0;i<4000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 20;
    let halfSize = 50;
    fill(pix);
    if(mask[0] >= 0 && mask [0] < 36) { //grayscale for 3 point star
    	push()
    	blade(x, y)
    	pop()
   }
    else if (mask [0] >= 36 && mask [0] < 116){ //grayscale for 4 point star
    	push()
    	star(x, y)
    	pop()
    }
    else if (mask [0] >= 116 && mask [0] < 255){ //grayscale for 8 point star
    	push()
    	flake(x, y)
    	pop()
    }
    else { //grayscale for parallelogram
    	push()
    	flare(x, y)
    	pop()
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
     saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
