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
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  background('#0C252E');
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<5000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    noFill();

    var maskMap = map(mask[0], 0, 255, 0, 90);
    brushStroke(x, y, pix, maskMap, mask, 3);
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

function brushStroke(x, y, c, maskMap, mask, level){ //Recursive function
  var maskArr = mask[0]; // if/else couldn't read passed 'mask' value
  var size = map(maskMap, 0, 255, 8, 6);
  var length = map(maskMap, 0, 255, 10, 25);
  
  if(maskArr < 90){                             //Darker pixels
    noStroke();
    fill(c);
    
    push();
      translate(x, y); //move origin to pixel
      rotate(maskMap);
      ellipse(0, 0, size, length*(size/2));
    pop();
  }else if(maskArr < 180){                     //Grey pixels
    noStroke();
    fill(c);

    push();
      translate(x, y); //move origin to pixel
      rotate(maskMap);
      rect(0, 0, length, size, size);
    pop();
  }else{                                      //Brighter pixels
    noFill();
    stroke(c);
    strokeWeight(size);
    
    push();
      translate(x, y); //move origin to pixel
      rotate(maskMap);
      line(0, 0, 0, length+size);
    pop();
  }

  if(level > 0 && (random(0, 1) > 0.4)){ //adds chance to fail entire recursive call
    level-=1;
    if((random(0, 1) > 0.4)){ //adds chance to fail particular colour variance
      brushStroke(x, y-(length/size), color(red(c), green(c), blue(c)+length), maskMap-size, mask, level);
      brushStroke(x-(length/size), y, color(red(c), green(c), blue(c)-length), maskMap+size, mask, level);
    }
    if((random(0, 1) > 0.7)){
      brushStroke(x, y-(length/size), color(red(c), green(c)+length, blue(c)), maskMap-size, mask, level);
      brushStroke(x-(length/size), y, color(red(c), green(c)-length, blue(c)-length), maskMap+size, mask, level);
    }
    if((random(0, 1) > 0.4)){
      brushStroke(x, y-(length/size), color(red(c)+length, green(c), blue(c)), maskMap-size, mask, level);
      brushStroke(x-(length/size), y, color(red(c)-length, green(c), blue(c)), maskMap+size, mask, level);
    }
  }
}