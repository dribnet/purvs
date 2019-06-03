let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(100);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

//replacing pointsize
const tile_w = 20
const tile_h = 5
//tile ellipse
const tile_w_e = 20
const tile_h_e = 30
//space between the tiles
const step_x = 15
const step_y = 15
//triangle tiles
const tri_1 = 5;
const tri_2 = 0;
const tri_3 = 10;


function draw() {
  background(50);

  for(let y = 0; y < height; y = y + step_y){
    for(let x = 0; x < height; x = x + step_x){
      let mask = maskImg.get(x, y);
      let pix = sourceImg.get(x, y);
      fill(pix);
      if(mask[0] > 128) {
        //just making a triangle using vertices since I thought it would be easier
        beginShape();
        vertex(x + (tri_1 * 2), y + (tri_1 * 4));
        vertex(x + (tri_2 * 2), y + (tri_2 * 4));
        vertex(x + (tri_3 * 4), y + (tri_3 * 2));
        vertex(x + (tri_1 * 2), y + (tri_1* 4));
        endShape();
      }else{
        ellipse(x, y, tile_w*2, tile_h/2);
        ellipse(x, y, tile_w/2, tile_h*2);
    }
    }
  }
/*
function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 20;
    let halfSize = 40;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, pointSize, pointSize/2);
      ellipse(x, y, pointSize/2, pointSize);
    }
    else {
      rect(x, y, pointSize, pointSize*2);
    }
  }
*/
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
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
