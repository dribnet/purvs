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
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x,y);
    let mask = maskImg.get(x,y);
    let pointSize = 360;
}

  // input_3

    // smoke
    const tile_width1 = 12;
    const tile_height1 = 8;

    for(let y = 0; y<height; y = y+tile_height1){
    for(let x = 0; x<width; x = x+tile_width1){
    let pix = sourceImg.get(x,y);
    let mask = maskImg.get(x,y);
    fill(pix);
    noStroke();
    if(mask[0] > 220){
    fill(pix);
    noStroke();
    rect(x-10,y-6,tile_width1*2,tile_height1*2.5);
  }
  }
  }

    //background
    const tile_width2 = 3;
    const tile_height2 = 3;

    for(let y = 0; y<height; y = y+tile_height2){
    for(let x = 0; x<width; x = x+tile_width2){
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    if (mask[0]>=198 && mask[0]<207){
    push();
    stroke(pix);
    strokeWeight(2);
    line(x-1,y+1,x-1,y-1);
    pop();
}
}
}

    // hair and clothes
    const tile_width3 = 8;
    const tile_height3 = 8;

    for(let y = 0; y<height; y = y+tile_height3){
    for(let x = 0; x<width; x = x+tile_width3){
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    stroke(pix);
    fill(pix);
    strokeWeight(1.5);
    if(mask[0]<120){
    fill(pix);
    triangle(x,y-(tile_height3/0.5),x+(tile_width3/0.5),y+(tile_height3/0.5),x-(tile_width3/0.5),y+(tile_height3/0.5)); 
    
}
}
}

    //skin
    const tile_width4 = 5;
    const tile_height4 = 5;

    for(let y = 0; y<height; y = y+tile_height4){
    for(let x = 0; x<width; x = x+tile_width4){
    let pix = sourceImg.get (x, y);
    let mask = maskImg.get (x, y);
    stroke(pix);
    fill(pix);
    strokeWeight(0.5);
    if(mask[0]>=130 && mask[0]<145){
    ellipse(x,y,tile_width4*1.5,tile_height4*1.5);
}
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
