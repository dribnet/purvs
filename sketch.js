let sourceImg=null;
let maskImg=null;
let renderCounter=0;



let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "artwork_1.png";

const t1 = 10;


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


function my_fire(x, y) {
  rect(x+7,y+3,7,8.5);
  rect(x+4,y+2,5,4);
  rect(x+4,y+5.5,5,4);
  rect(x+10,y+2,5,4);
  rect(x+10,y+5.5,5,4);


}

function draw () {
    if(renderCounter == 0) {
    background(0);
  }
  let tile_width = 5;
  let tile_height = 5;

  for(let y = 0; y < height; y = y + tile_height){
    for(let x = 0; x < width; x = x + tile_width){
      let pix = sourceImg.get(x,y);
      let mask = maskImg.get(x,y);
      fill(pix);
      stroke(pix);

      if(mask[0] < 180) {

        star(x, y, tile_width/1.5, tile_height*1.5, 6);
      }
      

      // else if (mask[0] >= 180 && mask[0] < 255) {
      else {

        stroke(80);
        strokeWeight(0.1);
        ellipse(x, y, tile_width, tile_height);
        line(x + 2.5, y, x + 2.5, y+50); 
      }

      
      
    }
  }


 for(let i=0;i<5000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 5;
    let halfSize = 10;
   
    fill(pix);

    if(mask[0] >180) {
      fill(pix);
      triangle(x, y, x+pointSize, y+pointSize,x+pointSize+5, y+pointSize+10); 
    }
    
    

  
  }


 
  renderCounter = renderCounter + 1;
  if(renderCounter > 30) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
     //saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}