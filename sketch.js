let sourceImg=null;
let maskImg=null;
let renderCounter=0;


let pointSize = 30;
let elementSpacing = 18;
let squareSize = 13;
let circleSize = 23;


function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
  maskImg2 = loadImage("mask_3.1.png")
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
}


function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
    //let x = floor(random(sourceImg.width));
   // let y = floor(random(sourceImg.height));
    let x = i * elementSpacing;
    //let a = i + 1;
    let y = renderCounter * elementSpacing;
    //let dx = floor(random(elementSpacing/2));
    //let dy = floor(random(elementSpacing/2));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let mask2 = maskImg2.get(x, y);
    let halfSize = squareSize/2;
    fill(pix);
    if(mask[0] > 128) {
      if(mask2[0] > 128){
      push();
      translate(x,y);
      scale(0.4);
      fill(pix);  
      flower();
      pop();
      
      }
      else{
      rect(x-halfSize, y-halfSize, pointSize, pointSize);  
       
    }
    }
    else {
      push();
      translate(x, y);
      scale(0.5);
      noFill();
      stroke(pix);
      flower();
      pop();  
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

function flower(){

  var i = 0;
  var radius = 15;

  angleMode(RADIANS);

  while(i < 20){
  rotate(360);
  ellipse(5, radius, 10, 20);
  i = i + 1;

  }

 }

 function fillHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function strokeHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function fillUniform(brightness) {
    fillHsluv(0, 0, brightness);
}

function strokeUniform(brightness) {
    strokeHsluv(0, 0, brightness);    
}