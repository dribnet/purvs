let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

function preload() {
  sourceImg = loadImage("sourceFile");
  maskImg = loadImage("maskFile");
}

function setup () {
  let main_canvas = createCanvas(704, 1252);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  background('#eab500');
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let spacing = 5;
let ellipsesize = 5;
let rectsize = 2;
let circles = 10000;
let renders = 200;

function draw () {
  for(let i=0;i<circles;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    let halfSize = spacing * 0.5;
    print(renderCounter);

    if (mask[0] > 128) {
      noFill();
      stroke(pix);
      strokeWeight(2);
      squareBase = map(y, 0, 1080, 20, 2);
      ellipsesize = squareBase = floor(random(5, 50));
      rect(x-halfSize, y-halfSize, rectsize, rectsize);
         
    }
    if (renderCounter < 10 && mask [0] <= 128) {
           fill(pix);
      noStroke();
      ellipsesize = floor(random(10, 10));
      ellipse (x- ellipsesize, y - ellipsesize , ellipsesize, ellipsesize);
    
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > renders) {
    console.log("Done!")
    noLoop();
      // uncomment this to save the result
    saveArtworkImage(outputFile);
  }

   
}
//   for(let i=0;i<1080/variation;i++) {
//     let x = floor(random(renderCounter * variation/2));
//     let y = floor(random(renderCounter * variation/2));
//     let x2 = int (i * variation);
//     let y2 = int (renderCounter * variation);
//     let pix = sourceImg.get(x, y);
//     let mask = maskImg.get(x, y);
//     let halfsize = rectsize/2;
//     fill(pix);
//     if(mask[0] > 128) {
// push ();
//       ellipse(x2, y2, ellipsesize/2, ellipsesize/2);
//     noFill();
//       ellipse(x, y, ellipsesize, ellipsesize);
//     }

//     else {

//       push();
//       x2 = x2 + x;
//       y2 = y2 + y;
//       noStroke();

//       rect(x2 -halfsize, y-halfsize, rectsize, rectsize);    
//       pop();
//     }
//   }
//   renderCounter = renderCounter + 1;
// 
// }

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
