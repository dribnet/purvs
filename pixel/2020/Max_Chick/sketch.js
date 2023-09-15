let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

function preload() { // what happens before we kick off
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () { // do not change canvas! - can edit stroke, back colour etc
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {

  // calls function to draw each layer. Takes arguments (width, height, and version)
  drawTwo(30, 30, 0); // background
  drawTwo(10, 10, 1); // midground
  drawTwo(10, 10, 2); // foreground

  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    //saveArtworkImage(outputFile);
  }
}

function drawTwo(tileWidth, tileHeight, type){      // faunction to draw each layer, called 3 times
  for(var x = 0; x < sourceImg.width; x = x+ tileWidth){
    for(var y = 0; y < sourceImg.height; y = y+ tileHeight){  // double for loop sets up the grid on which everything is drawn, based on image width and height.
      let pix = sourceImg.get(x, y); // sets 'pix' to specific x and y of image
      let mask = maskImg.get(x, y);  // sets 'mask' to specific x and y of image mask
      fill(pix[0],pix[1],pix[2]); // colour based on RGB value of pix location
      if (mask[0] > 128 && type == 0){                     // BACKGROUND LAYER
        stroke(pix); // sets stroke to pix colour
        strokeWeight(1.2);
        let yRandom = random(0,tileHeight); // a couple of random variables to add variation into liine position
        let xRandom = random(0,tileWidth);
        line(x-(xRandom), y+yRandom, (x + tileWidth*0.8)+(xRandom), y+yRandom); // drawing the line with random variable
      }else if (mask[0] > 50 && mask[0] < 180 && type == 1) { // MID LAYER
        stroke(pix);
        strokeWeight(1);
        let yRandom = random(0,tileHeight); // a couple of random variables to add variation into liine position
        let xRandom = random(0,tileWidth);
        push(); // saves current origin
        translate(x,y);
        for (var t = 0; t < 10; t++){
          stroke(255, 100);   // white semi-transparent lines
          strokeWeight(1);
          let randLine = random(1,20);
          if (randLine > 18){              // limits the amount drawn randomly to 1/10.
            line(0, 0, tileWidth+0, tileHeight+0);
          }rotate(360/t); // makes the lines rotate to look 'sketchy'
        }pop(); // back to old origin
      }else if (mask[0] < 128 && type == 2){  // FRONT LAYER for people
        noStroke();
        for (var i = 0; i < 5; i++){
          ellipse(x,y,tileWidth*1.5, tileHeight*1.5); // ellipses drawn overlapping half
        }
      }
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
