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
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  //sourceImg.filter(GRAY);
  maskImg.loadPixels();
  //image(sourceImg,0,0);
  
}

function draw () {
  for(let i=0;(i<sourceImg.width);i++) {
    let fullSize = 8;
    let halfSize = 4;
    //let x = floor(random(sourceImg.width));
    //let y = floor(random(sourceImg.height));
    let x = i*fullSize;
    let y = renderCounter*fullSize;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    fill(pix);
    if(mask[0] > 128) { //not focus
      for(n = -4; n < 4; n++){
        console.log("um");
        let nP = maskImg.get(n+x,y);
        if(!(nP[0]>128)){rect(n+x,y, 1, 1)};
      }
    }
    else {
      //noiseDetail(8);
      //let xShift = map(noise(x), 0, 1, -fullSize, fullSize);
      //let yShift = map(noise(y), 0, 1, -fullSize, fullSize);

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
      //console.log(index(x,y));
      //Part 1
      error(sourceImg, 7 / 16.0, x+1, y, errR, errG, errB);

      //Part 2
      error(sourceImg, 3 / 16.0, x-1, y+1, errR, errG, errB);

      //Part 3]
      error(sourceImg, 5 / 16.0, x, y+1, errR, errG, errB); 

      //Part 4
      error(sourceImg, 1 / 16.0, x+1, y+1, errR, errG, errB);

      sourceImg.updatePixels();
      //let pixel = sourceImg.get(x, y);
      //fill(pixel);
      rect((x-halfSize), (y-halfSize), fullSize, fullSize);   
    
    }
    //image(sourceImg,sourceImg.width/2,sourceImg.height/2);
  }
  console.log(renderCounter);
  renderCounter = renderCounter + 1;
  if(renderCounter > 238) {
    console.log("Done!")
    noLoop();
  }
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
