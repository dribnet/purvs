let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(51, 45, 45);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {

  let tilewidth  =6;
  let tileheight = 6;
  let squarew =4.5;
  let squareh = 6;
  strokeWeight(1.5);
  for(var xtile = 0; xtile < sourceImg.width; xtile= xtile+tilewidth){
    for(var ytile = 0; ytile < sourceImg.height;  ytile= ytile+tileheight){
    let pix = sourceImg.get(xtile, ytile);
    let mask = maskImg.get(xtile, ytile);
    if (mask[0] <120){
      fill(pix);
      rect(xtile,ytile,squarew,squareh);
    } if(mask[0]==120){
      fill(pix);
  rect(xtile,ytile,tilewidth,tileheight);
    }if(mask[0]>120){
      let pixMod = sourceImg.get(xtile, ytile);
      pixMod[0]=pixMod[0]*1.2;
      pixMod[1]=pixMod[1]/4;
      pixMod[2]=pixMod[2]/4;
      fill(pixMod);
      rect(xtile,ytile,tilewidth,tileheight);
      var rand = random(1,10);
      if(rand<2){
        fill(255);
        circle (xtile,ytile,5);
      }
    }
}
}

  renderCounter = renderCounter + 1;
  if(renderCounter > 1) {
    console.log("Done!")
    noLoop();
    //uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
