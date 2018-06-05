let finalVersion = true; //false --> simple version;
                         //true --> final version;

let sourceImg=null;
let maskImg=null;
let row=0;


let elementSpace;
let backSize;
let frontSize;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  let sOffset;
  let swOffset;
  let shOffset;

  if(finalVersion){
      elementSpace = 10;
      backSize = 12;
      frontSize = 5;

      sOffset = random(0, 5);
      swOffset = random(0, 10);
      shOffset = random(0, 6);
    }
    else{
      elementSpace = 40;
      backSize = 55;
      frontSize = 20;

      sOffset = random(0, 10);
      swOffset = random(0, 40);
      shOffset = random(0, 20);
    }
    console.log(elementSpace);  

  imageMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  background(208, 220, 237);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}





function convertRgbToHsluv(c){
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

function draw () {
//console.log(elementSpace);
  for(let i=0;i<1080/elementSpace;i++) {
    print("running");
    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let x = int(i * elementSpace);
    let y = int(row * elementSpace);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    
    if(finalVersion){
      sOffset = random(0, 5);
      swOffset = random(0, 20);
      shOffset = random(0, 10);
    }
    else{
      sOffset = random(0, 10);
      swOffset = random(0, 40);
      shOffset = random(0, 20);
    }

    // fill(pix);
    if(mask[0] > 128) {
      push();
      translate(x + sOffset - 20, y);
      fill(pix);
      // rotate(30);
      for(let j=0;j<5;j++){
        rotate(72);
        ellipse(10, 0, frontSize + swOffset, frontSize + shOffset);
      }
      pop();
    }
    else {
      let halfSize = backSize / 2;
      push();
      translate(x-halfSize, y-halfSize);
      let hsluvColor = convertRgbToHsluv(pix);
      fillHsluv(228, 40, hsluvColor[2]);
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
