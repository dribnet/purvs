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
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

const pointSize = 40;
function draw () {
  let x1 = 0;
  let y1 = 0;
  for(let i=0;i<1080.pointSize;i++) {
    //let x = int(i * pointSize);
    //let y = int(renderCounter * pointSize);
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = pointSize/2;
    fill(pix);
    stroke(pix);

    // original
    /*if(mask[0] > 128) {
      ellipse(x, y, pointSize, pointSize);
    }
    else {
      rect(x-halfSize, y-halfSize, pointSize, pointSize);    
    }
}*/

    // Test with connecting lines
    if(mask[0] > 128) {
    	if(x1!=0) {
    		strokeWeight(5);
    		line(x1+halfSize, y1+halfSize, x+halfSize, y+halfSize);
    		x1 = x;
    		y1 = y;
    	}
    	else{
    		x1 = x;
    		y1 = y;
    	}
    }
    else{
    	noStroke();
    	rect(x, y, pointSize, pointSize);
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
