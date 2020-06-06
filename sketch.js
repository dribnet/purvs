let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  var count = 0;
  for(let i=0;i<width;i++) {
    for(let r=0;r<height;r++){
      let pix = sourceImg.get(i, r);
      let mask = maskImg.get(i, r);
      fill(pix);

      if(mask[0] >= 0 && mask[0] < 50){
        //blue
        var blue = map(mask[0],0,50,255,61);
        fill(0,0,blue);
        rect(i,r,2);

      }else if(mask[0] >= 51 && mask[0] < 100){
        //green
        var green = map(mask[0],51,100,125,222);
        var blue = map(mask[0],51,100,29,52);
        fill(0,green,blue);
        rect(i,r,2);

      }else if(mask[0] >= 101 && mask[0] < 150){
        //yellow
        var red = map(mask[0],101,150,155,242);
        var green = map(mask[0],101,150,163,255);
        fill(red,green,0);
        rect(i,r,2);

      }else if(mask[0] >= 151 && mask[0] < 200){
        //orange
        var red = map(mask[0],151,200,194,255);
        var green = map(mask[0],151,200,116,153);
        fill(red,green,0);
        rect(i,r,2);

      }
      else if(mask[0] >= 201 && mask[0] < 255){
        //red
        var red = map(mask[0],201,255,196,255);
        var green = map(mask[0],201,255,7,8);
        fill(red,green,0);
        rect(i,r,2);

      }
      else {
        fill(0,0,0);
        rect(i,r,2);
      }

    }
  }
  renderCounter = renderCounter + 1;
  console.log(count);
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
     saveArtworkImage(outputFile);
  }
   noLoop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
