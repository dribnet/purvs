let sourceImg=null;
let maskImg=null;
let renderCounter=0;

function preload() {
  sourceImg = loadImage("input_3.jpg");
  maskImg = loadImage("mask_3.png");
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

function draw () {
  rectMode(RADIUS);
  for(let i=0;i<100;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);
    let pointSize = 50;
    let halfSize = 25;
    if(mask[0] > 128) {
        noStroke();
        fill(pix);
        quad(x-random(24,33),y-random(24,33),x-random(24,33),y+random(24,33),x+random(24,33),y+random(24,33),x+random(24,33),y-random(24,33));
        fill(lerpColor(color(pix),color(0,0,0),random(20,40)/100));
        quad(x-random(20,29),y-random(20,29),x-random(20,29),y+random(20,29),x+random(20,29),y+random(20,29),x+random(20,29),y-random(20,29));
        stroke(pix);
        noFill();
        strokeWeight(2);
        curveTightness(3);
        beginShape()
        for(var k=0; k<20; k++) {
          var rand1=random(256,192);
          curveVertex(x-rand1/2+noise(random(200))*rand3,y-rand1/2+noise(random(200))*rand1);
          var rand2=random(256,192);
          curveVertex(x-rand2/2+noise(random(200))*rand3,y-rand2/2+noise(random(200))*rand2);
          var rand3=random(256,192);
          curveVertex(x-rand3/2+noise(random(200))*rand3,y-rand3/2+noise(random(200))*rand3);
        }
        endShape();

    } else {
      noStroke();
      fill(lerpColor(color(pix),color(0,0,0),0.6));
      quad(x-random(24,33),y-random(24,33),x-random(24,33),y+random(24,33),x+random(24,33),y+random(24,33),x+random(24,33),y-random(24,33));
      /*
      stroke(pix);
      strokeWeight(1);
      noFill();
      ellipse(x,y,16,16);
      noStroke();
      */
    }
  }

  renderCounter = renderCounter + 1;
  if(renderCounter > 30) {
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


      
