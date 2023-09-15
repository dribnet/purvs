let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_2.jpg";
let maskFile   = "mask_3.png";
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
const tileWidth = 1;



function draw () {
  colorMode(HSB,250);
  for(let y = 0; y<height; y= y + tileHeight){
      for(let x = 0; x<width; x= x + tileHeight){
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);

        //sepia colour range
        let darkest = color(21, 73, 54); 
        let lightest = color(23,99,192); 

        let lightness = map(pix[1], 0, 240, 0, 1);

        let sepia = lerpColor(darkest, lightest, lightness);

        fill(sepia);
        if(mask[0] > 128) {
         rect(x, y, tileHeight, tileWidth);
        }
        else if(mask[0] < 128 && mask[0] > 56){
          fill(33, 70, 300);
          rect(x,y, tileHeight,tileHeight);
        }
        else{
          fill(250);
          rect(x,y, tileHeight,tileHeight);
        }
        
      }
  } 

 //leaves white dots all over the photo randomly to make it look older

  for(let i=0;i<100;i++) {
     let x = floor(random(sourceImg.width));
     let y = floor(random(sourceImg.height));
     let mask = maskImg.get(x, y);

     if(mask[0] > 128) {
       fill(33, 70, 300);
       rect(x, y, tileHeight, tileHeight);
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
