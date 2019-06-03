let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let spacing = 5; 
let squareSize = 6; 
let triangleSize = 6; 
let halfSize = squareSize / 2; 
let halfSize2 = triangleSize / 2; 

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

function preload() {
sourceImg = loadImage(sourceFile);
maskImg = loadImage(maskFile);

}
function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');
  noStroke();
  imageMode(CENTER);
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
function convertRgbToHsluv(c) {
    return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}
function draw () {
    for(let i=0;i<1000/spacing;i++) {
      let x = int(i*spacing);
      let y = int(renderCounter*spacing);
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      if(mask[0] > 150) {
        //highlighted areas (light areas), colored
        fill(pix);
        //odd line draw triangle poingting down, even line draw the other direction
        if(i%2==0){
          triangle(x,y-halfSize2,x-halfSize2,y+halfSize2,x+halfSize2,y+halfSize2);
        }else{
          triangle(x,y+halfSize2,x-halfSize2,y-halfSize2,x+halfSize2,y-halfSize2);
        }
      }
      else {
        //set ramdom x and y for rectangles
        let dx = floor(random(spacing/5));
        let dy = floor(random(spacing/5));
        x = x+dx; y = y+dy;
        //fill in black and white with lightness info
        let hsluvColor = convertRgbToHsluv(pix);
        fillHsluv(0,0, hsluvColor[2]);
        rect(x-halfSize, y-halfSize, squareSize, squareSize);
      }
    }
    renderCounter = renderCounter + 1;
  if(renderCounter > 1920/spacing) {
    console.log("Done!")
    noLoop();
  }
}
  

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

