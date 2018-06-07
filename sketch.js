let sourceImg = null;
let maskImg = null;
let lap = 0;
let back = 0;
let renderCounter = 0;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();

  let pointSize = 20;
  let halfSize = 10;

  // Code for Background.
  if (back == 0){
    for(let xl = 0; xl <= 54; xl++) {
      let x = xl*pointSize*3;
      let y = 0;

      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);

      x = x + 5;
      y = y - 5;

      for (let v1 = 0; v1 < 33; v1++) {
        rect(x, y+lap, pointSize, pointSize*2);
        lap = lap + 60;
      }
      lap = 0;
      for (let v2 = 0; v2 < 33; v2++) {
        rect(x+30, y+lap-30, pointSize, pointSize*2);
        lap = lap + 60;
      }  
      lap = 0;
    }

    for(let yl = 0; yl <= 54; yl++) {
      let x = 0;
      let y = yl*pointSize*3;

      let pix = sourceImg.get(x, y);
      let mask = maskImg.get(x, y);
      fill(pix);

      x = x + 5;
      y = y - 5;

      for (let h1 = 0; h1 < 33; h1++) {
        rect(x+lap-40, y+10, pointSize*2, pointSize);
        lap = lap + 60;
      }
      lap = 0;
      for (let h2 = 0; h2 < 33; h2++) {
        rect(x+lap-10, y+40, pointSize*2, pointSize);
        lap = lap + 60;
      }
      lap = 0;
    }
  } 
  else { // Do Nothing.
  }
}

function draw () {
  for(let xl = 0; xl < 54; xl++) {
    let x = xl*20;
    let y = renderCounter*20;
    let pointSize = 40;
    let halfSize = 10;

    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    fill(pix);

    if(mask[0] > 128) {
      ellipse(x + halfSize, y + halfSize, pointSize, pointSize);
    }
    else {
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 108) {
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
