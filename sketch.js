let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "Raps.jpg";
let maskFile   = "RapsMask1.png";
let maskFile2  = "RapsMask2.png";
let maskFile3  = "RapsMask3.png";
let outputFile = "Raps_artwork1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
  maskImg2 = loadImage(maskFile2);
  maskImg3 = loadImage(maskFile3);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  maskImg2.loadPixels();
  maskImg3.loadPixels();
}

function draw () {
  for(let i=0;i<5000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let mask2 = maskImg2.get(x,y);
    let mask3 = maskImg3.get(x,y);
    let pointSize = 20;
    let halfSize = 50;
    fill(pix);
    if(mask[0] > 128) {
      //ellipse(x, y, pointSize, pointSize);
      noStroke();
      rect(x,y,pointSize,pointSize);
    } else if(mask2[0] > 128){
      //stroke(255);
      //ellipse(x, y, pointSize, pointSize);
      noStroke();
      triangle(x,y,x+pointSize,y+pointSize,x+pointSize,y);
      triangle(x+pointSize,y,x+pointSize,y+pointSize,x+pointSize+pointSize,y); 
    } else if(mask3[0] > 128){
      //stroke(100,100,0);
      noStroke();
      triangle(x, y, x, y+pointSize,x+pointSize,y+pointSize);
      triangle(x,y+pointSize,x+pointSize,y,x+pointSize,y+pointSize);
    } else {
      noStroke();
      //rect(x, y, pointSize, pointSize);  
      triangle(x,y,x+pointSize,y-pointSize,x+pointSize,y);
      triangle(x+pointSize,y,x+pointSize,y-pointSize,x+pointSize+pointSize,y); 
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
