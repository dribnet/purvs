const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
var i = 1;
var x = 0;

function setup () {
  // create the drawing canvas, save the canvas element
  rectMode(CENTER);
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(20,100+x,100);
  
if(i==1){

  strokeWeight(5); // Stroke weight to 8 pixels
  noFill();
  rect(480,250,200,200,x);
  rect(480,250,185,185,x);

  textSize(25-x/5);
  fill(0);
  text(':',500+x/5,250);
  text(second(),510+x/5,250);

  text(':',460+x/5,250);
  text(minute(),470+x/5,250);

  text(hour(),430+x/5,250);

  x=x+1;
  if(x==150){
    i=2;
  }
} else if(i==2){
  strokeWeight(5); // Stroke weight to 8 pixels
  noFill();
  rect(480,250,200,200,x);
  rect(480,250,185,185,x);

  textSize(25-x/5);
  fill(0);
  text(':',500+x/5,250);
  text(second(),510+x/5,250);

  text(':',460+x/5,250);
  text(minute(),470+x/5,250);

  text(hour(),430+x/5,250);
  x=x-1;
  if(x==0){
    i=1;
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
