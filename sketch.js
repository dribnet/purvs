let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "Burgenland.jpg";
let maskFile   = "BurgenlandMask.png";
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

  //naturschutzgebiet sign
  sourceImg.loadPixels();
  maskImg.loadPixels();

}

const chunkHeight =15;
const chunkWidth =15;

function draw () {
  for(let y=0; y<height; y=y+chunkHeight){
    for(let x=0; x<width; x=x+chunkWidth){
      let pixl = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);
      fill(pixl);
      let x2 = x+floor(random(30));
      let y2 = y+floor(random(30));
      let x3 = x-floor(random(30));
      let y3 = y-floor(random(30));
      if (mask[0] > 128) {
        // stroke(155);
        // let cwx = chunkWidth/2;
        // let chx = chunkHeight/2;
        // rect(x,y,cwx,chx);
        // rect(x+cwx,y,cwx,chx);
        // rect(x,y+chx,cwx,chx);
        // rect(x+cwx,y+chx,cwx,chx);
        stroke(pixl);
        strokeWeight(2);
        line(x,y,x+chunkWidth,y+chunkHeight);
        line(x,y,x2,y2);
        line(x,y,x3,y3);
      } else{
        noStroke();
        //rect(x,y,chunkWidth,chunkHeight);
        triangle(x-chunkWidth,y+chunkHeight,x,y,x+chunkWidth,y+chunkHeight); 
      }
    }
  }
  //RANDOMCODEFORBURGENLAND
  // for(let i=0;i<2000;i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   let pointSize = 20;
  //   let halfSize = 50;
  //   fill(pix);
  //   if(mask[0] > 128) {
  //     noStroke();
  //     rect(x,y,20,20);
  //   } else {
  //     noStroke();
  //     ellipse(x, y, pointSize, pointSize);
  //   }
  // }
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
