let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile = "mask_3.png";
let outputFile = "output_3.png";

//before code is up n running, process of showing the image
function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(157, 145, 79);
  //background(29, 60, 82);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 10;
const tile_height = 10;
const tile_step_x = 20;
const tile_step_y = 20;
const s = 200;
const tile_width1 = 30;
const tile_height1 = 20;
const tile_width2 = 5;
const tile_height2 = 5;


function draw() {
  for (let i = 0; i < 4000; i++) {
    let x = floor(random(sourceImg.width)); //Using a random X & random Y
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);

    //nicola in blue
    if (mask[0] > 128) {
      let pointSize = 15;
      let pixMod = sourceImg.get(x, y);
      //pixMod[2] = 200; INPUT 1
      //pixMod[1] = 200; INPUT 2
      pixMod[3] = 200;
      fill(pixMod);
      //triangle(x,y,38,10,pointSize,pointSize) //58, 20
      //ellipse(x, y, pointSize, pointSize);
      //rect(x, y, pointSize, pointSize);
      //drawStar(x,y,16);
      //rect(x, y, tile_width1, tile_height1);
      rect(x, y, x/30, y/15);
      //heart(x, y, 10); FOR INPUT 1 & 2

    } else {
 if (pix[1] > pix[0]) { //add 10 for cool effect
      noStroke();
      fill(254, 255, 195);
      //stroke(255);
      //fill(255, 51, 204);
      let pointSize = 2;
      //rect(x, y, pointSize, pointSize);
      ellipse(x, y, pointSize, pointSize);
      //drawStar(x,y,10);
      //heart(x,y,15);
      // rect(x, y, tile_width1, tile_height1);
    } else {
      let pointSize = 25;
      let pixMod = sourceImg.get(x, y);
      pixMod[0] = 200;
      fill(pixMod); //TAKE OUT FILL CODE FOR INPUT 1 & 2
    //rect(x, y, tile_width1, tile_height1);
      //rect(x, y, x/15, y/30); INPUT1 & 2
      //rect(x, y, x/30, y/15);
      heart(x, y, 10);
    }
  }
}

renderCounter = renderCounter + 1;
if (renderCounter > 10) {
  console.log("Done!")
  noLoop();
  // uncomment this to save the result
  //saveArtworkImage(outputFile);
}


function drawStar(x, y, size) {
  push();
  strokeWeight(7);
  translate(x, y)
  for (var i = 0; i < 20; i++) { //10
    line(size, 0, -size, 0);
    rotate(360 % i);
  }
  pop();
}

function heart(x, y, size) {
  push();
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 1, y - size / 1, x - size, y + size / 4, x, y + size); //2,2,3
  bezierVertex(x + size, y + size / 4, x + size / 1, y - size / 1, x, y); //3,2,2
  endShape(CLOSE);
  pop();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

}
