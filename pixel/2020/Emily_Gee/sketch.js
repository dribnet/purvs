let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let pointSize = 10;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  angleMode(DEGREES);

  noStroke();

  background(30);//grey

  sourceImg.loadPixels();
  maskImg.loadPixels();
}

//1920 x 640

function draw () {
  pointSize = 20;
  embroider();
  pointSize = 10;
  crossStitch();
  drawHoles();
  render(3);
}

function render(num){
  renderCounter = renderCounter + 1;
  if(renderCounter > num) {
    console.log("Done!")
    noLoop();
    saveArtworkImage(outputFile);
  }
}

function crossStitch() {
  for(let y = 0; y < sourceImg.height; y += pointSize) {
      for (let x = 0; x < sourceImg.width; x += pointSize) {
      //sets position of pixel
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);

      if (mask[0] < 128) {
        cross(x,y,pointSize,pix);
        stroke(0,0,0,80);
        strokeWeight(2);
        point(x,y);
      }
    }
  }
} //cross stitches black area in mask

//draws the cross itself
function cross(x, y, size, pix){
  noStroke();
  fill(30);
  rect(x,y,pointSize);

  strokeWeight(3);
  stroke(pix);
  line(x, y, x + size, y + size); // under most thread

  let shadow = 50;
  let inc = size*0.45
  stroke(pix[0] - shadow, pix[1] - shadow, pix[2] - shadow, 50);//shadow
  line(x + inc, y + inc, x + (size-inc), y + (size-inc));
  shadow += 20;

  //draws upper most thread
  stroke(pix[0] - shadow, pix[1] - shadow, pix[2] - shadow, 50);//shadow
  line(x + inc + 5, y + inc + 5, x + (size-inc), y + (size-inc));

  stroke(pix);
  line(x + size, y, x, y + size);


}

//draws fabric holes in crosses
function drawHoles(){
  for(let x = 0; x < 1920; x+=pointSize) {
    for (let y = 0; y < 640; y += pointSize) {
      let mask = maskImg.get(x,y);

       if (mask[0] < 128) {
        stroke(0,0,0,80);
        strokeWeight(2);
        point(x,y);
      }
    }
}
}

//draws background embroidery
function embroider(){
  for(let i=0;i<1500;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    if(mask[0] < 128) {
      continue;
    }

    fill(pix);
    stroke(pix[0], pix[1], pix[2], pix)
    strokeWeight(5);
    if (mask[0] > 128) {
      push();
      translate(x,y);
      let r = random(pointSize*4,pointSize*20);
      ellipse(0,0,pointSize/50,random(pointSize*4,pointSize*20));

      pop();
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
