let finalVersion = false;

let pointSize = 40;

let elementSpacin = 40 ;
let circleSize = 50;
let squareSize = 40;


if(finalVersion){
  pointSize = 20;
  circleSize = 25;
  squareSize = 20;
};

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background('gray');
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function convertRGBToHsluv(c){
  return hsluv.rgbToHsluv([c[0]/255.0, c[1]/255.0, c[2]/255.0]);
}

// function owl(x, y, c, s){
//   push();
//   translate(x, y);
//   scale(s);
//   stroke(c);
//   strokeWeight(70);
//   line(0,-35,0,-65);
//   noStroke();
//   fill(255);
//   ellipse(-17.5,-65,35,35);
//   ellipse(17.5,-65,35,35);
//   arc(0, -65, 70, 70, 0, PI);
//   fill(c);
//   ellipse(-14, -65, 8, 8);
//   ellipse(14,-65,8,8);
//   quad(0,-58,4,-51,0,-44,-4,-51);
//   pop();


// }

function draw () {
  for(let i=0;i<1080/elementSpacin;i++) {

    let x = int(i * elementSpacin);
    let y = int(renderCounter * elementSpacin);
    let dx = floor(random(elementSpacin/4));
    let dy = floor(random(elementSpacin/4)); 

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize / 2;
    let hsluvColor = convertRGBToHsluv(pix);


    if(mask[0] > 128) {
      fill(pix);
      ellipse(x, y, circleSize, circleSize);
      // x = x + dx/2;
      // y = y + dy/2;
      // let owl_size = map(hsluvColor[2],0,100,0.3,0.9);
      // owl(x,y,pix,owl_size);
    }
    else {  
      x = x + dx;
      y = y + dy;
      
      fillHsluv( 0, 0, hsluvColor[2]/2);
      rect(x-halfSize, y-halfSize, squareSize, squareSize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacin) {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
