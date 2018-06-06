let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let fullSize = 4;
let halfSize = 4;
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
let xSource;
let ySource;
let pass = 1; 
let dX;
let dY;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
  presImg = loadImage("input_3.jpg");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  presImg.loadPixels();
  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  sourceImg.filter(GRAY);
  maskImg.loadPixels();
}

function draw () {  
  let fullSize = 8;
  let halfSize = 4;
 
  for(let i=0;(i<sourceImg.width);i++) {
    let x = i*fullSize;
    let y = renderCounter*fullSize;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    fill(pix);

    if(mask[0]>128){
      fill(presImg.get(x,y));
      rect((x-halfSize), (y-halfSize), fullSize, fullSize);  
    }
    else{
      let r = red(pix);
      let g = green(pix);
      let b = blue(pix);

      let shift = 4; 

      let nR = round(shift*r/255)*(255/shift);
      let nG = round(shift*g/255)*(255/shift);
      let nB = round(shift*b/255)*(255/shift);

      fill(nR, nG, nB);  

      var errR = r - nR;
      var errG = g - nG;
      var errB = b - nB;
      
      //Beginning 
      //Part 1
      error(sourceImg, 7 / 16.0, x+1, y, errR, errG, errB);

      //Part 2
      error(sourceImg, 3 / 16.0, x-1, y+1, errR, errG, errB);

      //Part 3]
      error(sourceImg, 5 / 16.0, x, y+1, errR, errG, errB); 

      //Part 4
      error(sourceImg, 1 / 16.0, x+1, y+1, errR, errG, errB);

      sourceImg.updatePixels();

      rect((x-halfSize), (y-halfSize), fullSize, fullSize);   
    }
  }
  console.log(renderCounter);
  renderCounter = renderCounter + 1;
  if(renderCounter > (sourceImg/fullSize)) {
    console.log("Done!")
    noLoop();
  }
}

function setter(x,y){
  let xSource = x;
  let ySource = y;
}
function index(x,y){
  return 4*(x + y * sourceImg.width);
}

function error(img, shift, x, y, eR, eG, eB){
  if(x<0 || x>=img.width*fullSize || y<0 || y>=img.height)return;
  let pix = img.pixels;
  let ind = index(x,y);
  let nC = img.pixels[ind];

  let pR = red(nC);
  let pG = green(nC);
  let pB = blue(nC);

  //nC = ((pR + eR * shift), (pG + eG * shift), (pB + eB * shift));
  pix[ind] = (pR + eR * shift);
  pix[ind] = (pG + eG * shift);
  pix[ind] = (pB + eB * shift);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
