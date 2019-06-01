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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();


}
  const tile_width5 = 2.8;
  const tile_height5 =2.8;

  const tile_width4 = 3;
  const tile_height4 = 3;

  const tile_width3 = 3.5;
  const tile_height3 =3.5;

  const tile_width2 = 3.6;
  const tile_height2 = 3.6;

  const tile_width1 = 3.7;
  const tile_height1 =3.7;

  const tile_step_x = 3.5;
  const tile_step_y = 3.5;


 function draw () {

    for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) { 
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    fill(pix);
    if(mask[0] >= 0 && mask[0] < 36) {
     ellipse(x, y, tile_width1, tile_height1);
    }
    else if (mask[0] >= 36 && mask[0] < 72) {
     ellipse(x, y, tile_width2, tile_height2);
    }

    else if (mask[0] >= 72 && mask[0] < 108)  {
     ellipse(x, y, tile_width3, tile_height3);
    }

    else if (mask[0] >= 108 && mask[0] < 144) {
     ellipse(x, y, tile_width4, tile_height4);
    }

    else if (mask[0] >= 144 && mask[0] < 255) {
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











