let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "output_2.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 640);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER); //centering image
  noStroke(); //no stroke on the circles
  background(10); //background colour
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tileHeight = 12; //tile height (blue squares)
const tileWidth = 25; //tile width

const x_step = 30; //circle width
const y_step = 30; //circle height

const pointSize = 3; //controls the size of the small white circles in > 128 mask
const lineSize = 40; //controls line size

function draw() {
  for(var x = 0; x < sourceImg.width; x = x+ x_step){ //foor loop initiating the grid
    for(var y = 0; y < sourceImg.height; y = y+ y_step){
        let pix = sourceImg.get(x, y);
        let mask = maskImg.get(x, y);
        fill(pix);
        stroke(pix);
         if (mask[0] > 200) { //mask controlling the grid/tile
           fill(149, 201, 200, 15); //filling light blue with low opacity
           rect(x,y,tileWidth,tileHeight); //tile lines
         } else{
            if(mask[0] > 128) { //mask controlling the small white cirlces
               stroke(pix);
               fill(255); //fills white
               ellipse(x+pointSize,y+pointSize,pointSize,pointSize); //prints circles
          } else {
              if(mask[0] > 10 && mask[0] < 100) { //mask controls the primary circles for the bright colour imagery
                ellipse(x,y,18,18);
                fill(0, 50); //fills black
                ellipse(x+2,y+2,x_step,y_step); //creates a light shadow for 3D effect
          } else { //controls the nackground elements that aren't affected by a mask
              ellipse(x,y,25,25); //circles under the white lines
              stroke(240, 150); //white strokes
              ellipse(x,y,lineSize-38,lineSize); //vertical white lines
              stroke(50, 100); //lightens horizontal lines
              ellipse(x,y,lineSize,lineSize-38); //horizontal lines
}
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
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
