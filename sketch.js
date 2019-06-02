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

//CONSTANTS ----------------------------------------------------

const tile_width = 20;
const tile_height = 8;

const tile_step_x = 20;
const tile_step_x2 = 9;

const tile_step_y = 20;
const tile_step_y2 = 9;

//MASK FILL FUNCTIONS -----------------------------------------
function draw_special_ellipse (x, y, width, height) {
  let pix = sourceImg.get(x,y);
  let die_roll = random([0, 1, 2, 3]);

  if(die_roll == 0) {
    //changes the opacity of pix
    fill(pix[0], pix[1], pix[2], 40);
    ellipse(x, y, tile_width, tile_width);

    fill(pix[0], pix[1], pix[2], 20);
    rect(x*3, y/2, tile_width/2, tile_width/2);
  }

  else if (die_roll == 1) {
    fill(pix[0], pix[1], pix[2], 30);
    ellipse(x, y, tile_height, tile_height);

    ellipse(x*2, y*2, tile_height*2, tile_height*2);

    fill(pix[0], pix[1], pix[2], 20);
    rect(x*4, y*2, tile_width/2, tile_width/2);
  }

  else if (die_roll == 2) {
    fill(pix[0], pix[1], pix[2], 10);
    ellipse(x/2, y/4, width/2, height/2);

    fill(pix[0], pix[1], pix[2], 20);
    ellipse(x, y, width/4, height/4);
  }
}

//DRAW FUNCTION -----------------------------------------------------

function draw () {

  angleMode(DEGREES);

  //FIRST LOOP ------------------------------------------------------
  //TILE FUNCTION 
  for (let y=0; y<height; y= y + tile_step_y2) {
    for (let x=0; x<width; x = x + tile_step_x2) {
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);

      //WHITE MASK 255 ~ background
      if(mask[0] > 200){
        draw_special_ellipse (x, y, tile_width, tile_width);
     } 

      //GREY MASK ~ billboard
      if(mask[0] > 100 && mask[0] < 255){
        fill(pix)
        ellipse (x, y, 20, 20);
     }

      //BLACK MASK 0 ~ eye
     if(mask[0] < 10) {
        fill(pix)
        ellipse (x, y, 20, 20);     
      }
    }
  }

  //SECOND LOOP ---------------------------------------------------
  for (let y=0; y<height; y= y + tile_step_y2) {
    for (let x=0; x<width; x = x + tile_step_x2) {
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);

        //CURVE CONSTANTS
      const x1 = x+5
      const y1 = x+26;
      const x2 = x+73;
      const y2 = x+24;
      const x3 = x+73;
      const y3 = x+61;
      const x4 = x+15;
      const y4 = x+65;

      //WHITE MASK 255 ~ background
      if(mask[0] > 200){
        //draw nothing
     } 

      //GREY MASK ~ billboard
      if(mask[0] > 100 && mask[0] < 255){
        //draw nothing
     }

      //BLACK MASK 0 ~ eye
     if(mask[0] < 10) {
        fill(255);
        ellipse(x, y, 6, 6);

        fill(0);
        ellipse(x, y, 1, 1);


        // push();
        // stroke(20);
        // rotate(90);
        // curve(x1, y1, x2, y2, x3, y3, x4, y4);
        // pop();
      }
    }
  }

//DRAWS IMAGE 10 TIMES ----------------------------------------------
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