let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

var edgeList = [];
var lineWidth = 100;
var lineLimit = 20;
var lineVar = 40;
var border = 20;

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
  var opacity = 0;
  noStroke();
  for(let i=0;i<80000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let col = color(pix[0],pix[1],pix[2],150 - opacity);
    fill(col);
    if(x < border/2 || x > width - border/2 || y < border/2 || y > height - border/2){ // make faint border
      if(random() > 0.5){
        fill(255,10);
      }
    }
    else if(x < border || x > width - border || y < border || y > height - border){
      if(random() > 0.5){
        fill(255,5);
      }
    }
    else if(x < border*2 || x > width - border*2 || y < border*2 || y > height - border*2){
      if(random() > 0.5){
        fill(255,3);
      }
    }
    pointSize -= 0.00025;
    opacity += 0.00175;

    let mask = maskImg.get(x, y);


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

  noStroke();
  fill(255,50);
  rect(0,0,width,height);

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

  for(var i = 0; i < 1252; i ++){
    let index = 0;
    start = 0;
    for (var j = 0; j < 704; j++){
      if(edgeList[i][j] == -1){
        start = j;
      }
      else if(edgeList[i][j] == 1){
        for(var k = lineWidth; k < j - start-lineWidth; k += lineWidth){
          let rand = random(lineVar);
          let lineStart = start + k - lineLimit - rand;
          let lineEnd = start + k + lineWidth + lineLimit + rand;
          if(lineStart < 0){
            lineStart = 0;
          }
          if(lineEnd > 704){
            lineEnd = 702;
          }
          let pix;
          if(lineStart + (lineEnd - lineStart)/2 <= 0){
            pix = sourceImg.get(1, i);
          }
          else{
            pix = sourceImg.get(lineStart + (lineEnd - lineStart)/2, i);
          }
          let col = color(pix[0],pix[1],pix[2],20);
          stroke(col);
          fill(col);
          // line(lineStart, i , lineEnd, i);
          noStroke();
          rect(lineStart,i-2,lineEnd - lineStart, 4);
          let r = random();
          let count = 0;
          while(r < 0.6){
            rect(lineStart, i-2 + count*4, lineEnd-lineStart+random(lineWidth/3),4);

            count++;
            r = random();
          }
        }
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
