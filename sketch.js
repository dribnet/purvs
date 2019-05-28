let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1x.png";

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
const tileHeight = 20;
const tileStepX = 6;
const tileStepY = 10;
function draw () {
  background(80);
  for(let y=0; y<height; y+=tileStepY){
    for(let x=0; x<width; x+=tileStepX){
      noStroke();
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      if(mask[0] > 128) {
        rect(x, y, tileWidth, tileHeight);
      }
      else {
        stroke(1);
        stroke(color(85,95,30,100));
        line(x, y, x+30, y+40);
        stroke(color(255,95,0,45));
        line(x,y,x+10,y+30);
      }
    }
  }

  for(let i=0;i<1500;i++) {
    noStroke();
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    let halfSize = 50;
    
    // ---------BACKGROUND---------
    // if(mask[0] > 128) {
    //   let size=50;
    //   let rand=random(1,2);
    //   fill(pix,rand); 
    //   rect(x, y, size, (size*1.3)); 
    // }
    // // ---------CONTENT---------
    // else {
    //   // let size=10;
    //   // ellipse(x, y, size, (size *1.2));
    //   // fill(color(85,95,30,170));
    //   // ellipse(x, y, size, (size *2.5));
    //    let pointSize = 2;
    //   let x2 = floor(random(sourceImg.width));
    //   let y2 = floor(random(sourceImg.height));
    //   // rect(x, y, pointSize, pointSize);
    //   stroke(1);
    //   stroke(color(85,95,30,170));
    //   line(x, y, x2, y2);    
    // }
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
