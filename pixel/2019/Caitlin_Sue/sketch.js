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
    //randomly fills background with ellipses/ rects
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
function draw_note (x, y, pix) {
  push();
    translate(x,y);
    //inverses stroke colours
    colorMode(HSB);
    stroke(pix);
    strokeWeight(0.8);

    //draws wavey note lines 
    beginShape();
      curveVertex(-4,-3);
      curveVertex(-4,-3);

      curveVertex(-2,-2);
      curveVertex(1,-4);

      curveVertex(4,-3);
      curveVertex(4,-3);

    endShape();

    beginShape();
      curveVertex(-4,3);
      curveVertex(-4,3);

      curveVertex(-2,4);
      curveVertex(1,2);

      curveVertex(4,3);
      curveVertex(4,3);
    endShape();

    //end lines of bank note
    line(-4,-3, -4,3);
    line(4,-3, 4,3);
  pop();
  colorMode(RGB);
}

//billboard ~ dollar sign
function draw_dollar_sign (x, y, pix){
  push();
    translate (x,y);
    //inverses stroke colours
    colorMode(HSB);
    stroke(pix);
    strokeWeight(0.8);

    //draws 'S' in dollar sign
    beginShape();
      curveVertex(2,-2);
      curveVertex(2,-2);

      curveVertex(0,-4);
      curveVertex(-2,-2);
      curveVertex(0,0)
      curveVertex(2,2);
      curveVertex(0,4);

      curveVertex(-2,2);
      curveVertex(-2,2);
    endShape();

    //line through 'S' in dollar sign
    line(0,-5, 0, 5);
  pop();
  colorMode(RGB);
}

//eye glyph
function draw_eye (x, y) {
  push();
    fill(255);

    //eye outline
    beginShape();
      curveVertex(x-4, y+6);
      curveVertex(x-4, y-6);
      curveVertex(x+4, y-6);
      curveVertex(x+4, y+6);
    endShape();

    beginShape();
      curveVertex(x-4, y-18);
      curveVertex(x-4, y-6);
      curveVertex(x+4, y-6);
      curveVertex(x+4, y-18);
    endShape();

    //eye iris (blue)
    fill(0,0,200);
    ellipse(x, y-6, 2.5, 2.5);

    //eye pupil
    fill(255);
    ellipse(x, y-6, 0.5, 0.5);
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
        //draws 'blurry' background
        draw_special_ellipse (x, y, tile_width, tile_width);
     } 

      //GREY MASK ~ billboard
      if(mask[0] > 100 && mask[0] <= 200){
        //tiled ellipses in billboard
        fill(pix)
        ellipse (x, y, 20, 20);
     }

      //BLACK MASK 0 ~ eye
     if(mask[0] == 0) {
        //tiled ellipses that fill in back of eye
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

      //WHITE MASK 255 ~ background
      if(mask[0] == 255){
        //draw nothing
     } 

      //GREY MASK ~ billboard
      if(mask[0] > 100 && mask[0] <= 200){

        //draw dollar sign randomly
        var die = int(random(0, 70));
        if (die == 0) {
          draw_dollar_sign (x, y, pix);    
        }     

        //draw note randomly
        var die = int(random(0, 70));
        if (die == 0) {
          draw_note (x, y, pix);      
        } 
     }

      //BLACK MASK 0 ~ eye
     if(mask[0] == 0) {
      //draws eye glyph
      draw_eye(x,y);
      }
    }
  }

//DRAWS IMAGE 10 TIMES ----------------------------------------------
  renderCounter = renderCounter + 1;
  if(renderCounter > 5) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped () {
  if (key == '!') {
    saveBlocksImages();
  }
}