let sourceImg=null;
let maskImg=null;
let renderCounter=0;


let pointSize = 30;
let elementSpacing = 9;
let squareSize = 2.5;
let circleSize = 12.5;


function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
  maskImg2 = loadImage("mask_3.1.png")
  maskImg3 = loadImage("mask_3.2.png")
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
    let a = i + 1;
    let x = i * elementSpacing;
    let y = renderCounter * elementSpacing;
    let x2 = floor(random(x-30, x+30));
    let y2 = floor(random(y-30,y+30));
    let y3 = floor(random(y/100000,y/100));
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let mask2 = maskImg2.get(x, y);
    let mask3 = maskImg3.get(x, y);
    let halfSize = squareSize/2;
    let tranSize = circleSize/2;
    fill(pix);

    if(mask[0] > 128) {

     if(mask2[0] > 128){
       strokeWeight(circleSize);
       stroke(pix);
       line(x, y, x2, y2);
     }

     else{
      if(mask3[0] > 128){
        noStroke();
        tranSize = tranSize + y3;
        ellipse(x,y,tranSize, tranSize);
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
