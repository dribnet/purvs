let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let sourceFile = "input_2.jpg";
let maskFile = "mask_2.png";
let outputFile = "artwork_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');
  angleMode(DEGREES)
  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}


function brush1(x, y) {
  for (i = 0; i < 20; i++) {
    let pointSize = 5;
    let a = random(-5, 5)
    let b = random(-5, 5)
    noStroke();
    ellipse(x - a, y - b, pointSize);
  }
}

function brush2(x,y){
  for (i=0; i<15;i++){
    let a = random(2,10)
    offset = random(2,10)
    strokeWeight(random(1,2))
    line(x,y+offset,x+a,y-a+offset)
  }
}

function brush3(x,y){
  push()
    
    noStroke()
    rectMode(CENTER)
    translate(x,y)
    rotate(random(30, 60))
    let pointSize = 5;
    rect(0,0, pointSize,pointSize)
    rect(5,5,pointSize,pointSize)
    rect(-5,-5,pointSize,pointSize)
    rect(5,-5,pointSize,pointSize)
    rect(-5,5,pointSize,pointSize)
  pop()
}

function brush4(x,y){
  noStroke()
 beginShape()
 vertex(x+2,y+8)
 vertex(x+4,y+9)
 vertex(x-7,y+6)
 vertex(x-3,y+6)
 vertex(x-5,y+9)
 vertex(x+9,y-5)
 endShape(CLOSE)
}

function brush5(x,y){
  push()
    translate(x,y)
    noStroke()
    let pointSize=7
    let a = random(0,3)
    let b = random(0,3)
    for (i=0; i < 9; i++){
      rotate(random(30,60))
      ellipse(0+a,0+b,pointSize,pointSize/3)
    }
  pop()
}

function brush6(x,y){
  strokeCap(ROUND);
  strokeWeight(4.0);
  line(x,y,x+7,y+7)
  line(x,y,x-7,y+7)
}

function brush7(x,y){
  let size = random(4, 10)
  ellipse(x,y,size)
}

function brush8(x,y){
  strokeCap(ROUND);
  push()
  push()
  stroke(200)
  strokeWeight(3.0);
  line(x,y,x-3,y+3)
  line(x,y,x+3,y+3)
  line(x,y,x-3,y-3)
  line(x,y,x+3,y-3)
  pop()
  strokeWeight(2.0);
  line(x,y,x-3,y+3)
  line(x,y,x+3,y+3)
  line(x,y,x-3,y-3)
  line(x,y,x+3,y-3)
  pop()
}

function draw() {
  for (let i = 0; i < 3100; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 10;
    fill(pix);


    if (mask[0] >= 0 && mask[0] < 36) {
      brush1(x, y)
    } else if (mask[0] >= 36 && mask[0] < 72) {
        push()
          stroke(pix)
          brush2(x,y)
        pop()
    } else if (mask[0] >= 72 && mask[0] < 108) {
        brush3(x,y)
    } else if (mask[0] >= 108 && mask[0] < 144) {
        brush4(x,y)
    } else if (mask[0] >= 144 && mask[0] < 180) {
        brush5(x,y)
    } else if (mask[0] >= 180 && mask[0] < 216) {
         push()
          stroke(pix)
          brush6(x,y)
        pop()
    } else if (mask[0] >= 216 && mask[0] < 255) {
      brush7(x,y)
    } else {
         push()
          stroke(pix)
          brush8(x,y)
        pop()
    }
  }





  renderCounter = renderCounter + 1;
  if (renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
    console.log("Still Done!")
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
