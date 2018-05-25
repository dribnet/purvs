let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
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
let elementSpacing = 25;

function draw () {



  for(let i=0;i<1080/elementSpacing;i++) {

    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);

    // let x = floor(random(sourceImg.width));
    // let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = elementSpacing/2;
    fill(pix);

    //change mask
    let circleSize = elementSpacing;
    //o\0.53.87
    if(mask[0] == 0) { //mask layers
      noStroke()
      ellipse(x, y, circleSize, circleSize);
    }
    if(mask[0] > 0 && mask[0] < 70) {
      ellipse(x, y, circleSize * .8, circleSize * .8);
    }
    if(mask[0] == 87) {
      ellipse(x, y, circleSize * .6 , circleSize * .6);
    }
    else { //background dots
      // rect(x-halfSize, y-halfSize, elementSpacing, elementSpacing);  
      ellipse(x, y,  circleSize * .5 ,circleSize * .5) ;

    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 100) {	//render counter = number of times it goes thru the algorithim.
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
