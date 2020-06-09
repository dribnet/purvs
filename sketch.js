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
  //noStroke();
  background(97, 73, 38);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {

  for (let i=0; i<2000; i++) {
      let x = floor(random(sourceImg.width));
      let y = floor(random(sourceImg.height));
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);

      fill(pix);
      stroke(pix);
      strokeWeight(4);
      //console.log(mask);
      let pointSize = 10;
        rect(x, y, pointSize, pointSize);
     if(mask[0] > 400) {
     let pointSize = 10;
     push()
     if(pix[0]<90){
        fill(pix[0],pix[1],pix[2],200);
        ellipse(x, y, pointSize, pointSize);
     }
     else{
         fill(pix[0],pix[1],pix[2],80)
         rect(x, y, pointSize, pointSize);
     }
     pop()

}

if(mask[0] > 150 &&mask[0]<200) {
  let pointSize = 10;
  push()
  if(pix[0]<90){
      fill(pix[0]*2.5,pix[1]*2.5,pix[2]*2.5,50);
      ellipse(x, y, pointSize, pointSize);
  }
  else{
      fill(pix[0],pix[1],pix[2],20)
      rect(x, y, pointSize, pointSize);
  }
  pop()
      }

  }
  for(let i=0;i<1000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    fill(pix);
    stroke(pix)
    strokeWeight(5)

  if(mask[0] < 100){
      let pointSize = 45;
      noStroke();
       fill(pix[0],pix[1],pix[2],20);
        rect(x, y, pointSize, pointSize);
  }
}
    for(let i=0;i<4000;i++){
        let pointSize = 10;
        let x = floor(random(sourceImg.width));
        let y = floor(random(sourceImg.height));
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        stroke(200)
        strokeWeight(1)

        if(mask[0]>50 && mask[0]< 250){
           let cross = 6
           fill(pix[0],pix[1],pix[2],40)
           line(x+1.5*cross, y, x-1.5*cross, y)
           line(x-cross, y-cross, x+cross, y+cross)

        }
    }

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
