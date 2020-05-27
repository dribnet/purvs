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
  //noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
   for(let i=0;i<1000;i++) {
     let x = floor(random(sourceImg.width));
     let y = floor(random(sourceImg.height));
     let pix = sourceImg.get(x, y);
     let mask = maskImg.get(x, y);
     fill (pix);
     stroke(pix);
     fill(pix);
     let pointSize = 10;
     if (mask[0]> 128) {
       masked(x,y);

     } else
     line (x-20, y, x+pointSize*5, y);
   }

   //console.log (mouseX)
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   fill(pix);
  //   if(mask[0] > 128) {
  //     let pointSize = 10;
  //     ellipse(x, y, pointSize+5, pointSize+5);
  //   }
  //   else {
  //     let pointSize = 30;
  //   rect(x, y, pointSize+20, pointSize-10);
  //   }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1) {
    console.log("Done!")
    noLoop();
    //uncomment this to save the result
    //saveArtworkImage(outputFile);
  }

function masked (x,y) {
    let pointSize = 10;
  if (x<400, x>1100){
    line (x-20, y, x+5, y)
  }else
      line (x-20, y, x+pointSize*1.5, y);
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
