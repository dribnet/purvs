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
  angleMode(DEGREES)
  imageMode(CENTER);
  noStroke();
  background(10);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
const x_steps = 15
const y_steps = 15
// const tileheight = 20
// const tilewidth = 20

function draw() {

  for (let i = 0; i < 2000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.width));
    let mask = maskImg.get(x, y)
    let pix = sourceImg.get(x, y);
  if (mask[0] > 120) {
    strokeWeight(1)
      stroke(pix);
      noFill()
      let tilewidth=20
      let tileheight=20
      brushstroke2(x, y);
    } else {
      strokeWeight(1)
      stroke(pix,50);
      noFill()
      let tilewidth=5
      let tileheight=5
    brushstroke1(x,y);
    brushstroke2(x,y);
      // for (var x = 0; x < sourceImg.width; x = x + x_steps) {
      //   for (var y = 0; y < sourceImg.height; y = y + y_steps);
      // let x = floor(random(sourceImg.width));
      // let y = floor(random(sourceImg.height));
    }
  }
  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function brushstroke1(x,y){
  push()
  translate(x,y)
  bezier(65, 0, 40, 40, 50, 50, 15, 40);
  translate(0,20)
  bezier(85, 0, 40, 40, 50, 50, 15, 60);
  pop()

}
function brushstroke2(x,y){
  push()
  translate(x,y)
  rotate(50)
  bezier(65, 0, 40, 40, 50, 50, 15, 40);
  translate(0,20)
  bezier(85, 0, 40, 40, 50, 50, 15, 60);
  pop()

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
