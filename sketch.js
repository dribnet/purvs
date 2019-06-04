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

const tile_width =4;
const tile_height = 8;
const tile_step_x = 5;
const tile_step_y = 8;

function cross(x,y,s){
  push();
  translate(x,y);
  scale(s);
  let pix = sourceImg.get(x, y);
  stroke(pix);
  strokeWeight(10);
  line(-10, 10, 10, -10);
  line(10, 10, -10, -10);
  pop();
}



function draw () {
  for(let y = 0; y < height; y = y + tile_step_y){
    for(let x = 0; x < width; x = x + tile_step_x){
       let pix = sourceImg.get(x, y);
       let mask = maskImg.get(x, y);
       fill(pix);
       // stroke(pix);

       if (mask[0] > 128){
         rect (x,y, tile_width, tile_height);

       }else{
         rect(x, y, tile_step_x, tile_step_y);
         var die = int(random(0,6));
         if (die == 3){
           var scale = random(0.5, 0.8);
           cross(x,y,scale);
         }


         // draw_line(x,y);
       }

    }
  }


  // for(let i=0;i<5000;i++) {
  //   let x = floor(random(sourceImg.width));
  //   let y = floor(random(sourceImg.height));
  //   let pix = sourceImg.get(x, y);
  //   let mask = maskImg.get(x, y);
  //   let pointSize = 10;
  //   let halfSize = 50;
  //   fill(pix);
  //   if(mask[0] > 128) {
  //     ellipse(x, y, pointSize, pointSize);
  //   }
  //   else {
  //     rect(x, y, pointSize, pointSize);
  //   }
  // }
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
