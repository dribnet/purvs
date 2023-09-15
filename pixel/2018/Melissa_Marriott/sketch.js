let sourceImg=null;
let maskImg=null;
let vertRow = 0; //current render row going top to bottom

function preload() {
  sourceImg = loadImage("input_3.png");
  maskImg = loadImage("mask_3.png");
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

//spacing between rectangles/rows of rectangles and part of ellipses
let spacingGeneric = 15; 
//spacing between ellipses
let spacingCirc = 50;
//size of rectangles
let squareSize = 15;
//set first pass of render to 0
let drawPass = 0;

function draw () {


  for(let i=0;i<1080/spacingGeneric;i++) { 

    let x = i * spacingGeneric;
    let y = vertRow * spacingGeneric; //sets up render to increase i accross image size
   
    let x2Circ = i * spacingCirc; //sets up paramaters to be used in the ellipse's position 
    let y2Circ = vertRow * spacingCirc;

    let circleSize = (random(30, 70)); //sets the circle size to a random size between 30 and 70

    let pix = sourceImg.get(x, y); //collects colour from pixels of image
    let mask = maskImg.get(x, y); //collects mask

    let halfSize = squareSize/2; //halves square size

    fill(pix); //fills rectangles with colour taken from input image

    if ((mask[0] > 160)&&(drawPass == 0)) {
      rect(x-halfSize, y-halfSize, squareSize*2, squareSize*2); //draws squares on white mask areas 
      }  

    if ((mask[0] < 140)&&(drawPass == 0)){
        rect(x-halfSize, y-halfSize, squareSize/2, squareSize*2); //draws rectangles on black mask areas
      }
      
    if ((mask[0] >141 && mask[0] <159)&&(drawPass == 1)) { //draws ellipses in gray mask areas when the draw pass == 1
        let nx = x2Circ / 50.0;
        let ny = y2Circ / 30.0;
        let jit_x = 80*(noise(nx, ny, 0)-0.5);
        let jit_y = 80*(noise(nx, ny, 10)-0.2) //sets up jitter for ellipse distribution to p5js' noise 

        fill((Math.ceil(Math.random()*215,255)),(150)); //randomly generates number (rounded up) 
        ellipse(x + jit_x, y + jit_y, circleSize, circleSize);
      }
    }

vertRow = vertRow + 1;
  
  if(vertRow*spacingGeneric > 1920) { //counts pixels then resets when draw pass ticks to 1
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
