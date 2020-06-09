let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_2.png";

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
  let squarew =6;
  let squareh = 6;
  strokeWeight(1.5);
  for(var xtile = 0; xtile < sourceImg.width; xtile= xtile+tilewidth){
    for(var ytile = 0; ytile < sourceImg.height;  ytile= ytile+tileheight){
    let pix = sourceImg.get(xtile, ytile);
    let mask = maskImg.get(xtile, ytile);
    let pixdark = sourceImg.get(xtile, ytile);
    if(mask[0]==120){
      pixdark[0] = pixdark[0]/1.1;
      pixdark[1]=  pixdark[1]/3.5;
      pixdark[2]=pixdark[2]/1.5;
      fill(pixdark[0],pixdark[1],pixdark[2],170);
      noStroke();
  ellipse(xtile,ytile,17);
    }if(mask[0]>120){
      noStroke();
      let pixMod = sourceImg.get(xtile, ytile);
      pixMod[0]=pixMod[0]*1.2;
      pixMod[1]=pixMod[1]/4;
      pixMod[2]=pixMod[2]/4;
      fill(pixMod);
      rect(xtile,ytile,tilewidth,tileheight);
      //fill(pix[0],pix[1],pix[2],200);
      //rect(xtile+2,ytile,tilewidth,tileheight);
      var rand = random(1,10);
      if(rand<2){
        noFill();
        stroke(255);
        circle (xtile,ytile,5);
        noStroke();
        fill(pixMod);
      }
    }
}
}

for(var xtile1 = 0; xtile1 < sourceImg.width; xtile1= xtile1+3.5){
  for(var ytile1 = 0; ytile1 < sourceImg.height;  ytile1= ytile1+3.5){
let mask = maskImg.get(xtile1, ytile1);
let pix1 = sourceImg.get(xtile1, ytile1);
    if (mask[0] <120){
      stroke(pix1);
      strokeWeight(.7);
      var lineLength = random(20,60);
      var xrand =random(1,5);
      line(xtile1+xrand,ytile1,xtile1+xrand,ytile1+lineLength);

    }
  }
}

  renderCounter = renderCounter +1 ;
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
