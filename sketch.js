let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

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

//background ~ ellipse
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

    ellipse(x*2, y*2, tile_height*5, tile_height*5);

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

//billboard ~ note
function draw_note (x, y, opacity, scaling) {
  push();
    scale(scaling);
    translate (x,y);

    //dark green stroke
    stroke(117, 127, 63, opacity);
    strokeWeight(10);

    //light green fill
    fill(189, 207, 70, opacity);

    rect (20,20,20,20);

    // curve(_, _, _, _, _, _, _, _);
    // curve(_, _, _, _, _, _, _, _);
    // curve(_, _, _, _, _, _, _, _);
    // curve(_, _, _, _, _, _, _, _);
  pop();
}

//DRAW FUNCTION -----------------------------------------------------

function draw () {

  //FIRST LOOP ------------------------------------------------------

  //tile loop
  for (let y=0; y<height; y= y + tile_step_y2) {
    for (let x=0; x<width; x = x + tile_step_x2) {
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);

      //WHITE MASK 255 ~ background
      if(mask[0] == 255){
        draw_special_ellipse (x, y, tile_width, tile_width);
     } 

      //GREY MASK ~ billboard
      if(mask[0] > 100 && mask[0] <= 200){
        fill(pix)
        ellipse (x, y, 20, 20);
     }

      //BLACK MASK 0 ~ eye
     if(mask[0] == 0) {
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

      angleMode(DEGREES);

      //WHITE MASK 255 ~ background
      if(mask[0] == 255){
        //draw nothing
     } 

      //GREY MASK ~ billboard
      if(mask[0] > 100 && mask[0] <= 200){
        var die = int(random(0, 4));
        if (die == 0) {
          var opacity = int(random(0, 102));
          var scaling = random(0.2, 0.45);
          draw_note (x, y, opacity, scaling);          
        }     
     }

      //BLACK MASK 0 ~ eye
     if(mask[0] == 0) {
        // fill(255);
        // ellipse(x, y, 6, 6);

        // fill(0);
        // ellipse(x, y, 1, 1);

        //---------------------------

        //eye glyph
        push();
          stroke(1);
          strokeWeight(0.2);
          
          fill(255);

          curve(x-5, y, x-5, y-10, x+5, y-10, x+5, y);
          curve(x-5, y, x-5, y+10, x+5, y+10, x+5, y);
        pop();

        //eye iris
        fill(0);
        ellipse(x, y, 2, 2);
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