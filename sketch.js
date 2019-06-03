let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let sourceFile = "input_2.jpg";
let maskFile   = "mask_2.png";
let outputFile = "artwork_2.png";

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

const tile_width = 10;//for tiles
const tile_height = 5;//for tiles
const tile_step_x = 6;//for tile space --------------comment out if not using tiles
const tile_step_y = 6;//for tile space ---- want to keep these numbers higher (const use for mask tiles)

function draw () {

let pointSize = 20;


background(50,50,50,60);
for(let y =0; y<height; y = y + tile_step_y){
for(let x =0; x<height; x = x + tile_step_x){
  let pix = sourceImg.get(x,y);
  let mask = maskImg.get(x, y);
  fill(pix);
  if(mask[0]>128){
    ellipse(x, y, tile_step_x, tile_step_y);
    fill(255, 219, 104,5);
      rect(x, y, pointSize, pointSize);   
      pop();
  }
  else{
  rect(x, y, tile_width, tile_height);
  }
}
}



/*--------------------------------------------SIMPLE TILES
for(let y =0; y<height; y = y + tile_height){
for(let x =0; x<height; x = x + tile_width){
  let pix = sourceImg.get(x,y);
  fill(pix);
  rect(x, y, tile_width, tile_height);
  }
}

*/


//------------------------------------------ LINES
/*
for(let i=0;i<4000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);
    stroke(pix);

    if(mask[0] > 128) {
      let pointSize = 10;
      ellipse(x, y, pointSize, pointSize);
    }

    else {
      let pointSize = 2;
      let x2 = floor(random(sourceImg.width));
      let y2 = floor(random(sourceImg.height));

      line(x, y, x2, y2);
    }
     

}  


*/


//----------------------------------------------------- SQUARES AND CIRCLES
/*
  fill(255, 227, 117,20);
  rect(0,0,704,1252);

  for(let i=0;i<8000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 15;
    let halfSize = 30;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, pointSize+2, pointSize+2);
      push(); 
      fill(200,0,0,10);
      ellipse(x, y, pointSize-2, pointSize-2);   
      pop();
      fill(0,30,200,10);
      ellipse(x, y, pointSize-2, pointSize-2);   
      pop();
    }
    else {
      rect(x, y, pointSize, pointSize); 

    }
    */
    //---------------------------------------------------
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
