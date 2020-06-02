let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}


function draw () {

    for(let i=0; i<4000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    strokeWeight(3);

   if(mask[0] == 255) { //White
           let pointSize1 = 60;
           line(x-10, y, x+pointSize1/5, y+pointSize1/3);
      }
        else{
   if(mask[0] > 120 && mask[0] < 180){ //Light Grey
          let pointSize2 = 10;
          ellipse(x, y, pointSize2, pointSize2+5);
        //  drawFlower(x,y,pointSize2);
  }

      else {
      if(mask[0] > 50 && mask[0] < 120){ //Dark Grey
           let pointSize3 = 2;
            drawLeaf(x,y,pointSize3);


      } else { //Black
      let pointSize4 = 5;
      drawFlower(x,y,pointSize4);
}

      }
      }
    }


  function drawFlower(x,y,size){
    push();
    translate (x,y);
    for(var i = 0; i < 10; i++){
      ellipse(size, -size, 10, 0);
      rotate(PI/5);
    }
  pop();
  }

  function drawLeaf(x,y,size){
    push();
    ellipse(x, y, 10, 25);
    line(x, y, x, y + 25);
    pop();

  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
  // saveArtworkImage(outputFile);
  }


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  }

}
