let sourceImg = null;
let maskImg = null;
let renderCounter = 0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile = "mask_2.png";
let outputFile = "output_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup() {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  background(230, 37, 177); //bright pink
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw() {
  let highlighttilew = 40; //tile width
  let squarew = 40;
  let squareh = 40;
  //this for loop is for the pixelated highlighted part in each image
  for (var xtile = 0; xtile < sourceImg.width; xtile = xtile + highlighttilew) {
    let highlighttileh = random(2, 20); //random height of glitch pixels
    for (var ytile = 0; ytile < sourceImg.height; ytile = ytile + highlighttileh) {
      let mask = maskImg.get(xtile, ytile);
      if (mask[0] == 255) { //highlighted (white) part of mask
        noStroke();
        let pixMod = sourceImg.get(xtile, ytile);
        if (pixMod[1] > 150) { //lighter parts are yellow
          pixMod[0] = pixMod[0] * 1.3;
          pixMod[1] = pixMod[1] * 1.1;
          pixMod[2] = pixMod[2] / 23;
        } else if (pixMod[0] > 170) { //this colour mod is specifically for the third image, where the red was excessive.
          pixMod[0] = pixMod[0] / 1.1;
          pixMod[1] = pixMod[1] * 1.9;
          pixMod[2] = pixMod[2] / 1.5;
        } else { //darker parts are orange
          pixMod[0] = pixMod[0] * 2.3;
          pixMod[1] = pixMod[1] / 1.1;
          pixMod[2] = pixMod[2] / 1.6;
        }
        fill(pixMod);
        rect(xtile, ytile, squarew, squareh); //draws the pixels
        var randline = random(1, 10); //random to determinie if the line draws or not
        if (randline < 4) {
          stroke(230, 37, 177); //background pink
          strokeWeight(15);
          strokeCap(SQUARE); //stops  stroke caps going outside of their pixel
          var xoffset = random(20, 40); //random to detemine where in the existing pixel this one will draw
          line(xtile + xoffset, ytile, xtile + xoffset, ytile + highlighttileh); //draws the pink 'pixels'
          noStroke();
        }
      }
    }
  }
  //this for loop is for the dark background tiles
  let bgtilewidth = 6;
  let bgtileheight = 6;
  let circlediam = 17; //diameter of background circles
  for (var xtile = 0; xtile < sourceImg.width; xtile = xtile + bgtilewidth) {
    for (var ytile = 0; ytile < sourceImg.height; ytile = ytile + bgtileheight) {
      let mask = maskImg.get(xtile, ytile);
      let pixdark = sourceImg.get(xtile, ytile);
      if (mask[0] == 120) { //gives dark bits a red tinge
        pixdark[0] = pixdark[0] / 1.1;
        pixdark[1] = pixdark[1] / 3.5;
        pixdark[2] = pixdark[2] / 1.5;
        fill(pixdark[0], pixdark[1], pixdark[2], 170); //opacity
        noStroke();
        ellipse(xtile, ytile, circlediam); //draws the circles
      }
    }
  }
  //this loop is for the background blurry lines
  let linetilew = 3.5;
  let linetileh = 3.5;
  for (var xtile = 0; xtile < sourceImg.width; xtile = xtile + linetilew) {
    for (var ytile = 0; ytile < sourceImg.height; ytile = ytile + linetileh) {
      let mask = maskImg.get(xtile, ytile);
      let pix1 = sourceImg.get(xtile, ytile);
      if (mask[0] < 120) {
        if (pix1[0] > 150) { //this is  only  super  relevant for  image 3  again
          pix1[0] = pix1[0] * 1.1;
          pix1[2] = pix1[2] * 1.9;
        } else { //gives the lines all a blueish tinge.
          pix1[0] = pix1[0] / 1.5;
          pix1[2] = pix1[2] * 1.3;
        }
        stroke(pix1);
        strokeWeight(.7);
        var lineLength = random(20, 60);  //gives the line a random length
        var xrand = random(1, 5);
        line(xtile + xrand, ytile, xtile + xrand, ytile + lineLength);
        var rand = random(1, 10); //random to determie if circles draw
        if (rand < 2) {
          noFill();
          stroke(pix1[0] * 1.5, pix1[1] * 1.5, pix1[2] * 1.5, 100);
          strokeWeight(1);
          circle(xtile, ytile, 2); //tiny see through circles on top of lines
          noStroke();
        }
      }
    }
  }

  renderCounter = renderCounter + 1;
  if (renderCounter > 1) {
    console.log("Done!")
    noLoop();
    //uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
