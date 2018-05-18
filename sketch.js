let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
//let pointSize = 200;
  let pSBig = 350;
  let pSSmall = 300;

function draw () {
    for(let i=0;i<1;i++) {

    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = floor(random(pSSmall, pSBig));

    fill(pix);
    //if(y<(sourceImg.height/2)){
      ellipse(x, y, pointSize, pointSize);
    //}
    //if(y>(sourceImg.height/2)){
    //  rect(x-(pointSize/2), y-(pointSize/2), pointSize, pointSize); 
    //}
    if(pSBig>50){
      pSBig-=0.5;
    }
    if(pSSmall>10){
      pSSmall-=0.5;
    }
    
    //if(mask[0] > 128) {
     // ellipse(x, y, pointSize, pointSize);
    //}
    //else {
    //  rect(x-(pointSize/2), y-(pointSize/2), pointSize, pointSize);    
    //}
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 6000) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
  //console.log(1*renderCounter);
  //console.log(pointSize);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
