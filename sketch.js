let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "artwork_2.png";

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
const step_x = 10
const step_y = 15

//triangle tiles. Used to add on to x and y
const tri_1 = 5;
const tri_2 = 0;
const tri_3 = 15;


function draw() {
  background(50);

  for(let y = 0; y < height; y = y + step_y){
    for(let x = 0; x < height; x = x + step_x){
      let mask = maskImg.get(x, y);
      let pix = sourceImg.get(x, y);
      //filling where the colour should be with pix which is using the image saved onto ps4
      fill(pix);

      //using the if/else from the original code to make the white mask show as triangular pixels and the black/background as ellipses and rects
      if(mask[0] > 128) {
        //just making a triangle using vertices since I thought it would be easier than using the triangle function
        beginShape();
        vertex(x + (tri_1 * 2), y + (tri_1 * 4));
        vertex(x + (tri_2 * 2), y + (tri_2 * 4));
        vertex(x + (tri_3 * 4), y + (tri_3 * 2));
        vertex(x + (tri_1 * 2), y + (tri_1* 4));
        endShape();
      }else{
        ellipse(x, y, tile_w/2, tile_h*2);
        rect(x, y, tile_w/2, tile_h*2);
    }
    }
  }

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
