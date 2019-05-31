let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

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

//TILE CONSTANTS ----------------------------------------------------

const tile_width = 20;

const tile_height = 8;

const tile_step_x = 20;
const tile_step_x2 = 9;

const tile_step_y = 20;
const tile_step_y2 = 9;

//MASK FILL GLYPH FUNCTIONS
function draw_special_rect(x, y, width, height) {
  rect(x, y, width, height);
  let die_roll = random([0, 1, 2, 3]);
  if(die_roll == 0) {
    fill(0, 0, 0, 50);
    ellipse(x, y, width/2, height/2);
  }
  else if (die_roll == 1) {
    fill(255, 255, 255, 50);
    ellipse(x, y, width/2, height/2);
  }
  else if (die_roll == 2) {
    fill(255, 255, 255, 50);
    ellipse(x, y, width/2, height/2);
    fill(0, 0, 0, 50);
    ellipse(x, y, width/4, height/4);
  }
}


//DRAW FUNCTION -----------------------------------------------------

function draw () {

  //FIRST LOOP
  //TILE FUNCTION 
  for (let y=0; y<height; y= y + tile_step_y2) {
    for (let x=0; x<width; x = x + tile_step_x2) {
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);

      //WHITE MASK 255 ~ background
      if(mask[0] > 200){
        //fills with less opacity
        fill(pix[0], pix[1], pix[2], 50);
        draw_special_rect(x,y, 20, 20);
     } 

      //GREY MASK ~ billboard
      if(mask[0] > 100 && mask[0] < 255){
        fill(pix)
        ellipse (x, y, 20, 20);
     }

      //BLACK MASK 0 ~ eye
     if(mask[0] < 10) {
        fill(pix)
        ellipse (x, y, 20, 20);     }

    }
  }

  //SECOND LOOP
  for (let y=0; y<height; y= y + tile_step_y2) {
    for (let x=0; x<width; x = x + tile_step_x2) {
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);

      //WHITE MASK 255 ~ background
      if(mask[0] > 200){
     } 

      //GREY MASK ~ billboard
      if(mask[0] > 100 && mask[0] < 255){
     }

      //BLACK MASK 0 ~ eye
     if(mask[0] < 10) {
      fill(255);
        ellipse(x, y, 6, 6);
     }

    }
  }

//DRAWS IMAGE 10 TIMES
  renderCounter = renderCounter + 1;
  if(renderCounter > 5) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
     saveArtworkImage(outputFile);
  }
}

function keyTyped () {
  if (key == '!') {
    saveBlocksImages();
  }
}