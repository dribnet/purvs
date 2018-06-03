let finalVersion = false;

let pointSize = 40;

let elementSpacin = 20 ;
let circleSize = 40;
let squareSize = 20;


if(finalVersion){
  pointSize = 20;
  circleSize = 25;
  squareSize = 20;
};

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
  fill(c)
  
  // for (var i = 0; i < 6; i ++) {
  //   ellipse(0,30,20,20);
  //   rotate((i + 1) / 6.0 * TAU+radians(90));
  // }
  for(let i = 0; i < 6; i++){ //this code is for short lines
      angleMode(DEGREES)
      rotate(60)
      ellipse(0,30,circleSize, circleSize)
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
      fill(pix);
      // ellipse(x, y, circleSize, circleSize);
      flower(x,y,pix,0.3);
      // x = x + dx/2;
      // y = y + dy/2;
      // let owl_size = map(hsluvColor[2],0,100,0.3,0.9);
      // owl(x,y,pix,owl_size);
    }
    else {  
      x = x + dx;
      y = y + dy;
      
      fillHsluv( 0, 0, hsluvColor[2]/2);
      rect(x-halfSize, y-halfSize, squareSize+random(20), squareSize);    
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
