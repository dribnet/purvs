let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
  
  //For the size of the shapes drawn
  let pSBig = 350;
  let pSSmall = 300;

function draw () {
    for(let i=0;i<1;i++) {

    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = floor(random(pSSmall, pSBig)); //picks random number between to values for the size of shapes
    let halfSize = pointSize/2
    let ro = map(pix[1], 0, 255, 0, 360);

    fill(pix);

    if(pix[0] < 85){  //Draws ellipse if colour value of point is < 85
        ellipse(x, y, pointSize, pointSize);
    }
    if(pix[0] > 85 && pix[0] < 170){  //Draws square if colour value of point is > 85 & < 170
        translate(x, y);
        rotate(ro);
        rect(0-halfSize, 0-halfSize, pointSize, pointSize);
    }
    if(pix[0] > 170){ //Draws traingle if colour value of point is > 170
      translate(x, y);
      rotate(ro);
      triangle(0, 0, 0-halfSize, 0+pointSize, 0+halfSize, 0+pointSize);
    }

    //Reduces size of shapes over time, while restricting the minimum sizes
    if(pSBig>50){
      pSBig-=0.3;
    }
    if(pSSmall>10){
      pSSmall-=0.3;
    }

    //console.log(pix);
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 3500) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
