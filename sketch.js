//I have used some of Tom White's example code for my own project
//https://bl.ocks.org/dribnet/2b5fdedb10367f0db717755169946832/b9eca66520db6771e0e0299da527af99496efb95
//https://bl.ocks.org/dribnet/2b5fdedb10367f0db717755169946832/a0a30d1ab172f2695fffb48b90e7aec031b9f6ce

let elementSpacing = 50;
let circleSize = 40;
let squareSize = 40;
let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("23frisbee.jpg");
  maskImg = loadImage("23frisbeebw.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const pointSize = 40;

function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
  	let x = int(i * elementSpacing);
  	let y = int(renderCounter * elementSpacing);
    //let x = floor(random(sourceImg.width));
    //let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    //let pointSize = 60;
    //let halfSize = 50;
    fill(pix);
    if(mask[0] > 128) {
      ellipse(x, y, circleSize, circleSize);
    }
    else {
      rect(x-halfSize, y-halfSize, squareSize, squareSize);    
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/pointSize) {
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
