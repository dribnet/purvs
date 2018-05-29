let sourceImg=null;
let maskImg=null;
let renderCounter=0;

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
}

function convertRgbToHsluv(c) {
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}
  
//For the size of the shapes drawn
let pSBig = 350;
let pSSmall = 300;
const rSize = 30; //set size for grid

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
    if(pSBig>50){
      pSBig-=0.25;
    }
    if(pSSmall>30){
      pSSmall-=0.25;
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 2500) {
    push();
      drawGrid(rSize);  
    pop();

    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

//function to pick and draw each shape
function pickShape(pix, x, y, pointSize, halfSize, ro){
  let hsluvColor = convertRgbToHsluv(pix);
  if(hsluvColor[2] < 33){  //Draws ellipses if lightness of the color is under 33
    ellipse(x, y, pointSize, pointSize);
  }
  if(hsluvColor[2] > 33 && hsluvColor[2] < 66){  //Draws squares if lightness of the color is over 33 and under 66
    translate(x, y);
    rotate(ro);
    rect(0-halfSize, 0-halfSize, pointSize, pointSize);
  }
  if(hsluvColor[2] > 66){ //Draws triangles if lightness of the color is over 66
    translate(x, y);
    rotate(ro);
    triangle(0, 0, 0-halfSize, 0+pointSize, 0+halfSize, 0+pointSize);
  } 
}

//function to draw the grid in the masked areas
function drawGrid(rSize){
  for(let m=0; m<1080; m=m+rSize) {
    for(let b=0; b<1920; b=b+rSize){
      let pix2 = sourceImg.get(m, b);
      let hsluvColor = convertRgbToHsluv(pix2);
      let mask2 = maskImg.get(m, b);
      if(mask2[0] < 128){
        //fill(sourceImg.get(m, b));
        fillHsluv(hsluvColor[0], hsluvColor[1]*0.35, hsluvColor[2]);  //Desaturates the colors
        rect(m, b, rSize, rSize);
      } 
    }
    console.log(m);
  }
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
