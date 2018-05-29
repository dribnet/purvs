const finalVersion = true;


let elementSpacing = 50;
let circleSize = 50;
let squareSize = 40;


if (finalVersion) {
  elementSpacing = 20;
  circleSize = 25;
  squareSize = 20;
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;
//let pointSize = 50;



function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
  //sourceImg = loadImage("input_1.jpg");
}



function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function splatter(x, y, c, s) {
  push();
  translate(x, y);
  scale(s);  // Set the createCanvas
  //stroke(c); // Set the gray value
  //strokeWeight(70);
  //ellipse(0, -35, 50,50); // Body
  //noStroke();
  fill(c);

  let circSize = random (10, 60);
  let posX = random(0,50);
  let posY = random (0,50);
  ellipse(40,posY, circSize,circSize);
  ellipse(posX,-35,circSize,circSize);
  fill(0);
  ellipse (posX,posY,10,10);
  ellipse (posX,posY,10,10);
  ellipse (posX,posY,5,5);
  noStroke();
  strokeWeight(5);

  //stroke(255);
  // ellipse (-10,-30,40,40);
  // ellipse (-40,0,10,10);
  // ellipse (-20,-50,40,40);
  // ellipse (10,30,40,40);

  noStroke();
  fill(255);
  //ellipse(-17.5, -65, 35, 35); // Left eye dome
  //ellipse(17.5, -65, 35, 35);  // Right eye dome
  fill(c);
  //ellipse(-14, -65, 8, 8);  // Left eye
  //ellipse(14, -65, 8, 8);   // Right eye
  curve(0, -58, 4, -51, 0, -44, -4, -51); // Beak
  pop();


}

function convertRgbToHsluv(c) {
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}


function draw () {

  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    if(mask[0] > 128) {
      splatter(x, y, pix, 0.5);
    }
    else {
      // add random offsets
      x = x + dx;
      y = y + dy;
      // convert to grayscale (remove color, keep brightness in hsluv colorspace)
      let hsluvColor = convertRgbToHsluv(pix);
      fillHsluv(0, 0, hsluvColor[2]);
      rect(x-halfSize, y-halfSize, squareSize/2, squareSize/2);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter >  1920) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
