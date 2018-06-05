let sourceImg=null;
let maskImg=null;
let renderCounter=0;


let pointSize = 60/2;
let elementSpacing = 36/2;
let squareSize = 20/2;
let circleSize = 50/2;


function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
  maskImg2 = loadImage("mask_2.1.png")
  maskImg3 = loadImage("mask_2.2.png")
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
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
  for(let i=0;i<1080/elementSpacing;i++) {
    //let x = floor(random(sourceImg.width));
   // let y = floor(random(sourceImg.height));
    let x = i * elementSpacing;
    let a = i + 1;
    let y = renderCounter * elementSpacing;
    let x2 = floor(random(x-30, x+30));
    let y2 = floor(random(y-30,y+30));
    let y3 = y/100;
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let mask2 = maskImg2.get(x, y);
    let mask3 = maskImg3.get(x, y);
    let halfSize = squareSize/2;
    fill(pix);
    if(mask[0] > 128) {
      if(mask2[0] > 128){

       //ellipse(x,y, circleSize-10, circleSize-10);
       strokeWeight(circleSize);
       stroke(pix);
       line(x, y, x2, y2);
      }
      else{

        if(mask3[0] > 128){
        noStroke();
        ellipse(x,y,circleSize/1.5+y3, circleSize/1.5+y3);

       }
       else{
        noStroke();
      ellipse(x, y, circleSize, circleSize);
    }
    }
    }
      else{
      noStroke();
      x = x + dx;
      y = y + dy;
      squareSize2 = squareSize;
      rect(x-halfSize, y-halfSize, squareSize+y3, squareSize+y3);
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter*elementSpacing > 1920) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }



}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
