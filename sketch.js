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

function heart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
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
const bg_width = 10;
const bg_height = 10;

const bg_width2 = 20;
const bg_height2 = 20;

const bg_width3 = 5;
const bg_height3 = 5;


function draw () {
  strokeWeight(1);

//pass 1
  for(let x = 0; x<width; x = x+bg_width){
    for (let y = 0; y<height; y = y+bg_height){
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x, y);
      fill(pix);
    
      //White on mask
      if(mask[0] > 200){              
       fill(pix);
       stroke(pix);
       star(x, y, 1, 3, 5);

       noFill();
       stroke(100);
       rectMode(CENTER);
       rect(x, y, bg_width, bg_height);
      }

      //Grey on mask
      else{
       fill(200, 180, 160); 
       stroke(220, 0, 0);
       heart(x, y, bg_height3);
      }
    }
  }

  //pass 2
   for(let x = 0; x<width; x = x+bg_width3){
    for (let y = 0; y<height; y = y+bg_height3){
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x, y);
      fill(pix);
      stroke(pix); 
    
      //Black on mask
      if(mask[0] <50 ){
       fill(pix);
       noStroke();
       ellipse(x, y, bg_height3, bg_height3);
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