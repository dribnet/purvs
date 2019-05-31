let sourceImg=null;
let maskImg=null;
let renderCounter=0;



let sourceFile = "input_3.jpg";
let maskFile   = "mask_3.png";
let outputFile = "artwork_3.png";

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
  let halfAngle = angle / 3.0;
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


// function my_star(x, y) {

// }

function draw () {
  for(let i=0;i<2000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 8;
    let halfSize = 180;
    fill(pix);
    if(mask[0] > 180) {
      // rect(x, y, pointSize+6, pointSize);
      // line(x , y, x+pointSize+6, y+pointSize);

      star(x, y, pointSize/4, pointSize, 6);

      //my_star(x, y);
    }
    else {
      stroke(1);

      triangle(x, y, x+10, y+10,x+20, y+10);    
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
