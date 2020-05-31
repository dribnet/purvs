let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile = "mask_3.png";
let outputFile = "output_3.png";

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
for (let a = 0; a < 50000; a++) {
  let x = floor(random(sourceImg.width));
  let y = floor(random(sourceImg.width));
  let mask = maskImg.get(x, y)
  let pix = sourceImg.get(x, y);
  fill(pix)
  noStroke()
  watercolour(x,y,5,5)

}
  for (let i = 0; i < 10000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.width));
    let mask = maskImg.get(x, y)
    let pix = sourceImg.get(x, y);

  if (mask[0] > 120) {
    noStroke()
    fill(pix)
    watercolour(x,y,10,10)
    strokeWeight(2)
      stroke(pix);
      noFill()
    } else {
      stroke(pix);
      fill(pix)
      // let tilewidth=5
      // let tileheight=5
      brushstroke1(x,y,1 ,10,30,0.5);
      brushstroke2(x,y,1,10,120,0.5);
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
function watercolour(x,y,w,h){ ///not really water colour et
rect(x,y,w,h)
}
function brushstroke1(x,y,nstrokes,brushWidth,rotation,hairThickness){
  for(let c=0; c<brushWidth*nstrokes; c=c+brushWidth){
  push()
  strokeWeight(hairThickness)
  translate(x,y-20)
  rotate(rotation)
  scale(1)
  translate(0,c)
  bezier(85, 20, 40, 40, 50, 50, 15, 60);
  pop()
}
}
function brushstroke2(x,y,nstrokes,brushWidth,rotation,hairThickness){

  for(let c=0; c<brushWidth*nstrokes; c=c+brushWidth){
  push()
  strokeWeight(hairThickness)
  translate(x,y-20)
  rotate(rotation)
  scale(1)
  translate(0,c)
  bezier(85, 20, 40, 40, 50, 50, 15, 60);
  pop()
}
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
