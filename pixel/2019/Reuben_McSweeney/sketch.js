let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(150);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  // x and y are position of pixels

  for(let i=0;i<10000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = random(4,15);
    let halfSize = 50;
    // Array to set probability of dot generating
    let dist = [0,0,0,0,0,0,0,0,0,0,0,0,0,20,-20];
    let dist1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,,0,0,0,0,0,0,0,0,0,0,0,40,-40];


    let spikeprob = [0,0,0,0,0,0,0,1];
    let spike = random(spikeprob)


   // Changing colour of background to gray
    let grayscale = (pix[0]+pix[1]+pix[2])/3
    fill(grayscale);
    stroke(grayscale)

    if(mask[0] > 128) {
    // picking random number from array
      let outliersx = random(dist)
      let outliersy = random(dist)

      let outliersx1 = random(dist1)
      let outliersy1 = random(dist1)

   // Generate dot
      if(outliersx == 20 || outliersy == 20 || outliersx == -20 || outliersy == -20){
        let pointSize = 5
        ellipse(x+outliersx, y+outliersy, pointSize, pointSize);
      }
      if(outliersx1 == 40 || outliersy1 == 40 || outliersx1 == -40 || outliersy1 == -40){
        let pointSize = 3
        ellipse(x+outliersx1, y+outliersy1, pointSize, pointSize);
      }
      let pointSize = random(4,15);
      //Generate background
      ellipse(x, y, pointSize, pointSize);

    }
    else {

      fill(pix);
      stroke(pix);
      let pointSizeTri = random(3,15);
      //Centers triangle on coordinates
      let shift = -pointSizeTri/3;
      // Rotating and generating triangles
      push();
      translate(x,y);
      rotate(random(1,360));
      triangle(shift, shift, shift+pointSizeTri, shift+(pointSizeTri*(2/3)), shift+pointSizeTri, shift-(pointSizeTri*(2/3)));
      pop();

      if (renderCounter >= 10 && spike == 1 ){
        let stretchx = random(15,30);
        let stretchy = random(15,30);
        pointSizeTri = 7;
        strokeWeight = 0;
        push();
        translate(x,y);
        rotate(random(1,360));
        triangle(shift, shift, shift+pointSizeTri, shift+(pointSizeTri*(2/3)), shift+pointSizeTri + stretchx, shift-(pointSizeTri*(2/3)) + stretchy);
        pop();

      }
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
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
