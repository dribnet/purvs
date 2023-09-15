let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "GraveThree.png";
let maskFile   = "GraveThreeMask1.png";
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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();

}

const tile_width = 10;
const tile_height = 10;


function draw () {

  for(let y=0; y<height; y = y +tile_height-3){
    for(let x=0; x<width; x = x+ tile_width-3){

      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
       
      if(mask[0] > 128){
       ellipse(x, y, tile_width, tile_height);
      }
      
      else{

var gray = int(random(0,182));

       fill(gray);
       rect(x,y,tile_width,tile_height);
      }
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
     //uncomment this to save the result
     saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}