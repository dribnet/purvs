let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";

//before code is up n running, process of showing the image
function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<2000;i++) { //The 2000 is how much pixels(in this case rects) there are on the screen, higher the number the more densly packed the pixels are
    let x = floor(random(sourceImg.width)); //Using a random X & random Y
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);


    if(mask[0] > 130) {
      let pointSize = 18;
      drawStar(x,y,14.5);


    }
    else {
      let pointSize = 19;
      square(x, y, pointSize, pointSize);
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

function drawStar(x,y,size) {
push();
strokeWeight(2);
translate(x,y)
for (var i = 0; i < 30; i++){ //10
line(size, 0, -size, 0);
rotate(360 % i);
}
pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
