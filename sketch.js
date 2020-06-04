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
const x_steps = 10
const y_steps = 10
// const tileheight = 20
// const tilewidth = 20

function draw() {

  for (var x1 = 0; x1 < sourceImg.width; x1 = x1 + x_steps) {
    for (var y1 = 0; y1 < sourceImg.height; y1 = y1 + y_steps){;
    let mask = maskImg.get(x1, y1)
    let pix = sourceImg.get(x1, y1);
    if (mask[0] > 180) {
    if (pix[0] > 30 && pix[0] < 110 && pix[1] >0 && pix[1] < 100 && pix[2] > 0 && pix[2] < 100) {
      let pixMode = sourceImg.get(x1, y1)
      pixMode[0] = random(56,80)
      pixMode[1] = random(45,90)
      pixMode[2] = random(36,70)

      noFill()
      watercolour(x1, y1, 10, 10)
      strokeWeight(2)
      stroke(pixMode);
      noFill()
    }
  }
}
}
    for (let b = 0; b < 10000; b++) {
      let x2 = floor(random(sourceImg.width));
      let y2 = floor(random(sourceImg.width));
      let pix2 = sourceImg.get(x2, y2);
      let mask2 = maskImg.get(x2, y2);
      stroke(pix2);
      fill(pix2)
      if (mask2[0] > 0){
      }else{
      brushstroke1(x2, y2, 1, random(9,12), 30, random(0.3,0.7));
      brushstroke2(x2, y2, 1, random(9,12), 120, random(0.3,0.7));
    }
  }
//
  for (let c = 0; c < 50000; c++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.width));
    let mask = maskImg.get(x, y)
    let pix = sourceImg.get(x, y);
    fill(pix)
    noStroke()
    if(mask[0]>10){
    watercolour(x, y, 5, 5)
  }
  }

  for (let a = 0; a < 80000; a++) {
    let x3 = floor(random(sourceImg.width));
    let y3 = floor(random(sourceImg.width));
    let mask1 = maskImg.get(x3, y3)
    let pix1 = sourceImg.get(x3, y3);
    fill(pix1)
    noStroke()
    if(mask1[0] >90 && mask1[0]<100){
    watercolour(x3, y3, 5, 5)
  }
}


    // for(let b=0; b<10; b++){

// }
    renderCounter = renderCounter + 1;
    if (renderCounter > 10) {
      console.log("Done!")
      noLoop();
      // uncomment this to save the result
      // saveArtworkImage(outputFile);
    }
  }

  function watercolour(x, y, w, h) { ///not really water colour et

    rect(x, y, w, h)


  }

  function brushstroke1(x, y, nstrokes, brushWidth, rotation, hairThickness) {
    for (let c = 0; c < brushWidth * nstrokes; c = c + brushWidth) {
      push()
      strokeWeight(hairThickness)
      translate(x, y - 20)
      rotate(rotation)
      scale(1)
      translate(0, c)
      bezier(85, 20, 40, 40, 50, 50, 15, 60);
      pop()
    }
  }

  function brushstroke2(x, y, nstrokes, brushWidth, rotation, hairThickness) {

    for (let c = 0; c < brushWidth * nstrokes; c = c + brushWidth) {
      push()
      strokeWeight(hairThickness)
      translate(x, y - 20)
      rotate(rotation)
      scale(1)
      translate(0, c)
      bezier(85, 20, 40, 40, 50, 50, 15, 60);
      pop()
    }
  }

  function keyTyped() {
    if (key == '!') {
      saveBlocksImages();
    }
  }
