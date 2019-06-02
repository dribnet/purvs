let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

var edgeList = [];
var lineWidth = 10;
var lineLimit = 20;

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
  for(let i=0;i<40000;i++) {
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
      rect(x, y, pointSize, pointSize/4);
    }
  }

  drawLines();


  renderCounter = renderCounter + 1;
  if(renderCounter > 1) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
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
    for (var j = 0; j < 704; j++){
      if(edgeList[i][j] == -1){
        start = j;
      }
      else if(edgeList[i][j] == 1){
        for(var k = 0; k < j - start; k += lineWidth){
          let rand = random(8);
          let lineStart = start + k - lineLimit+rand;
          let lineEnd = start + k + lineWidth + lineLimit+rand;
          if(lineStart < 0){
            lineStart = 0;
          }
          if(lineEnd > 704){
            lineEnd = 702;
          }
          let pix = sourceImg.get(lineStart + (lineEnd - lineStart)/2, i);
          let col = color(pix[0],pix[1],pix[2],50);
          stroke(col);
          line(lineStart, i , lineEnd, i);
        }
        // let pix = sourceImg.get(index, i);
        // let col = color(pix[0],pix[1],pix[2],150);
        // stroke(col);
        // line( start, i, index, i);
      }
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
