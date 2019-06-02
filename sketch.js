let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

var edgeList = [];

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
  for (var i = 0; i < 1252; i++){
    edgeList[i] = [];
  }
  loadArray();
}


function draw () {
  let pointSize = 40;
  let halfSize = 40;
  var opacity = 0;
  noStroke();
  for(let i=0;i<20000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    pointSize -= 0.005;
    halfSize -= 0.0025;
    opacity += 0.007;
    let col = color(pix[0],pix[1],pix[2],150 - opacity);

    let mask = maskImg.get(x, y);

    fill(col);
    if(mask[0] > 128) {
      ellipse(x, y, pointSize, pointSize);
    }
    else {
      // col = color(pix[0],pix[1],pix[2],150);
      // fill(col);
      // rect(x, y, pointSize/2, pointSize/4);
    }
  }

  drawLines();


  renderCounter = renderCounter + 1;
  if(renderCounter > 2) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

function drawLines(){
  let start = 0;

  for(var i = 0; i < 1252; i++){
    let index = 0;
    start = 0;
    while(index < 704){
      if(edgeList[i][index] == -1){
        start = index;
      }
      else if(edgeList[i][index] == 1){
        let pix = sourceImg.get(index, i);
        let col = color(pix[0],pix[1],pix[2],150);
        stroke(col);
        line( start, i, index, i);
      }
      index++;
    }
  }
}


function loadArray(){
  // create a 2d array of values of each pixel in picture
  // -1 = start of mask on line
  // 0  = neither
  // 1  = end of mask on line
  var isStart = true;

  for (var i = 0; i < 1252; i++){
    isStart = true;
    for (var j = 0; j < 704; j++){
      let mask = maskImg.get(j, i);

      if(isStart){
        if(j < 703 && mask[0] < 128){
          edgeList[i][j] = -1;
          isStart = false;
        }

        else{
          edgeList[i][j] = 0;
        }
      }
      else{ // isStart = false
        if(j == 703){ // last pixel on row
          edgeList[i][j] = 1;
          isStart = true;
        }
        else if(mask[0]>128){ // the next pixel is white
          edgeList[i][j] = 1;
          isStart = true;
        }
        else{
          edgeList[i][j] = 0;
        }
      }
    }
  }
  for(var i = 0; i < 1252; i++){
    for (var j = 0; j < 704; j++){
      if(edgeList[i][j] == -1){
        console.log("-1 at: " + i + " " + j);
      }
      else if(edgeList[i][j] == 1){
        console.log("1 at: " + i + " " + j);
      }
    }
  }
}
