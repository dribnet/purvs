let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile = "mask_1.png";
let outputFile = "output_1.png";
let wasteTextFile = "wasteText.png";
let wasteTextImage1File = "wasteText_image_1.PNG";
let wasteTextImage3File = "wasteText_image_3.PNG";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
  wasteTextImg = loadImage(wasteTextFile);
  wasteText1Img = loadImage(wasteTextImage1File);
  wasteText3Img = loadImage(wasteTextImage3File);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  //noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();

}

function draw() {
  //IMAGE_1 CODE
  for (let i = 0; i < 10000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    fill(pix);
    let pointSize = 10;
    if (mask[0] > 128) {
      line(x - 20, y, x+pointSize+5, y)
      } else
      line(x - 20, y, x + pointSize * 5, y);
        }
    tint(255, 25);
    image(wasteText1Img, 1000, 350);


  // IMAGE_2 CODE
  // for (let i = 0; i < 1000; i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   fill(pix);
  //   stroke(pix);
  //   fill(pix);
  //   let pointSize = 2;
  //   if (mask[0] > 128) {
  //     image2_maskedtext(x, y);
  //   } else
  //     image2_unmasked_opacity(x, y);
  //   fill(5);
  //   ellipse(590, 300, 20, 20);
  // }


  //IMAGE_3 CODE
  // for (let i = 0; i < 10000; i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   fill(pix);
  //   stroke(pix);
  //   fill(pix);
  //   let pointSize = 5;
  //   if (mask[0] > 128) {
  //     line(x - 20, y, x + pointSize, y)
  //   } else
  //     line(x - 20, y, x + pointSize * 10, y);
  //   }
  //   tint(255, 80);
  //   image(wasteText3Img, 950, 350);

  renderCounter = renderCounter + 1;
  if (renderCounter > 20) {
    console.log("Done!")
    noLoop();

    //uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}



function image2_unmasked_opacity(x, y) {
  let pointSize = 2;
  if (x > 590) {
    rect(x, y, pointSize * 3, pointSize * 7);
  } else {
    tint(255, 10);
    rect(x, y, pointSize * 3, pointSize * 7);
  }
}

function image2_maskedtext(x, y) {
  let pointSize = 2;
  if (x > 590) {
    stroke(255);
    strokeWeight(.25);
    rect(x, y, pointSize * 4, pointSize);
  } else {
    noStroke();
    rect(x, y, pointSize * 2, pointSize * 2);

  }
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
