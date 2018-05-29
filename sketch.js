let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(150);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}


// const pointSize = 30;
let elementSpacing = 15;

function draw () {



  for(let i=0;i<1080/elementSpacing;i++) {


    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);

  	if(i%2 == 0){
  	 y += elementSpacing/2;
  	}

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = elementSpacing/2;
    fill(pix);

    //change mask
    let circleSize = elementSpacing;
    if(mask[0] == 0) { //mask layers
      noStroke()
      ellipse(x, y, circleSize, circleSize);
    }
    if(mask[0] > 0 && mask[0] < 50) {
      ellipse(x, y, circleSize * .95, circleSize * .95);
    }
    if(mask[0] > 50 && mask[0] < 100) {
      ellipse(x, y, circleSize * .8 , circleSize * .8);
    }
    if(mask[0] > 100 && mask[0] < 150) {
      ellipse(x, y, circleSize * .65 , circleSize * .65);
    }
    if(mask[0] > 150 && mask[0] < 200) {
      ellipse(x, y, circleSize * .55 , circleSize * .55);
    }
    if(mask[0] > 200) { //background dots
      // rect(x-halfSize, y-halfSize, elementSpacing, elementSpacing);  
      ellipse(x, y,  circleSize * .5 ,circleSize * .5) ;

    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 400) {	//render counter = number of times it goes thru the algorithim.
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
