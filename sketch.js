let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

// let sourceFile = "input_2.jpg";
// let maskFile   = "mask_2.png";
// let outputFile = "artwork_2.png";

// let sourceFile = "input_3.jpg";
// let maskFile   = "mask_3.png";
// let outputFile = "artwork_3.png";

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

    

// function draw () {
//   for(let i=0;i<5000;i++) {
//     let x = floor(random(sourceImg.width));
//     let y = floor(random(sourceImg.height));
//     let pix = sourceImg.get(x, y);
//     let mask = maskImg.get(x, y);
//     let pointSize = 10;
//     let halfSize = 50;
//     fill(pix);
//     if(mask[0] > 128) {
//       ellipse(x, y, pointSize, pointSize);
//     }
//     //    else if(mask[0] > 255) {
//     //   ellipse(x, y, pointSize, pointSize);
//     // }
//     else {
//       rect(x, y, pointSize, pointSize);    
//     }
//   }


const tile_width = 12;
const tile_height = 18;
const tile_step_x = 5;
const tile_step_y = 30;

function draw () {
  for(let i2=0;i2<52000;i2++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 4;
    let halfSize = 180;
    fill(pix);
    if(mask[0] < 254) {
      stroke(pix);
      noFill();
      // rect(x, y, pointSize, pointSize);
        // ellipse(x, y, pointSize, pointSize);
        rect(x, y, tile_step_x, tile_step_y);
        var die = int(random(0, 4));
        if (die == 0) {
          var gray = int(random(0, 102));
          var scalar = random(0.2, 0.45);
          // owl(x, y, gray, scalar);          
        }
      }
    // }
    else {  
        console.log(pix);
        stroke(pix[0]+50);  
      noFill();
   ellipse(x, y, pointSize, pointSize);
    }
  }


// const tile_width = 12;
// const tile_height = 18;
// const tile_step_x = 20;
// const tile_step_y = 30;

// function draw () {
//   background(50);

//   // version 1: just draw all the tiles
//   for(let y=0; y<height; y = y + tile_step_y) {
//     for(let x=0; x<width; x = x + tile_step_x) {
//       let pix = sourceImg.get(x, y);
//       let mask = maskImg.get(x, y);
//       fill(pix);
//       if(mask[0] > 128) {
//         rect(x, y, tile_step_x, tile_step_y);
//         var die = int(random(0, 4));
//         if (die == 0) {
//           var gray = int(random(0, 102));
//           var scalar = random(0.2, 0.45);
//           // owl(x, y, gray, scalar);          
//         }
//       }
//       else {
//         rect(x, y, tile_width, tile_height);
//       }
//     }
//   }


// const tile_width = 12;
// const tile_height = 18;
// const tile_step_x = 20;
// const tile_step_y = 30;

// function draw () {
//   background(50);

//   // version 1: just draw all the tiles
//   for(let y=0; y<height; y = y + tile_step_y) {
//     for(let x=0; x<width; x = x + tile_step_x) {
//       let pix = sourceImg.get(x, y);
//       let mask = maskImg.get(x, y);
//       fill(pix);
//       if(mask[0] < 254) {
//         rect(x, y, tile_step_x, tile_step_y);
//         var die = int(random(0, 4));
//         if (die == 0) {
//           var gray = int(random(0, 102));
//           var scalar = random(0.2, 0.45);
//           // owl(x, y, gray, scalar);          
//         }
//       }
//       else {
//         rect(x, y, tile_width, tile_height);
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
