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

function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 360;

  //input_1 background
    // fill(pix);
    // if(mask[0] < 255) {
    //   triangle (x, y, pointSize, pointSize, x+4, y+5);
    // }

  // input_2 background
    //person
    if(mask[0] >= 255) {
      push();
      stroke(pix);
      line (x-10, y-10, x+18, y+18);
      pop();
    }

  //input_3 background
    // fill(pix);
    // if(mask[0] < 255) {
    //   triangle (x, y, pointSize, pointSize, x+5, y+5);
    // }
  }


  //input_1
    // const tile_width = 10;
    // const tile_height = 10;

    //   for (let y = 0; y < height; y = y + tile_height){
    //     for (let x = 0; x < width; x = x + tile_width){
    //       let pix = sourceImg.get (x, y);
    //       let mask = maskImg.get (x, y);
    //       fill (pix);
    //       if (mask[0] >= 80){
    //         rect (x, y, tile_width/1.3, tile_height/1.3);
    //       }    
    //     }
    //   }

    // const tile_width1 = 8;
    // const tile_height1 = 8;

    //   for (let y = 0; y < height; y = y + tile_height1){
    //     for (let x = 0; x < width; x = x + tile_width1){
    //       let pix = sourceImg.get (x, y);
    //       let mask = maskImg.get (x, y);
    //       fill (pix);
    //       if (mask[0] >= 160){
    //         rect (x, y, tile_width1, tile_height1);
    //       }    
    //     }
    //   }

  // input_2
    //background 1
    const tile_width = 10;
    const tile_height = 10;

    for (let y = 0; y < height; y = y + tile_height){
      for (let x = 0; x < width; x = x + tile_width){
        let pix = sourceImg.get (x, y);
        let mask = maskImg.get (x, y);
        noFill();
        stroke(pix);
        if (mask[0] <= 60 && mask[0] > 0){
         rect (x, y, tile_width/1.5, tile_height/1.5);
        }
      }
    }

    //background 2
    const tile_width2 = 10;
    const tile_height2 = 10;

    for (let y = 0; y < height; y = y + tile_height2){
      for (let x = 0; x < width; x = x + tile_width2){
        let pix = sourceImg.get (x, y);
        let mask = maskImg.get (x, y);
        if (mask[0] <= 0){
          fill(pix);
          noStroke();
          rect (x, y, tile_width2, tile_height2);
        }
      }
    }

    //background 2
    const tile_width1 = 15;
    const tile_height1 = 10;

    for (let y = 0; y < height; y = y + tile_height1){
      for (let x = 0; x < width; x = x + tile_width1){
        let pix = sourceImg.get (x, y);
        let mask = maskImg.get (x, y);

        noFill();
        stroke (pix);
        if (mask[0] <= 0){
          rect (x, y, tile_width1/1.3, tile_height1/1.3);
        }
      }
    }

    //piano
    const tile_width3 = 5;
    const tile_height3 = 8;

    for (let y = 0; y < height; y = y + tile_height3){
      for (let x = 0; x < width; x = x + tile_width3){
        let pix = sourceImg.get (x, y);
        let mask = maskImg.get (x, y);
        stroke (pix);
        noFill();
        if (mask[0] >= 140 && mask[0] < 200){
          rect (x, y, tile_width3*0.6, tile_height3*0.6);
        }    
      }
    }
    
    //boxes on the floor
    const tile_width4 = 8;
    const tile_height4 = 8;

    for (let y = 0; y < height; y = y + tile_height4){
      for (let x = 0; x < width; x = x + tile_width4){
        let pix = sourceImg.get (x, y);
        let mask = maskImg.get (x, y);
        fill (pix);
        noStroke();
        if (mask[0] >= 200 && mask[0] < 255){
          ellipse (x+5, y+5, tile_width4/1.2, tile_height4/1.2);
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
