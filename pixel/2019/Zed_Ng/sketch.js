let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

let sourceFile = "input_3.jpg";
let maskFile = "mask_3.png";
let outputFile = "artwork_3.png";

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
  background(255); // Default background colour
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
//Codes for individual brushes

function brush1(x, y) {
  for (i = 0; i < 20; i++) {
    let pointSize = 5;
    let a = random(-5, 5)
    let b = random(-5, 5)
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

 beginShape()
 vertex(x+4,y+12)
 vertex(x+6,y+11)
 vertex(x-9,y+8)
 vertex(x-5,y+8)
 vertex(x-7,y+11)
 vertex(x+11,y-7)
 endShape(CLOSE)
}

function brush5(x,y){
  push()
    translate(x,y)
    let pointSize=9
    let a = random(0,6)
    let b = random(0,6)
    for (i=0; i < 9; i++){
      rotate(random(30,60))
      ellipse(0+a,0+b,pointSize,pointSize/3)
    }
  pop()
}

function brush6(x,y){
  strokeCap(ROUND);
  line(x,y,x+7,y+7)
  line(x,y,x-7,y+7)
}

function brush7(x,y){
  let size = random(6, 15)
  ellipse(x,y,size)
}

function brush8(x,y){
  strokeCap(ROUND);
  push()
  
  line(x,y,x-3,y+3)
  line(x,y,x+3,y+3)
  line(x,y,x-3,y-3)
  line(x,y,x+3,y-3)
  pop()
}


function draw() {

  if(renderCounter == 0) {
    background(200);
  }
  for (let i = 0; i < 2300; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let from = color(pix);
    let to = color(0, 0, 200);  //Additional outline colours for each brush
    let r = random(0, 0.4);
    let random_color = lerpColor(from, to, r);

    fill(pix);
    
    // 8 different greyscale value

    if (mask[0] >= 0 && mask[0] < 36) {
        push()
          stroke(random_color)
          brush1(x,y)
        pop()
      brush1(x, y)
    } else if (mask[0] >= 36 && mask[0] < 72) {
        push()
        push()
          stroke(random_color)
          brush2(x,y)
        pop()
          stroke(pix)
          brush2(x,y)
        pop()
    } else if (mask[0] >= 72 && mask[0] < 108) {
        push()
          stroke(random_color)
          brush3(x,y)
        pop()
        brush3(x,y)
    } else if (mask[0] >= 108 && mask[0] < 144) {
        push()
          stroke(random_color)
          brush4(x,y)
        pop()
        brush4(x,y)
    } else if (mask[0] >= 144 && mask[0] < 180) {
        push()
          stroke(random_color)
          brush5(x,y)
        pop()
        brush5(x,y)
    } else if (mask[0] >= 180 && mask[0] < 216) {
         push()
        push()
          strokeWeight(6)
          stroke(random_color)
          brush6(x,y)
        pop()
          strokeWeight(4)
          stroke(pix)
          brush6(x,y)
        pop()
    } else if (mask[0] >= 216 && mask[0] < 255) {
        push()
          stroke(random_color)
          brush7(x,y)
        pop()
      brush7(x,y)
    } else {
         push()
          push()
            strokeWeight(4)
            stroke(random_color)
            brush8(x,y)
          pop()
          strokeWeight(2.0);
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

  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
