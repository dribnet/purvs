let sourceImg=null;
let maskImg=null;
let vertRow = 0; //current render row going top to bottom

function preload() {
  sourceImg = loadImage("input_1.png");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(230);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let spacingGeneric = 15; 
let spacingCirc = 50;
let squareSize = 15;

let drawPass = 0;

function draw () {
  for(let i=0;i<1080/spacingGeneric;i++) {
    let x = i * spacingGeneric;
    let y = vertRow * spacingGeneric;
   
    let x2Circ = i * spacingCirc;
    let y2Circ = vertRow * spacingCirc;

    let circleSize = (random(30, 70));

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);

    let halfSize = squareSize/2;


    fill(pix);

    if((mask[0] > 160)&&(drawPass == 0)) {
      rect(x-halfSize, y-halfSize, squareSize*2, squareSize*2);   
    }  
    if ((mask[0] < 140)&&(drawPass == 0)){
      rect(x-halfSize, y-halfSize, squareSize/2, squareSize*2);  
    }
      if((mask[0] >141 && mask[0] <159)&&(drawPass == 1)) {
      let nx = x2Circ / 50.0;
      let ny = y2Circ / 30.0;
      let jit_x = 80*(noise(nx, ny, 0)-0.5);
      let jit_y = 80*(noise(nx, ny, 10)-0.2)

      fill((Math.ceil(Math.random()*215,255)),(150));
      ellipse(x + jit_x, y + jit_y, circleSize, circleSize);
    }

}

  vertRow = vertRow + 1;
  if(vertRow*spacingGeneric > 1920) {
  	if(drawPass == 0){
  		vertRow = 0;
  		drawPass = 1;
  	} else {
    console.log("Done!")
    noLoop();
    // saveBlocksImages();
}
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
