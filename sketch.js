// NEW CODE AFTER COMMIT FOR OLDER CODE //

// /* Set to true to make final high-resolution version */
const finalVersion = true;
//
// /* Default versions of variables */
let pointSize = 40;
//
// /* Override some variables with high-resolution final version */
if (finalVersion) {
  pointSize = 10;
 }

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);

  //NEW CODE FOR AFTER COMMIT OF OLDER CODE//
  stroke(0);
  background(255);

  // noStroke();
  // background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {

  //NEW CODE FOR AFTER COMMIT OF OLDER CODE//
  for(let i=0;i<1000/pointSize;i++) {
    let x = int(i * pointSize);
   let y = int(renderCounter * pointSize);

  // for(let i=0;i<1900;i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

//NEW CODE FOR AFTER COMMIT OF OLDER CODE//
    let halfSize = pointSize/2;

    // let pointSize = 20;
    // let halfSize = 40;
    // let pointSize2 = 2;
    // let halfSize2 = 10;

    fill(pix);
    //stroke(pix);
    
    if(mask[0] > 128) {
      // OLD CODE - COMMIT
      // rect(x, y, pointSize, pointSize);
      // fill(255, 101, 38, 30);
      // stroke(0);
      // strokeWeight(0.1);
      // rect(x, y, pointSize, pointSize);


//NEW CODE FOR AFTER COMMIT OF OLDER CODE//
      rect(x, y, pointSize*1.5, pointSize*1.5);

    }
    else {
      // OLD CODE - COMMIT
      // rect(x, y, halfSize2, pointSize);
      // fill(110, 80, 38, 40);
      // rect(x, y, pointSize2, halfSize);


//NEW CODE FOR AFTER COMMIT OF OLDER CODE//
      blur(3);
      rect(x-halfSize, y-halfSize, pointSize*.8, pointSize*.8,8);

    }
  }
  renderCounter = renderCounter + 1;

  //NEW CODE FOR AFTER COMMIT OF OLDER CODE//
  if(renderCounter > 1920/pointSize) {

  // if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
     //saveArtworkImage(outputFile);
  }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
}
