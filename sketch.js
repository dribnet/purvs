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
  background(255);
  angleMode(DEGREES);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
function flake (x, y){
	push()
	translate(x, y)
    for(i=0; i<10; i++){
    rotate(45);
    beginShape()
      vertex(0, 0);
      vertex(-3, 5);
      vertex(-40, 0);
      vertex(-3, -5);
      vertex(0, 0);
    endShape(CLOSE)
    }
    pop()
}
function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 20;
    let halfSize = 50;
    fill(pix);
    if(mask[0] > 128) {
    	push()
    	flake(x, y)
    	pop()
   }
    else {
    beginShape()	
      vertex(x, y);
      vertex(x+5, y-15);
      vertex(x+20, y-20);
      vertex(x+5, y-25);
      vertex(x, y-40);
      vertex(x-5, y-25);
      vertex(x-20, y-20);
      vertex(x-5, y-15);
    endShape()    
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
