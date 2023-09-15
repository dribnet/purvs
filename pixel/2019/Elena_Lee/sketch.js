
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
  background(0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const tile_width = 8;
const tile_height = 8;
const tile_step_x =  8;
const tile_step_y =8;



function draw () {


for(let y=0; y<height; y = y + tile_step_y) {
    for(let x=0; x<width; x = x + tile_step_x) {
      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);


//white mask
      noFill();
      stroke(pix) ;
      strokeWeight(1.5);


      ;
      if(151 < mask[0] && mask[0] > 180) {
      ellipse(x, y, tile_step_x+3, tile_step_y+3);
      //console.log('white is true');
      }
//grey mask
      else if (mask[0] ==97){
        fill(pix);
        stroke(20) ;
        strokeWeight(3);
        rect(x, y, tile_width-3, tile_height-3);

 //    console.log('grey1 is true');

      }
//light grey mask
      else if(mask[0] == 180){
        fill(pix);
      stroke(203,0,255);
  

        strokeWeight(5);
        line(x, y, x+10, y+10);

       //console.log('180 is true');
      }


//black mask
      else {
      stroke(0);
      fill(pix);
      strokeWeight(5);
      rect(x, y, tile_width-2, tile_height-2);
  //  console.log('black is true');
      }
    }


  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 10) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
//saveArtworkImage(outputFile);
  }


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
}
