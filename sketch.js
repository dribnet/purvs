let finalVersion = false; //false --> simple version;
                          //true --> final version;

let sourceImg=null;
let maskImg=null;
let row=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let elementSpace = 40;
let backSize = 55;
let frontSize = 20;

if(finalVersion){
let elementSpace = 40;
let backSize = 22;
let frontSize = 20;
}

function convertRgbToHsluv(c){
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

function draw () {
  for(let i=0;i<1080/elementSpace;i++) {
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let x = int(i * elementSpace);
    let y = int(row * elementSpace);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let sOffset = random(0, 5);
    let swOffset = random(0, 5);
    let shOffset = random(0, 5);

    // fill(pix);
    if(mask[0] > 128) {
      push();
      translate(x - 20, y);
      fill(pix);
      // rotate(30);
      for(let j=0;j<5;j++){
        rotate(72);
        ellipse(10 + sOffset, 0, frontSize + swOffset, frontSize + shOffset);
      }
      pop();
    }
    else {
      let halfSize = backSize / 2;
      push();
      translate(x-halfSize, y-halfSize);
      let hsluvColor = convertRgbToHsluv(pix);
      fillHsluv(204, 46, hsluvColor[2]);
      rotate(45);
      rect(0, 0, backSize, backSize);
      pop();    
    }    
  }
  row = row + 1;
  if(row * elementSpace > 1920) {
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
