let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  // noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileWidth = 10;
const tileHeight = 10;

const xStep = 15;
const yStep = 15;


function draw() {


// for(var x = 0; x < sourceImg.width; x = x + xStep){
//   for(var y = 0; y < sourceImg.height; y = y + yStep){
//     let pix = sourceImg.get(x, y);
//     let mask = maskImg.get(x, y);
//     fill(pix);
//     stroke(pix);
    // rect(x, y, tileWidth, tileHeight);
//   }
// }




  for (let i = 0; i < 4000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);

    let pointSize = 20;
    let dice = random(1, 6);

    if (mask[0] > 120) {
      line(x, y, x + pointSize, y);
    } else {
      if(pix[1] > pix[0]){
        strokeWeight(3);
        let pixMod = sourceImg.get(x, y);
        pixMod[0] = pixMod[0]*3;
        pixMod[1] = pixMod[1];
        pixMod[2] = pixMod[2]*1.5;

        stroke(pixMod);
        //stroke(pix);

      }else{
        stroke(pix);
        strokeWeight(1);
      }


      if (dice > 5) {
        line(x, y, x + pointSize, y); //horizontal windy
      } else {
        line(x, y, x, y + pointSize); //vertical rain
      }
    }
 }

  //runs 10 different times
  renderCounter = renderCounter + 1;
  if (renderCounter > 5) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}


function drawStar(x, y, size) {
  push();
  strokeWeight(4);
  translate(x, y);
  for (var i = 0; i < 10; i++) {
    line(size, 0, -size, 0);
    rotate(360 / 5);
  }
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
