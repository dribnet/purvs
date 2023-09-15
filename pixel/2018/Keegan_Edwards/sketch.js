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
  angleMode(DEGREES);
}

function convertRgbToHsluv(c) {
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}
  
//For the size of the shapes drawn
let pSBig = 300;
let pSSmall = 250;
const rSize = 15; //set size for grid

function draw () {
  for(let i=0; i<1; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = floor(random(pSSmall, pSBig)); //picks random number between to values for the size of shapes
    let halfSize = pointSize/2
    let ro = random(0, 360);  //Picks random angle for rotation of shapes
    //let hsluvColor = convertRgbToHsluv(pix);

    //Draw random background shapes
    push();
      pickShape(pix, x, y, pointSize, halfSize, ro, mask);
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
  if(renderCounter > 4000) {

    console.log("Drawing Grid");
    //Draw grid in mask
    push();
      drawGrid(rSize);  
    pop();

    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

//Function to pick and draw each shape
function pickShape(pix, x, y, pointSize, halfSize, ro, mask){
  let hsluvColor = convertRgbToHsluv(pix);

  noFill();
  stroke(pix);
  strokeWeight(4);

  translate(x, y); //To get a rotation on all the shapes drawn
  rotate(ro);

  if(hsluvColor[2] < 33){  //Draws ellipses if lightness of the color is under 33
    ellipse(0, 0, pointSize, pointSize);
  }
  if(hsluvColor[2] > 33 && hsluvColor[2] < 66){  //Draws squares if lightness of the color is over 33 and under 66
    rect(0-halfSize, 0-halfSize, pointSize, pointSize);
  }
  if(hsluvColor[2] > 66){ //Draws triangles if lightness of the color is over 66
    triangle(0, 0, 0-halfSize, 0+pointSize, 0+halfSize, 0+pointSize);
  } 
}

//Function to draw the grid in the masked areas
function drawGrid(rSize){
  for(let m=0; m<1080; m=m+rSize) {
    for(let b=0; b<1920; b=b+rSize){
      let pix2 = sourceImg.get(m, b);
      let hsluvColor = convertRgbToHsluv(pix2);
      let mask2 = maskImg.get(m, b);
      
      if(mask2[0] < 128){
        fillHsluv(hsluvColor[0], hsluvColor[1], hsluvColor[2]); 
        rect(m, b, rSize, rSize);
      } 
    }
    console.log(m); //Once log hits '1080' grid mask will draw on screen
  }
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
