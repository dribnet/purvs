x=0;
y=0;
function setup () {
  w = 960;
  h= 500;
  createCanvas(w, h);
  background(0);
}

function draw () {
  // if (mouseIsPressed) {
  //   fill(0);
  // }
  // else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
  rectMode(CENTER);
  
  stroke(220,200,80);
  noFill();
  
    x=x+170;
    //y=y+100;
    myPattern(x,y);
    y=y+170;
    myPattern(x,y);
    //myPattern(x,y);
  
  

  
}
function myPattern(x, y) {
  translate(x, y);
 rect(0,0,150,150);
  ellipse(0,0,120,120);
}
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
