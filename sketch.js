let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

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

function draw () {
  for(let i=0;i<5000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 10;
    fill(pix);

    if(mask[0] >= 0 && mask[0] <36) {
      stroke('red')
      rect(x, y, pointSize, pointSize);
      console.log("0")
    }
    else if(mask[0] >= 36 && mask[0] <72){
      stroke('blue')
      ellipse(x, y, pointSize, pointSize);
      console.log("36")    
    }
    else if(mask[0] >= 72 && mask[0] <108){
      stroke('green')
      line(x, y, x+4, y+4);
      console.log("72")    
    }
    else if(mask[0] >= 108 && mask[0] <144){
      stroke('yellow')
      triangle(x, y, x+3, y+3, x-4, y-4);
      console.log("108")    
    }
    else if(mask[0] >= 144 && mask[0] <180){
      stroke('blue')
      rect(x, y, pointSize, pointSize);
      console.log("144")    
    }
    else if(mask[0] >= 180 && mask[0] <216){
      stroke('yellow')
      ellipse(x, y, pointSize, pointSize);
      console.log("180")    
    }
    else if(mask[0] >= 216 && mask[0] <255){
      stroke('red')
      line(x, y, x+4, y+4);
      console.log("216")    
    }
    else {
      stroke('orange')
      triangle(x, y, x+13, y+13, x-14, y-14);
      console.log("255")      
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
