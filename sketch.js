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
  background(30);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}
const tile_width = 5;
const tile_height = 5;

const triangle_width = 4;
const triangle_height = 4;

const tile_step_x = 10;
const tile_step_y = 10;

function draw () {
  strokeWeight(1);

//pass 1
  for(let y = 0; y<height; y = y+tile_height){
    for (let x = 0; x<width; x = x+tile_width){
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x, y);
      fill(pix);
    
      //if white on mask
      if(mask[0] > 200){
       fill(225, 242, 229);
       stroke(225, 242, 229);
       rect(x,y,tile_width, tile_height);
       fill(88, 153, 135);
       stroke(88, 153, 135);
       rectMode(CENTER);
       rect(x, y, tile_width, tile_height/2);
      }
     
      //if black on mask
      else{
        fill(30);
        stroke(30);
        rect(x,y,tile_width, tile_height);
        fill(pix); 
        stroke(pix); 
        triangle(x, y-(tile_height/2), x+(tile_width/2), y+(tile_height/2), x-(tile_width/2), y+(tile_height/2)); 
      }
    }
  }



  //pass 2
   for(let y = 0; y<height; y = y+tile_height){
    for (let x = 0; x<width; x = x+tile_width){
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix); 
    
      //if white on mask
      if(mask[0] < 100){
        fill(0);
        stroke(0); 
        rect(x, y, tile_width, tile_height);
      }
    }
  }




  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
