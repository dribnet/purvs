let finalVersion = false;

let pointSize = 40;

let elementSpacin = 35 ;
let circleSize = 50;
let squareSize = 30;


if(finalVersion){
  pointSize = 20;
  circleSize = 25;
  squareSize = 20;
};

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background('gray');
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
  stroke(255);
  strokeWeight(4)
  

  for(let i = 0; i < 6; i++){ 
      angleMode(DEGREES)
      rotate(60)
      fill(c)
      ellipse(0,30,circleSize, circleSize)
    }
  fill(c)
  ellipse(0,0,40,40)

  for(i = 0; i <=5 ;i++){ // this code is for triangles
      angleMode(DEGREES);
      rectMode(CENTER);
      fill(255)
      rotate(60);
      triangle( 0, 35, -10, 20, 10, 20);
    }


  pop();
}

function draw () {
  for(let i=0;i<1080/elementSpacin;i++) {

    let x = int(i * elementSpacin);
    let y = int(renderCounter * elementSpacin);
    let dx = floor(random(elementSpacin/4));
    let dy = floor(random(elementSpacin/4)); 

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize / 2;
    let hsluvColor = convertRGBToHsluv(pix);


    if(mask[0] > 128) {

      flower(x,y,pix,0.3);

    }
    else { 

      fill(pix)
      rect(x-halfSize, y-halfSize, squareSize, squareSize);    
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
