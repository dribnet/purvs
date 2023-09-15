let finalVersion = true; //false --> simple version;
                         //true --> final version;

let sourceImg=null;
let maskImg=null;
let row=0;

//set up the variables for the gaps, background pixels and foreground pixels
let elementSpace;
let backSize;
let frontSize;

//load the images
function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  //set up the variables for the random function
  let sOffset; //the random offset for flowers
  let swOffset; //the random offset for the width of flower leaves
  let shOffset; //the random offset for the height of flower leaves

  if(finalVersion){
    //high resolution version
    elementSpace = 10;
    backSize = 12;
    frontSize = 5;

    sOffset = random(0, 5);
    swOffset = random(0, 10);
    shOffset = random(0, 6);
    }
    else{
      //low resolution version
      elementSpace = 40;
      backSize = 55;
      frontSize = 20;

      sOffset = random(0, 10);
      swOffset = random(0, 40);
      shOffset = random(0, 20);
    }

  imageMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  background(10);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

//read the RGB value and output the HSL value
function convertRgbToHsluv(c){
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

function draw () {
  for(let i=0;i<1080/elementSpace;i++) {
    let x = int(i * elementSpace);
    let y = int(row * elementSpace);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    
    //set up different random ranges for high/low resolution version
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

    if(mask[0] > 128) {
      //drawing the flowers at the front
      push();
      translate(x + sOffset - 10, y);
      fill(pix);
      for(let j=0;j<5;j++){
        rotate(72);
        ellipse(10, 0, frontSize + swOffset, frontSize + shOffset);
      }
      pop();
    }
    else {
      //drawing the diamonds at the back
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

  //control the rows and when to stop drawing
  row = row + 1;
  if(row * elementSpace > 1920) {
    console.log("Done!")
    noLoop();
  }
}

//save the images
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
