let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile = "mask_2.png";
let outputFile = "output_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  let go = true
  main_canvas.parent('canvasContainer');
  angleMode(DEGREES)
  imageMode(CENTER);
  noStroke();
  background(26,32,22);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
const x_steps = 10
const y_steps = 10


function draw() {

  for (var x1 = 0; x1 < sourceImg.width; x1 = x1 + x_steps) { // createsthe squares with no fill that are all one colour
    for (var y1 = 0; y1 < sourceImg.height; y1 = y1 + y_steps){;
    let mask = maskImg.get(x1, y1);
    let pix = sourceImg.get(x1, y1);

    if (mask[0] > 180) {
    if (pix[0] > 90 && pix[0] < 100 && pix[1] >60 && pix[1] < 100 && pix[2] > 30 && pix[2] < 70) { // if colour is brown
      let pixMode = sourceImg.get(x1, y1)
      //creates a certain brown colour
      pixMode[0] = random(30,45)
      pixMode[1] = random(65,75)
      pixMode[2] = random(115,130)

      // noFill()
      fill(pixMode)
      brushstroke1(x1, y1, 1, random(9,12), 30, random(5.3,8.7))
      brushstroke2(x1+50, y1-50, 1, random(9,12), 120, random(0.3,0.7));
      strokeWeight(2)
      stroke(pixMode);
      // noFill()
    }
  }
}
}

  for (let b = 0; b < 100; b++) { //
    let x4 = floor(random(sourceImg.width));
    let y4 = floor(random(sourceImg.width));
    let pix4 = sourceImg.get(x4, y4);
    let mask4 = maskImg.get(x4, y4);
    stroke(pix4);
    fill(pix4,0,0,90)
    if(go=true){
      let go=false
    }


}

    for (let b = 0; b < 10000; b++) { //creates the 'brush strokes' made from beziers, adds a painterly feel(only on white mask)
      let x2 = floor(random(sourceImg.width));
      let y2 = floor(random(sourceImg.width));
      let pix2 = sourceImg.get(x2, y2);
      let mask2 = maskImg.get(x2, y2);
      stroke(pix2);
      fill(pix2)
      if (mask2[0] > 98){
      }else{
      brushstroke1(x2+20, y2-50, 1, random(9,12), 30, random(0.3,0.7));
      brushstroke2(x2+50, y2-50, 1, random(9,12), 120, random(0.3,0.7));
    }
  }
//
  for (let c = 0; c < 50000; c++) { // creates all the detail that couldn't be created with the 'brushstrokes'
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.width));
    let mask = maskImg.get(x, y)
    let pix = sourceImg.get(x, y);
    fill(pix)
    noStroke()
    if(mask[0]>10){
    detail(x, y, 5, 5)
  }
  }

  for (let a = 0; a < 80000; a++) { //creates more detail on top of only parts that are coloured grey in mask
    let x3 = floor(random(sourceImg.width));
    let y3 = floor(random(sourceImg.width));
    let mask1 = maskImg.get(x3, y3)
    let pix1 = sourceImg.get(x3, y3);
    fill(pix1)
    noStroke()

    if(mask1[0] >90 && mask1[0]<100){
    detail(x3, y3, 5, 5)
  }
}




    renderCounter = renderCounter + 1;
    if (renderCounter > 10) {
      console.log("Done!")
      noLoop();

      // saveArtworkImage(outputFile);
    }
  }

  function detail(x, y, w, h) { // a pixel

    rect(x, y, w, h)
  }


  function brushstroke1(x, y, nstrokes, brushWidth, rotation, hairThickness) { //a function that is meant to simulate a brush stroke or multiple from beziers
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

  function brushstroke2(x, y, nstrokes, brushWidth, rotation, hairThickness) { //same as 1

    for (let c = 0; c < brushWidth * nstrokes; c = c + brushWidth) {
      push()
      strokeWeight(hairThickness)
      translate(x, y - 20)
      rotate(rotation)
      scale(1)
      translate(0, c)

      bezier(85, 20, random(40,37), 40, random(10,50), 50, 15, 60);

      pop()
    }
  }

  function keyTyped() {
    if (key == '!') {
      saveBlocksImages();
    }
  }
