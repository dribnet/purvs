let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
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
  const tile_width5 = 3;
  const tile_height5 =3;

  const tile_width4 = 2.9;
  const tile_height4 = 2.9;

  const tile_width3 = 3.5;
  const tile_height3 =3.5;

  const tile_width2 = 3.6;
  const tile_height2 = 3.6;

  const tile_width1 = 2.52;
  const tile_height1 =2.52;

  const tile_step_x = 3.5;
  const tile_step_y = 3.5;


 function draw () {

    for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) { 
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    fill(pix);
    if(mask[0] >= 0 && mask[0] < 51) {
     rect(x, y, tile_width1, tile_height1);
    }
    else if (mask[0] >= 51 && mask[0] < 102) {
     ellipse(x, y, tile_width2, tile_height2);
    }

    else if (mask[0] >= 102 && mask[0] < 153)  {
     ellipse(x, y, tile_width3, tile_height3);
    }

    else if (mask[0] >= 153 && mask[0] < 204) {
     ellipse(x, y, tile_width4, tile_height4);
    }

    else if (mask[0] >= 204 && mask[0] < 255) {
     ellipse(x, y, tile_width5, tile_height5);
    }
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


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}











