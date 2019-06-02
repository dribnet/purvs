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

function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 360;

    //input_1 background
    fill(pix);
    if(mask[0] < 255) {
      triangle (x, y, pointSize, pointSize, x+4, y+5);
    }

    //input_2 background
    // if(mask[0] < 255) {
    //   push();
    //   stroke(pix);
    //   line (x-15, y-15, x+15, y+15);
    //   pop();
    // }

    //input_3 background
    // fill(pix);
    // if(mask[0] < 255) {
    //   triangle (x, y, pointSize, pointSize, x+5, y+5);
    // }
  }

  //input_1
    const tile_width = 10;
    const tile_height = 10;

      for (let y = 0; y < height; y = y + tile_height){
        for (let x = 0; x < width; x = x + tile_width){
          let pix = sourceImg.get (x, y);
          let mask = maskImg.get (x, y);
          fill (pix);
          if (mask[0] >= 80){
            rect (x, y, tile_width/1.3, tile_height/1.3);
          }    
        }
      }

    const tile_width1 = 8;
    const tile_height1 = 8;

      for (let y = 0; y < height; y = y + tile_height1){
        for (let x = 0; x < width; x = x + tile_width1){
          let pix = sourceImg.get (x, y);
          let mask = maskImg.get (x, y);
          fill (pix);
          if (mask[0] >= 160){
            rect (x, y, tile_width1, tile_height1);
          }    
        }
      }

  //input_2
    // const tile_width = 20;
    // const tile_height = 20;

    //   for (let y = 0; y < height; y = y + tile_height){
    //     for (let x = 0; x < width; x = x + tile_width){
    //       let pix = sourceImg.get (x, y);
    //       let mask = maskImg.get (x, y);
    //       fill (pix);
    //       if (mask[0] > 160){
    //         rect (x, y, tile_width/1.3, tile_height/1.3);
    //       }    
    //     }
    //   }

    // const tile_width1 = 10;
    // const tile_height1 = 10;

    //   for (let y = 0; y < height; y = y + tile_height1){
    //     for (let x = 0; x < width; x = x + tile_width1){
    //       let pix = sourceImg.get (x, y);
    //       let mask = maskImg.get (x, y);
    //       fill (pix);
    //       if (mask[0] < 80){
    //         rect (x, y, tile_width1, tile_height1);
    //       }    
    //     }
    //   }



  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
