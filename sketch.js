let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let spacing = 3; 
let squareSize = 6; 
let triangleSize = 6; 
let halfSize = squareSize / 2; 
let halfSize2 = triangleSize / 2; 

let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "artwork_2.png";

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
    for(let i=0;i<2000/spacing;i++) {
      let x = int(i*spacing);
      let y = int(renderCounter*spacing);
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      if(mask[0] > 100) {
       
        fill(pix);
        
        if(i%2==0){
          triangle(x,y-halfSize2,x-halfSize2,y+halfSize2,x+halfSize2,y+halfSize2);
        }else{
          triangle(x,y+halfSize2,x-halfSize2,y-halfSize2,x+halfSize2,y-halfSize2);
        }
      }
      else {
        
        let dx = floor(random(spacing/5));
        let dy = floor(random(spacing/5));
        x = x+dx; y = y+dy;
        
        let hsluvColor = convertRgbToHsluv(pix);
        fillHsluv(20,125, hsluvColor[2]);
        rect(x-halfSize, y-halfSize, squareSize, squareSize);
      }
    }
    renderCounter = renderCounter + 1;
  if(renderCounter > 1252/spacing) {
    console.log("Done!")
    noLoop();
     // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}
  

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
