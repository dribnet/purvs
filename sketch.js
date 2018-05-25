let sourceImg=null;
let maskImg=null;
let renderCounter=0;

 let elementSpacing = 30;
 let circleSize = 10;
 let squareSize = 30;
 let triSize = 20;
 let triSize2 = 20;
 let triSize3 = 30;

function preload() {
  sourceImg = loadImage("input_2.jpg");
  maskImg = loadImage("mask_2.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');
  
  imageMode(CENTER);
  //noStroke();
  background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  //for(let i=50;i<80;i++)
  for(let i=0;i<1080/elementSpacing;i++) {
    let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    //let x = floor(random(sourceImg.width));
    //let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = squareSize/2;
    
    let dx = floor(random(elementSpacing/2));
    let dy = floor(random(elementSpacing/2));
    x = x + dx;
    y = y + dy;
    //z = z + dy;

    let a = 100;

    let pointSize = 10;
    //let halfSize2 = 40;
    fill(pix);

    colorMode(RGB);
    // colorMode(HSB);

    if(mask[0] > 128) {
      noStroke();
      //stroke(100, 55, 44);
      //strokeWeight(7);
      //ellipse(x, y, pointSize, pointSize);
      //ellipse(x+30, y+60, circleSize, circleSize+40);
      //triangle(x+30, y+60, z+10, circleSize, circleSize+40, circleSize);
      triangle(x+triSize3, y, x-triSize, y+triSize2, x, y+triSize);
      triangle(y, x+triSize2, y, x-triSize, y-triSize2, x);
      //rotate(a);
      translate(10, 20);
      //rotate(60);
      triangle(y+triSize, x+triSize3, y, x/triSize2, y+triSize3, x);
      //a = a + 0.1
      rect(x, y, squareSize, squareSize);
    }
    else {
      colorMode(RGB, 55);
      // colorMode(HSL);
      //rect(x-halfSize, y-halfSize, pointSize, pointSize); 
      //rotate(60);
      //ellipseMode(CENTER);
      ellipse(x+30, y+80, circleSize+10, circleSize);
      ellipse(x+80, y+15, circleSize+30, circleSize+20);
      //a = a + 1;   
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 400) {
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
