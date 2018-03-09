const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

var s = 0;
var sR = 0;
var m = 0;
var mR = 0;
var h = 1;
var hR = 0;

function setup () {
  background(20);
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
  angleMode(DEGREES);
  //colorMode(HSB);
  textAlign(CENTER, CENTER);
    textSize(65);
  frameRate(1);

  // you can optionally add your own code here if you also have setup code
}
// Update this function to draw you own maeda clock
function draw () {
  translate(CANVAS_WIDTH/2, CANVAS_HEIGHT/2);
  background(255,100);
  strokeWeight(2); // Stroke weight to 8 pixels

  //rotate(270);
  fill(0);

  push();
  rotate(hR);
  //rotate(hR);
  //fill(73, 112, 65);
  if(h<10){
    text('0'+h,0+25,0);
  }
  else{
  text(h,0+25,0);
  }
  pop();

  push();
  rotate(mR);
  //rotate(mR);
  fill(31, 196, 53);
  if(m<10){
    text('0'+m,0+100,0);
  }
  else{
  text(m,0+100,0);
  }
  pop();

  push();
  rotate(sR);
  //fill(25, 229, 41);
  //fill(sR,100,100);
  if(s<10){
    text('0'+s,0+175,0);
  }
  else{
  text(s,0+175,0);
  }
  pop();

  sR += 6;
  if(sR > 360){
    mR += 6;
    sR = 0;
    if(mR > 360){
      hR += 30;
      mR = 0;
      if(hR > 360){
        hR = 0;
      }
    }
  }

  s ++;
  if(s > 59){
    s = 0;
    m++;
    if(m>59){
      m=0;
      h ++;
      if(h > 12){
        h = 1;    
      }
    }
  }
}

// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
