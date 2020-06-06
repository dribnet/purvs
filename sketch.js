let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "output_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');
  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    if(mask[0] > 128) { //white
    // let pointSize = 15;
    // ellipse(x, y, pointSize, pointSize);
    stroke(pix);
    strokeWeight(1);
    drawLines(x,y,50);

    //drawStar(x,y,12);
  }  else { //black

     // let pointSize = 10;
     //  ellipse(x, y, pointSize, pointSize);
      stroke(pix);
      strokeWeight(1);
      drawStar2(x,y,25);
    }
  }




  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
  //  uncomment this to save the result
   saveArtworkImage(outputFile);
  }
}




function drawLines(x,y,size) {
push();
translate(x,y);
for(var i = 0; i < 4; i++){
line(size,0, -size,0);
rotate(360 / i);
}
pop();
}





function drawStar(x,y,size) {
push();
translate(x,y);
for(var i = 0; i < 10; i++){
line(size,0, -size,0);
rotate(360 / i);
}
pop();
}



function drawStar2(x,y,size) {
push();
translate(x,y);
for(var i = 0; i < 15; i++){
line(size,0, -size,0);
rotate(360 / i);
}
pop();
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
