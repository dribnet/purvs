const finalVersion = true;


 if (finalVersion) {
  pointSize = 40;
 }

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(30);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<1080/pointSize;i++) {
    print(i + " = x " + renderCounter + " = y");
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize);
   
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    
    let halfSize = pointSize/2;
   fill(pix);

        
         
         let pixBW = (pix[0] + pix[1] + pix[2])/3; //takes everage of rgb and turns it into bw value
         
          
         
   strokeWeight(3);
    if(mask[0] > 50) {
     ellipse(x-halfSize, y-halfSize, pointSize/255*pixBW, pointSize/255*pixBW); 
    
      }
    else {
      ellipse(x-halfSize, y-halfSize, pointSize/4, pointSize/4);    
    }
  } 
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/pointSize) {
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