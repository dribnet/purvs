let sourceImg=null;
let maskImg=null;
let renderCounter=0;

 let elementSpacing = 20;
 let circleSize = 10;
 let squareSize = 30;
 let triSize = 20;
 let triSize2 = 30;
 let triSize3 = 40;

function preload() {
  sourceImg = loadImage("input_1.jpg");
  maskImg = loadImage("mask_1.png");
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
    //fill(pix, 10);//////////////////

    //colorMode(HSL);
    //colorMode(HSB);

    if(mask[0] > 128) {
      noStroke();
      //stroke(100, 55, 44);
      //strokeWeight(7);
      //ellipse(x, y, pointSize, pointSize);
      //ellipse(x+30, y+60, circleSize, circleSize+40);
      //triangle(x+30, y+60, z+10, circleSize, circleSize+40, circleSize);
fill(pix[0], pix[1], pix[2], 50);
 push();
      translate(-10, 5);
      //triangle(x-triSize3, y, x+triSize2, y-triSize3, x, y+triSize);
      //triangle(x-triSize3, y, x+triSize, y-triSize2, x, y+triSize);
   
      triangle(y, x+triSize3, y, x-triSize2, y, x);
      rect(x, y, triSize3, triSize);
      //triangle(x-triSize3, y, x-triSize3, y, x, y+triSize3);
      //triangle(y, x-triSize, y, x-triSize3, x, x);
      stroke(pix);
      strokeWeight(0.5);
      //rotate(-10);
      triangle(x-triSize2, y, x+triSize, y-triSize3, x, y+triSize);

      //triangle(y-triSize, y-triSize, y, x+triSize3, y, x+triSize2);
      //triangle(x+triSize2, x, y, x, y+triSize3, x);

      //rotate(a);
      //translate(-10, 20);
      //rotate(60);
      //triangle(y, x+triSize3, y, x-triSize2, y, x);
      //a = a + 0.1
      //rect(x, y, squareSize, squareSize);
    pop();
    }
    else {
      fill(pix[0], pix[1], pix[2], 60);

      push();
      //colorMode(RGB, 50, 20, 10);
      // colorMode(HSL);
      //rect(x-halfSize, y-halfSize, pointSize, pointSize); 
      //rotate(60);
      //ellipseMode(CENTER);
      translate(0, -10);
      noStroke();
      //ellipse(x+30, y+80, circleSize+10, circleSize);
      //rotate(-5);
      //ellipse(x+80, y+15, circleSize+30, circleSize+20);
      //a = a + 1;  
      //rotate(0);
      triangle(x-triSize3, y+triSize2, x-triSize3, y+triSize3, x-triSize, y-triSize3);
      //translate(0, 50);
      //rotate(30);
      //translate(100, -50);
      triangle(x+triSize, y+triSize2, x-triSize3, y+triSize3, x-triSize2, y+triSize3);
      //triangle(x-triSize, y-triSize, y, x+triSize3, x-triSize2, x);  
      pop();
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