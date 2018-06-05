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

//Change background draw colour to same background RGB values as input image.
  // background(192,179,186);
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}


// const pointSize = 30;
let elementSpacing = 8;

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
    }i
    if(mask[0] > 50 && mask[0] < 100) {
    	noStroke();
      ellipse(x, y, circleSize * .7 , circleSize * .7);
  	}
    if(mask[0] > 200) { //background dots
      noStroke();
      rect(x-halfSize, y-halfSize, elementSpacing, elementSpacing);  
      // ellipse(x, y,  circleSize * .5 ,circleSize * .5) ;

    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 420) {	//render counter = number of times it goes thru the algorithim.
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
