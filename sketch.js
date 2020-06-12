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
  //background(255);//white
  //background(245,240,230); //cream

  sourceImg.loadPixels();
  maskImg.loadPixels();
}

//1920 x 640

function draw () {
  pointSize = 20;
  //embroider();
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

function paintedCross(){
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);

    let pointSize = 10;
    cross(x, y, pointSize);
  }
  render(30,0);
}

function crossStitch() {
  for(let y = 0; y < sourceImg.height; y += pointSize) {
      for (let x = 0; x < sourceImg.width; x += pointSize) {
      //sets position of pixel
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);

      //if (mask[0] < 128) {
        cross(x,y,pointSize,pix);
        stroke(0,0,0,80);
        strokeWeight(2);
        point(x,y);
      //}
    }
  }
}

function cross(x, y, size, pix){
  strokeWeight(4);

  stroke(pix);
  line(x, y, x + size, y + size); // under most thread

  let shadow = 50;
  let inc = size*0.45
  stroke(pix[0] - shadow, pix[1] - shadow, pix[2] - shadow, 50);//shadow
  line(x + inc, y + inc, x + (size-inc), y + (size-inc));
  shadow += 20;
  stroke(pix[0] - shadow, pix[1] - shadow, pix[2] - shadow, 50);//shadow
  line(x + inc + 5, y + inc + 5, x + (size-inc), y + (size-inc));

  stroke(pix);
  line(x + size, y, x, y + size);
}

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
    //if (mask[0] > 128) {
      push();
      translate(x,y);
      let r = random(pointSize*4,pointSize*20);
      line(0,0-pointSize*(random(3,5)),0,random(pointSize*4,pointSize*20));
      //ellipse(0,0,pointSize/2,random(pointSize*4,pointSize*20));

      pop();
    //}
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
