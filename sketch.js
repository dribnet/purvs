let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

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

const tileHeight = 1;
const tileWidth = 2;



function draw () {

  for(let y = 0; y<height; y= y + tileHeight){
      for(let x = 0; x<width; x= x + tileHeight){
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);

        colorMode(HSB,360);

        //sepia colour range
        let darkest = color(21, 73, 54); 
        let lightest = color(23,99,192); 

        let lightness = map(pix[1], 0, 240, 0, 1);

        let sepia = lerpColor(darkest, lightest, lightness);

        fill(sepia);
        if(mask[0] > 128) {
         rect(x, y, tileHeight, tileWidth);
        }else{
          fill(240);
          rect(x,y, tileHeight,tileHeight);
        }
        
      }
  }
  // for(let i=0;i<56000;i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   let pointSize = 3;
  //   let halfSize = 50;
  //   fill(pix);
  //   if(mask[0] > 128) {
  //     rect(x, y, pointSize, pointSize);
  //   }
    // else {
    //   fill(32, 33, 27);
    //   ellipse(x, y, pointSize, pointSize);    
    // }
  // }
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
