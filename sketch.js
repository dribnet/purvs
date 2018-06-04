let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let gridSize = 20;
let pointSize = gridSize;

let gridXNum;
let gridYNum;

var maskLow = 255;
var maskHigh = 0;

let lineNum = 3;
let filletRadius = 0;

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
  rectMode(CENTER);
  sourceImg.loadPixels();
  maskImg.loadPixels();

  gridXNum = width / gridSize;
  gridYNum = height / gridSize;

  //mask low/high value finder

  for (var x = 0; x < gridXNum; x++) {
      for (var y = 0; y < gridXNum; y++) {
      let xPos = x*gridSize;
      let yPos = y*gridSize;
      let mask = maskImg.get(xPos, yPos);
      if(mask[0] > maskHigh){
        maskHigh = mask[0];
      } else if(mask[0] < maskLow){
        maskLow = mask[0];
      }
    }
  }
  //background(20);
}

function draw () {
  smooth();
  for (var x = 0; x < gridXNum; x++) {
    let xPos = x*gridSize+gridSize/2;
    let yPos = renderCounter*gridSize + gridSize/2;
    let pix = sourceImg.get(xPos, yPos);
    let mask = maskImg.get(xPos, yPos);

    //lineNum = Math.floor(map(mask[0],maskLow,maskHigh,4,8));
    
    filletRadius = abs(map(mask[0],maskHigh,maskLow,0,1));

    if(mask[0] == 0){
      pointSize = gridSize/10;
    } else {
      pointSize = (map(mask[0],maskLow,maskHigh,1,gridSize));
    }

    //shadow

    fill(20,100);

    push();
    translate(xPos+gridSize/8, yPos+gridSize/8);
    rect(0,0,pointSize,pointSize,filletRadius*gridSize);
    pop();

    //block colour

    fill(pix);

    push();
    translate(xPos, yPos);
    rect(0,0,pointSize,pointSize,filletRadius*gridSize);
    pop();

    }

    lineNum+=0.1;

  renderCounter = renderCounter + 1;
  if(renderCounter >= gridYNum) {
    console.log("Done!")
    noLoop();
    //saveBlocksImages();
  }
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / Math.floor(npoints);
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
