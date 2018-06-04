

let pointSize = 40;

let elementSpacin = 15 ;
let circleSize = 50;
let squareSize = 20;


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
  background(240);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function convertRGBToHsluv(c){
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

function flower(x, y, c, s){

  push();
  translate(x,y);
  scale(s);

  

  for(let i = 0; i < 6; i++){ 
      angleMode(DEGREES)
      rotate(60)
      fill(c)
      ellipse(0,30,circleSize, circleSize)
    }
  fill(c)
  ellipse(0,0,40,40)

  for(i = 0; i <=5 ;i++){ 
      angleMode(DEGREES);
      rectMode(CENTER);
      fill(255)
      rotate(60);
      stroke(255)
      triangle( 0, 35, -10, 20, 10, 20);
    }
  for(let i = 0; i <= 12; i++){ 
      angleMode(DEGREES)
      rotate(30)
      stroke(255)
      line(0,20,0,30)
    }


  pop();
}

function draw () {
  for(let i=0;i<1080/elementSpacin;i++) {

    let x = int(i * elementSpacin);
    let y = int(renderCounter * elementSpacin);
    let dd = floor(random(sourceImg.width));
    let dt = floor(random(sourceImg.height));
    let dx = floor(random(elementSpacin/4));
    let dy = floor(random(elementSpacin/4)); 

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize / 2;
    let hsluvColor = convertRGBToHsluv(pix);


    if(mask[0] > 128) {
      x = x + dx;
      y = y + dy;

      flower(x,y,pix,0.2);

    }
    if (renderCounter < 20 && mask[0] <= 128)  { 
      // x = x + dx;
      // y = y + dy;
      stroke(pix);
      strokeWeight(5);
      noFill();
      rect(dd-halfSize, dt-halfSize, squareSize, squareSize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacin) {
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
