
const finalVersion = true;


let elementSpacing = 50;
let circleSize = 50;
let squareSize = 40;


if (finalVersion) {
  elementSpacing = 10;
  circleSize = 25;
  squareSize = 20;
  elementSpacing2 = 10;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;
//let pointSize = 50;



function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
  //sourceImg = loadImage("input_1.jpg");
}



function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function pattern (x,y,c,s){
 console.log("pattern");
    push();
    translate (x,y);
    fill(c);
    stroke(c);
    let starSize =  s*1;

    line(starSize*0,starSize*0, starSize*10,starSize*10);
    line(starSize*0,starSize*0, starSize*10,starSize*-10);
    line(starSize*0,starSize*0, starSize*-10,starSize*10);
    line(starSize*0,starSize*0, starSize*-10,starSize*-10);
    line(starSize*0,starSize*0, starSize*0,starSize*30);
    line(starSize*0,starSize*0, starSize*0,starSize*-30);
    line(starSize*0,starSize*0, starSize*30,starSize*0);
    line(starSize*0,starSize*0, starSize*-30,starSize*0);

    ellipse(starSize*10,starSize*10, starSize*2,starSize*2);
    ellipse(starSize*10,starSize*-10, starSize*2,starSize*2);
    ellipse(starSize*-10,starSize*10, starSize*2,starSize*2);
    ellipse(starSize*-10,starSize*-10, starSize*2,starSize*2);
    ellipse(starSize*0,starSize*30, starSize*4,starSize*4);
    ellipse(starSize*0,starSize*-30, starSize*4,starSize*4);
    ellipse(starSize*30,starSize*0, starSize*4,starSize*4);
    ellipse(starSize*-30,starSize*0,starSize*4,starSize*4);

    line(starSize*-30,starSize*0,starSize*-10,starSize*-10);
    line(starSize*0,starSize*-30,starSize*-10,starSize*-10);
    line(starSize*0,starSize*30,starSize*10,starSize*10);
    line(starSize*30,starSize*0,starSize*10,starSize*10);
    line(starSize*30,starSize*0,starSize*10,starSize*-10);
    line(starSize*0,starSize*-30,starSize*10,starSize*-10);
    line(starSize*0,starSize*30,starSize*-10,starSize*10);
    line(starSize*-30,starSize*0,starSize*-10,starSize*10);

    ellipse(starSize*25,starSize*25,starSize*1,starSize*1);
    ellipse(starSize*-25,starSize*-25,starSize*1,starSize*1);
    ellipse(starSize*-25,starSize*25,starSize*1,starSize*1);
    ellipse(starSize*25,starSize*-25,starSize*1,starSize*1);

    line(starSize*25,starSize*25,starSize*-10,starSize*10);
    line(starSize*25,starSize*25,starSize*10,starSize*-10);
    line(starSize*-25,starSize*-25,starSize*10,starSize*-10);
    line(starSize*-25,starSize*-25,starSize*-10,starSize*10);
    line(starSize*-25,starSize*25,starSize*10,starSize*10);
    line(starSize*-25,starSize*25,starSize*-10,starSize*-10);
    line(starSize*25,starSize*-25,starSize*10,starSize*10);
    line(starSize*25,starSize*-25,starSize*-10,starSize*-10);
  
    pop();
  }

  function pattern2 (x,y,c,s){

    console.log("pat2");
    push();
    translate (x,y);
    fill(c);
    stroke(c);
    let starSize =  s*1;


   line(starSize*0,starSize*0, starSize*10,starSize*10);
    line(starSize*0,starSize*0, starSize*10,starSize*-10);
    line(starSize*0,starSize*0, starSize*-10,starSize*10);
    line(starSize*0,starSize*0, starSize*-10,starSize*-10);
    line(starSize*0,starSize*0, starSize*0,starSize*30);
    line(starSize*0,starSize*0, starSize*0,starSize*-30);
    line(starSize*0,starSize*0, starSize*30,starSize*0);
    line(starSize*0,starSize*0, starSize*-30,starSize*0);

    ellipse(starSize*10,starSize*10, starSize*2,starSize*2);
    ellipse(starSize*10,starSize*-10, starSize*2,starSize*2);
    ellipse(starSize*-10,starSize*10, starSize*2,starSize*2);
    ellipse(starSize*-10,starSize*-10, starSize*2,starSize*2);
    ellipse(starSize*0,starSize*30, starSize*4,starSize*4);
    ellipse(starSize*0,starSize*-30, starSize*4,starSize*4);
    ellipse(starSize*30,starSize*0, starSize*4,starSize*4);
    ellipse(starSize*-30,starSize*0,starSize*4,starSize*4);

    line(starSize*-30,starSize*0,starSize*-10,starSize*-10);
    line(starSize*0,starSize*-30,starSize*-10,starSize*-10);
    line(starSize*0,starSize*30,starSize*10,starSize*10);
    line(starSize*30,starSize*0,starSize*10,starSize*10);
    line(starSize*30,starSize*0,starSize*10,starSize*-10);
    line(starSize*0,starSize*-30,starSize*10,starSize*-10);
    line(starSize*0,starSize*30,starSize*-10,starSize*10);
    line(starSize*-30,starSize*0,starSize*-10,starSize*10);

    ellipse(starSize*25,starSize*25,starSize*1,starSize*1);
    ellipse(starSize*-25,starSize*-25,starSize*1,starSize*1);
    ellipse(starSize*-25,starSize*25,starSize*1,starSize*1);
    ellipse(starSize*25,starSize*-25,starSize*1,starSize*1);

    line(starSize*25,starSize*25,starSize*-10,starSize*10);
    line(starSize*25,starSize*25,starSize*10,starSize*-10);
    line(starSize*-25,starSize*-25,starSize*10,starSize*-10);
    line(starSize*-25,starSize*-25,starSize*-10,starSize*10);
    line(starSize*-25,starSize*25,starSize*10,starSize*10);
    line(starSize*-25,starSize*25,starSize*-10,starSize*-10);
    line(starSize*25,starSize*-25,starSize*10,starSize*10);
    line(starSize*25,starSize*-25,starSize*-10,starSize*-10);
  
    pop();



}

function splatter(x, y, c, s) {
  push();
  translate(x, y);
  scale(s);  // Set the createCanvas

  let maxRand = 0;
  let minRand = -0;
  let posX = random(maxRand,minRand);
  let posY = random (maxRand,minRand);

  fill(c);
  ellipse (200 + posX,2+posY,30,30);
   posX = random(maxRand,minRand);
   posY = random (maxRand,minRand);
  ellipse (25 + posX,30+posY,40,40);
   posX = random(maxRand,minRand);
   posY = random (maxRand,minRand);
  ellipse (0 + posX,0+posY,15,15);
   posX = random(maxRand,minRand);
   posY = random (maxRand,minRand);
  ellipse (50 + posX,50+posY,10,10);
   posX = random(maxRand,minRand);
   posY = random (maxRand,minRand);
  ellipse (40 + posX,15+posY,20,20);
   posX = random(maxRand,minRand);
   posY = random (maxRand,minRand);
  ellipse (0 + posX,40+posY,30,30);
   posX = random(maxRand,minRand);
   posY = random (maxRand,minRand);

  noStroke();
  strokeWeight(5);
  pop();


}

function convertRgbToHsluv(c) {
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}


function draw () {

  //colorMode(HSB,255);

  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    if(mask[0] > 128) {
      pattern(x, y, pix, 0.5);
      //splatter(x, y, pix, 0.5);
    }
    else {

      // add random offsets
      x = x + dx;
      y = y + dy;
      // convert to grayscale (remove color, keep brightness in hsluv colorspace)
      let hsluvColor = convertRgbToHsluv(pix);
      fillHsluv(0, 0, hsluvColor[2]);
      pattern2(x,y,pix,1,elementSpacing2);

      //splatter(x, y, pix, elementSpacing/30);
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter >  1920) {
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