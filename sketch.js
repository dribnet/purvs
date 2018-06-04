let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let pointSize = 20;

let gridXNum;
let gridYNum;

let lineNum = 3;

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
  //angleMode(DEGREES);
  sourceImg.loadPixels();
  maskImg.loadPixels();

  gridXNum = width / pointSize;
  gridYNum = height / pointSize;
}

function draw () {

  fill(0);

    for (var x = 0; x < gridXNum; x++) {

        let xPos = x*pointSize;
        let yPos = renderCounter*pointSize;

        let pix = sourceImg.get(xPos, yPos);
        let mask = maskImg.get(xPos, yPos);
        fill(pix);

        lineNum = Math.floor(map(mask[0],0,255,4,20));

        push();
        translate(xPos, yPos);
        if(lineNum == 4){
          rotate(-PI/4);
        } else {
        rotate(-PI/2);
      }
        polygon(0, 0, pointSize/2, lineNum);
        //rect(0,0,pointSize,pointSize);
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
