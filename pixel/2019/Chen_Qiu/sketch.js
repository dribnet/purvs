let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "artwork_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(150);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw_special_rect(x, y, width, height) {
  rect(x, y, width, height);
  let die_roll = random([0, 1, 2]);
  let width1 = width*1.5;
  let height1 = height*1.5;
  if(die_roll == 0) {
    noStroke();
    fill(50);
    rect(x, y, width1, height1);
  }
  else if (die_roll == 1) {
    noStroke();
    fill(0);
    rect(x, y, width1, height1);
  }
  else if (die_roll == 2) {
    noStroke();
    fill(0);
    rect(x, y, width1, height1);
  }
}

function draw () {

const tile_width = 10;
const tile_height = 10;
let base =5;

    for(let i=0;i<704/base;i++) {

    let x = int(i * base);
    let y = int(renderCounter * base);

  	if(i%2 == 0){
  	 y += base/2;
  	}

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = base/2;
    fill(pix);


    let size1 = base*1.5;
    if(mask[0] == 0) {
      noStroke();
      draw_special_rect(x, y, tile_width, tile_height)
    }
    else {
      fill(pix);
      noStroke();
      ellipse(x, y, size1, size1);
push()
      stroke(255,100);
      ellipse(x, y, size1/2, size1/2);
pop()
    }
  }


  renderCounter = renderCounter + 1;
  if(renderCounter > 250) {
    console.log("Done!")
    noLoop();

 //uncomment this to save the result
   saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}