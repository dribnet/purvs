let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_2.jpg");
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
}

function convertRgbToHsluv(c) {
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}
  
  //For the size of the shapes drawn
  let pSBig = 350;
  let pSSmall = 30;
  const rSize = 20;
  let sw = 0;

function draw () {
  for(let i=0; i<1; i++) {
      let x = floor(random(sourceImg.width));
      let y = floor(random(sourceImg.height));
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      let pointSize = floor(random(pSSmall, pSBig)); //picks random number between to values for the size of shapes
      let halfSize = pointSize/2
      let ro = random(0, 360);
      let hsluvColor = convertRgbToHsluv(pix);

      push();
      fill(pix);
      pickShape(pix, x, y, pointSize, halfSize, ro);
      pop();
    //Reduces size of shapes over time, while restricting the minimum sizes
    if(pSBig>55){
      pSBig-=0.3;
    }
    if(pSSmall>15){
      pSSmall-=0.3;
    }
    //console.log(pix);
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 3000) {
    push();
      for(let m=0; m<1080; m=m+rSize) {
        for(let b=0; b<1920; b=b+rSize){
          let pix2 = sourceImg.get(m, b);
          let hsluvColor = convertRgbToHsluv(pix2);
          let mask2 = maskImg.get(m, b);
          if(mask2[0] < 128){
            //fill(sourceImg.get(m, b));
            fillHsluv(0, 0, hsluvColor[2]);
            rect(m, b, rSize, rSize);
          } 
        }
        console.log(m);
      }
      pop();
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

//function to pick and draw each shape
function pickShape(pix, x, y, pointSize, halfSize, ro){
  if(pix[0] < 85){  //Draws ellipse if colour value of point is < 85
      ellipse(x, y, pointSize, pointSize);
  }
  if(pix[0] > 85 && pix[0] < 170){  //Draws square if colour value of point is > 85 & < 170
      translate(x, y);
      rotate(ro);
      rect(0-halfSize, 0-halfSize, pointSize, pointSize);
  }
  if(pix[0] > 170){ //Draws traingle if colour value of point is > 170
    translate(x, y);
    rotate(ro);
    triangle(0, 0, 0-halfSize, 0+pointSize, 0+halfSize, 0+pointSize);
  } 
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
