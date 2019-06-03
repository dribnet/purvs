let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_1.png";

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


const tile_width = 20;
const tile_height = 10;
const tile_step_x = 5;
const tile_step_y = 5;

function draw () {
  for(let i=0;i<100;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 90;
    let pointSize2 = 5;
    let halfSize = 3;
    let halfSize2 = 50;

    fill(pix);
    stroke(pix); 
    }
  }

function draw () {
  background(50);


  for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix);
      if(mask[0] == 0) {
       ellipse(x, y, width, 3);
        ellipse(x, y, 3,100);

      }
      if(mask[0] == 255) {
        ellipse(x, y, tile_width,tile_height);
      }
      if(mask[0] ==131) {
       
        rect(x,y,10,10);

      }
      else{
        //ellipse(x,y,4,50);
      }

    }

  }





  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
   saveArtworkImage(outputFile);
  }


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
}
