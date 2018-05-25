let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
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
  //background(117, 187, 220);
  background(255);
}


//DONT MOVE
  //let pointSize = 50;
  let elementSpacing = 20;
  
//DONT MOVE


function draw () {

  for(let i=0;i<1080/elementSpacing;i++) {
//    let x = floor(random(sourceImg.width));
//    let y = floor(random(sourceImg.height));

let triSize = 60



let x = int(i * elementSpacing);
let y = int(renderCounter * elementSpacing);
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    
    let halfSize = triSize/2;
    fill(pix);

var r1 = random(triSize);
var r2 = random(halfSize);
var r4 = random(halfSize/2);

//stroke(1);
//rect(x, y, pointSize, pointSize);

      triangle(x+r1, (y+r4), (x+triSize)-r4, (y+triSize)-r4, x+r4, (y+triSize)-r4);
    
//triangle(x+r1, y, x+triSize, y+triSize, x, y+triSize);

/*
    if(mask[0] > 128) {
      triangle(x+r1, (y+r4), (x+triSize)-r4, (y+triSize)-r4, x+r4, (y+triSize)-r4);
    }
    else {
      triangle(x+r1, y, x+triSize, y+triSize, x, y+triSize);    
    }
    */
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 200) {
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
