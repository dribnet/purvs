let sourceImg=null;
let maskImg=null;
let renderCounter=0;

 let elementSpacing = 27;
 let circleSize = 10;
 let squareSize = 30;
 let triSize = 20;
 let triSize2 = 40;
 let triSize3 = 60;
 let tri = 20;
 let tri2 = 30;
 let tri3 = 40;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');
  
  imageMode(CENTER);
  //noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {

  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    let istriangles = false;
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    x = x + dx;
    y = y + dy;

    let a = 100;

    let pointSize = 10;
    colorMode(RGB);

    if(mask[0] > 128) {
      noStroke();

    fill(pix[0], pix[1], pix[2], 40);
    
     push();

      translate(-10, 15);
      triangle(y, x+tri3, y, x-tri2, y, x);
      fill(pix[0], pix[1], pix[2], 30);
      rect(x, y, tri3, tri);
      fill(pix[0], pix[1], pix[2], 50);
      triangle(x-tri2, y, x+tri, y-tri3, x, y+tri);

    pop();
    }//End of flower

    //Start of background
    else {
      fill(pix[0], pix[1], pix[2], 50);

      push();

      translate(0, -10);
      noStroke();
      triangle(x-triSize3, y+triSize2, x-triSize3, y+triSize3, x-triSize, y-triSize3);

      pop();
    }//End of background
    
  }
  renderCounter = renderCounter + 1;


  if(renderCounter > 400 && istriangles == false) {
    console.log("Done!")
    //noLoop();
    istriangles = true
    renderCounter = 0;
    // saveBlocksImages();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}