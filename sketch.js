let sourceImg=null;
let maskImg=null;
let renderCounter=0;
let pointSize = 10;

// change these three lines as appropiate
let sourceFile = "piano.jpg";
let maskFile   = "mask_piano_black.png";
let outputFile = "output_piano.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(247,239,215);

  sourceImg.loadPixels();
  maskImg.loadPixels();
}

//1920 x 640

function draw () {
  for(let y = 0; y < 640; y += pointSize) {
      for (let x = 0; x < 1920; x += pointSize) {
      //sets position of pixel
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix);

      if (mask[0] > 128) {
        cross(x,y,random(1,4)*5, pix);
        //cross(x, y,pointSize);
      }
      else {
        embroider(x, y,pointSize);
      }
    }
  }
  render(1);
  drawgrid();
}

function render(num){
  renderCounter = renderCounter + 1;
  if(renderCounter > num) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function drawgrid(){
  for(let i = 0; i < 1920; i+=pointSize) {
    for (let j = 0; j < 640; j += pointSize) {
      stroke('black');
      strokeWeight(pointSize/8);

      point(i,j);
    }
  }
}

function cross(x, y, size){

  strokeWeight(3);
  line(x, y, x + size, y + size);
  line(x + size, y, x, y + size);
}

function embroider(x, y, size){
//random factor in here
  line (x, y  - (size * random(1,3)), x, y + (size * random(1,3)));
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
