let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let fullSize = 30;
let halfSize = 15;
let r;
let g;
let b;
let shift;
let nR;
let nG;
let nB;
let errR;
let errG;
let eerB;
let pR;
let pG;
let pB;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  image(sourceImg,0,0);
}

function draw () {
  for(let i=0;(i<1080/fullSize);i++) {
    let fullSize = 30;
    let halfSize = 15;
    //let x = floor(random(sourceImg.width));
    //let y = floor(random(sourceImg.height));
    let x = i*fullSize;
    let y = fullSize*renderCounter;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    fill(pix);
    if(mask[0] > 128) { //not focus
      //rect((x-halfSize), y-halfSize, fullSize, fullSize);
    }
    else {
      //noiseDetail(8);
      //let xShift = map(noise(x), 0, 1, -fullSize, fullSize);
      //let yShift = map(noise(y), 0, 1, -fullSize, fullSize);

      let r = red(pix);
      let g = green(pix);
      let b = blue(pix);

      let shift = 1; 

      let nR = round(shift*r/255)*(255/shift);
      let nG = round(shift*g/255)*(255/shift);
      let nB = round(shift*b/255)*(255/shift);

      fill(nR, nG, nB);
      sourceImg.pixels[index(x,y)] = color(nR, nG, nB);  

      var errR = r - nR;
      let errG = g - nG;
      let errB = b - nB;
      
      //Beginning 
      console.log(x,y);
      //Part 1
      part1(x,y,errR,errG,errB);

      //Part 2
      part2(x,y,errR,errG,errB);

      //Part 3]
      part3(x,y,errR,errG,errB); 

      //Part 4
      part4(x,y,errR,errG,errB);

      sourceImg.updatePixels();

      //rect((x-halfSize), (y-halfSize), fullSize, fullSize);   
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

function index(x,y){
  return x + y * 1080;
}

function part1(x,y,errR,errG,errB){
  if(x+1 <= 1080){
    let ind = index(x+1,y);
    let nC = sourceImg.pixels[ind];
    let pR = red(nC);
    let pG = green(nC);
    let pB = blue(nC);

    pR = pR + errR * 7/16.0;
    pG = pG + errG * 7/16.0;
    pB = pB + errB * 7/16.0;

    sourceImg.pixels[ind] = color(pR, pG, pB); 
  }
}

function part2(x,y,errR,errG,errB){
  if(x - 1 >= 0 || y + 1 <= 1920){
    let ind = index(x-1,y+1);
    let nC = sourceImg.pixels[ind];

    pR = red(nC);
    pG = green(nC);
    pB = blue(nC);

    pR = pR + errR * 3/16.0;
    pG = pG + errG * 3/16.0;
    pB = pB + errB * 3/16.0;

    sourceImg.pixels[ind] = color(pR, pG, pB); 
    }
}

function part3(x,y,errR,errG,errB){
  if(y+1 <= 1920){
    let ind = index(x,y+1);
    let nC = sourceImg.pixels[ind];

    pR = red(nC);
    pG = green(nC);
    pB = blue(nC);

    pR = pR + errR * 5/16.0;
    pG = pG + errG * 5/16.0;
    pB = pB + errB * 5/16.0;

    sourceImg.pixels[ind] = color(pR, pG, pB);
  }
}

function part4(x,y,errR,errG,errB){
  if(x+1 >= 1080 || y+1 <= 1920){
    let ind = index(x+1,y+1);
    let nC = sourceImg.pixels[ind];

      pR = red(nC);
      pG = green(nC);
      pB = blue(nC);

      pR = pR + errR * 1/16.0;
      pG = pG + errG * 1/16.0;
      pB = pB + errB * 1/16.0;

      sourceImg.pixels[ind] = color(pR, pG, pB);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
