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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 8;
const tile_height = 8;
const tile_step_x = 6;
const tile_step_y = 6;



function draw () {
  background(255,96,96);


  for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
       let pointSize = 8;
      fill(pix);
      if(mask[0] > 128) {
        ellipse(x, y, tile_width, tile_height);
        var die = int(random(0, 4));
        if (die == 0) {
          var gray = int(random(0, 102));
          var scalar = random(0.2, 0.45);
             stroke(10);
        }
      }
      else {
      let tile_width = 3;
      let tile_height = 3;
      const tile_step_x = 9;
      const tile_step_y = 9; 
      triangle(x, y-(tile_height/2), x+(tile_width/2), y+(tile_height/2), x-(tile_width/2), y+(tile_height/2));
      triangle(x, y, x+pointSize, y+pointSize,x+pointSize+10, y+pointSize+10);  
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
