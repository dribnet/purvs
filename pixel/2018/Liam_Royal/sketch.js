let sourceImg=null;
let maskImg=null;
let renderCounter=0;

let final = false;

let elementSpacing = 20;
let circleSize = 40;
let squareSize = 25;

if(final) {
  elementSpacing = 10;
  circleSize = 25;
  squareSize = 20;
}

function preload() {
  sourceImg = loadImage("soup.jpg");
  maskImg = loadImage("soupMask.png");
}

function setup () {
  let main_canvas = createCanvas(1080, 1920);
  main_canvas.parent('canvasContainer');
  background(20);

  imageMode(CENTER);
  noStroke();
  //background(255);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

let pointSize = 20;


function draw () {
  for(let i=0;i<1080/elementSpacing;i++) {
  	let x = int(i * elementSpacing);
    let y = int(renderCounter * elementSpacing);
    //let x = floor(random(sourceImg.width));
    //let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let halfSize = 50;
    fill(pix);
    let blackCol = random(120,240);
   // if(mask[0]+1 > 128 && mask[0] < 128) {
    //	fill(244, 66, 217);
    //	ellipse(x, y, circleSize, circleSize);
    //	noFill();
    //}
    
    if(mask[0] > 128) {
      //rect(x, y, squareSize, squareSize); 
      push();
      //rotate(random(180));
     // stroke(255);
      star(x, y, 10, 50, 5); 
     // noStroke();
      pop();
      //ellipse(x-2,y-2, pointSize -10, pointSize -10)

    }
    else {
      //fill(blackCol);
      //ellipse(x, y, circleSize, circleSize); 
      stroke(1);
      rect(x, y, squareSize, squareSize);  
      noStroke();
    }
  }
  renderCounter = renderCounter + 1;
  if(renderCounter > 1920/elementSpacing) {
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

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
