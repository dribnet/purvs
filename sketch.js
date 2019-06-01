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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}


const tile_width = 20;
const tile_height = 20;

function draw () {
  for(let i=0;i<10000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
     let pointSize = 30;
    let pointSize2 = 5;
    let halfSize = 5;
    let halfSize2 = 5;
    let round = random(2,3);
    let round2 = random(30, 40);
    let PS = map(round, 0, width, 0, height);
    let PS2 = map(round2,0,width,0,height);
    fill(pix);
    stroke(pix);

    if(mask[0] > 128) {
      //ellipse(x, y, PS, PS2);
      strokeWeight(1);
      let ff = random(0,200);
      stroke(ff,30);
      rect(x,y,PS2,PS/PS2);
      rect(x+random(20,30),y-random(20,30),PS,PS2);
          }
    else {
      rect(x,y,halfSize,halfSize/2);
      noFill();
      stroke(pix);
      strokeWeight(1);
      ellipse(x, y, halfSize2, halfSize2); 

 
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
   //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
