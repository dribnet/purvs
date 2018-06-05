let sourceImg=null;
let maskImg=null;
let renderCounter=0;

const colorBack = "#e3eded"; // using the colour from assignment 2, to make the backgound easy for the eyes

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(colorBack);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  let pointSize = 16;

  for(let i=0;i<1080/pointSize;i++) {
    let x = int(i * pointSize);
    let y = int(renderCounter * pointSize) - (4*renderCounter); // used for the hexagon grid
    let halfSize = pointSize/2;
    let pix = sourceImg.get(x+halfSize, y+halfSize); // to curectly find colour 
    let mask = maskImg.get(x+halfSize, y+halfSize); // to curectly find colour 
    if(mask[0] < 128) { //crating the background using 3 hexagons (2 coloured and 1 white)
      if(renderCounter%2 == 0){ // a small indent in the x axis, for the hexagon based grid 
        fill(pix);
        hexagon(x+(pointSize/2), y, pointSize);
        fill(255);
        hexagon(x+(pointSize/2), y, pointSize-(pointSize/5));
        fill(pix);
        hexagon(x+(pointSize/2), y, pointSize-(pointSize/2));
      }
      else{
        fill(pix);
        hexagon(x, y, pointSize);
        fill(255);
        hexagon(x, y, pointSize-(pointSize/5));
        fill(pix);
        hexagon(x, y, pointSize-(pointSize/2));
      }
    }
    else { //crating the foreground
      fill(pix);
      if(renderCounter%2 == 0){ // a small indent in the x axis, for the hexagon based grid
        hexagon(x+(pointSize/2), y, pointSize);
      }
      else{
        hexagon(x, y, pointSize);
      }
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > sourceImg.height/(pointSize/2)) {
    console.log("Done!")
    noLoop();
    //saveBlocksImages();
  }
}

function hexagon(x, y, radius) { // draws a hexagon, rotated 90 degreases to fit in the grid
  var angle = TWO_PI / 6;
  beginShape();
  for (var a = -PI/2; a < TWO_PI*3/4; a += angle) {
    var sx = x + cos(a) * radius/2;
    var sy = y + sin(a) * radius/2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
