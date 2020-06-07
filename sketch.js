let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.png";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(20);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 10;
const tileWidth = 10;

const x_step = 30;
const y_step = 30;

function draw () {

//  for(var x = 0; x < sourceImg.width; x = x+ x_step){
  //  for(var y = 0; y < sourceImg.height; y = y+ y_step){
    //    let pix = sourceImg.get(x, y);
    //    let mask = maskImg.get(x, y);
    //    fill(pix);
    //    stroke(pix);
    //     if (mask[0] > 128) {
    //    rect(x,y,tileWidth,tileHeight);
//  }
//  else{
  //  rect(x,y,x_step,y_step);
//  }
//}


  for(let i = 0; i < 9000; i++) {
   let x = floor(random(sourceImg.width));
   let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);

    let pointSize = 10;
    let dice = random(1, 6);

    if (mask[0] > 128) {
      if (dice > 2){
      line(x, y, x + pointSize - 20, y); //Wind
    } else {
          if(pix[1] > pix[0]){
            strokeWeight(1);
            let pixMod = sourceImg.get(x, y);
            pixMod[2] = pixMod[2]*3;
            pixMod[1] = pixMod[1]*3;
            pixMod[2] = pixMod[2]*8;

            stroke(pixMod);
            //stroke(pix);

    } else {
    if (dice > 5){
       line(x, y, x + pointSize, y); //Wind
     } else {
      line(x, y, x, y + pointSize - 20); //Rain
   }
  }
}
    //if(mask[0] > 128) {
    //  let pointSize = 50;
      //ellipse(x, y, pointSize, pointSize);
    //}
    //else {
    //  let pointSize = 10;
    //  rect(x, y, pointSize, pointSize);
    //}
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
     //saveArtworkImage(outputFile);
  }
}

function drawStar(x, y, size){
  push();
  strokeWeight(10);
  translate(x,y);
  for(var i = 0; i < 10; i++){
    line(size,0,-size,0);
      rotate(360/ i);
    }
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
}
