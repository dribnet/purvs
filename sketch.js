let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_3colour.jpg";
let maskFile = "mask_3colour.png";
let outputFile = "output_3.png";
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
  for (let i = 0; i < 15000; i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);
    fill(pix);
    let pointSize = 10;
    if (mask[0] < 128) {
      line(x, y, x + pointSize * 4, y);
    } else

      gajuarText(x, y);
  }


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
    //saveArtworkImage(outputFile);
  }
}


function gajuarText(x, y) {
  let pointSize = 10;
  if (x > 590) {
    line(x, y, x + pointSize, y)
  } else {
    noStroke();
    fill (255);
    //fill(100, 187, 245);
    rect(x, y, 5, 5);
  }
}




function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
