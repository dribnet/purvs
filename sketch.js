let sourceImg=null;
let maskImg=null;
let renderCounter=0;

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

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {

  //fill(255, 227, 117,20);
  //rect(0,0,704,1252);

  for(let i=0;i<8000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 15;
    let halfSize = 30;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, pointSize+2, pointSize+2);
      push(); 
      fill(200,0,0,10);
      ellipse(x, y, pointSize-2, pointSize-2);   
      pop();
      fill(0,30,200,10);
      ellipse(x, y, pointSize-2, pointSize-2);   
      pop();
    }
    else {
      rect(x, y, pointSize, pointSize); 

    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
