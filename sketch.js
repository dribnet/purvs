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
const tileWidth = 15;
const tileHeight = 25;
const tileStepX = 30;
const tileStepY = 35;
function draw () {
  background(30);
  for(let i=0;i<4500;i++) {
    noStroke();
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    let halfSize = 50;
    
    //---------BACKGROUND---------
    if(mask[0] > 128) {
      let size=50;
      let rand=random(1,225);
      fill(pix,rand);
      stroke(2);
      stroke(color(200,200,200,70)); 
      rect(x, y, size, (size*1.4)); 
    }
    // ---------CONTENT---------
    else {
      let size=15;
      ellipseMode(CORNER);
      fill(color(200,200));
      ellipse(x, y, size, (size *1.2));
      fill(color(150,200));
      ellipse(x, y, size, (size *2.5));
      stroke(1); 
      stroke(color(255,95,0,45));
      line(x,y+10,y,x+20);
      stroke(color(255,195,0,55));
      line(y,x+5,x,y+10);   
      stroke(color(245,210,0,75));
      line(y,x+3,x,y+2);
      shearX(0); 
    }

  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
