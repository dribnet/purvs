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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}


function draw () {

    for(let i=0; i<8000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    strokeWeight(3);

   if(mask[0] == 255) {
           let pointSize1 = 60;
           line(x-10, y, x+pointSize1/5, y+pointSize1/3);
      }
  else
   if(mask[0] > 170 && mask[0] < 200){
          let pointSize2 = 10;
          ellipse(x, y, pointSize2,pointSize2+5);
  }
        else {
          let dice = random(1,6);
          if (dice < 5) {
        let pointSize3 = 3;
      drawLeaf(x, y, pointSize3);

      } else {
 if(mask[0] > 100 && mask[0] < 170){
      let pointSize3 = 10;
    //    rect(x, y, pointSize3+5, pointSize3+5);
      ellipse(x,y,pointSize3,pointSize3+5);

        //Make it a begin shape vibe either leaf looking or flower looking
      }
      }
      }
    }
  }

  function drawLeaf(x,y,size){
    push();
    translate (x,y);
    for(var i = 0; i < 10; i++){
      ellipse(size, -size, 10, 0);
      rotate(PI/5);
    }
  pop();
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
//  saveArtworkImage(outputFile);
  }


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
