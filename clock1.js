//CLOCK 7
var fr = 30;
var xpos = 145;
var speed = 6;

function setup() {
createCanvas(960,500);
frameRate(fr)
}

function draw() {

  translate(250,250);
  background(0)
  fill(0,0,250)
  textSize(105)
  textAlign(CENTER);
  h = hour()
  mi = minute()
  se = second()
  
  xpos = xpos + speed;
  if((xpos > 450) || (xpos < 0))
  {
    speed = speed * -1;
  }
     
  text(h + ':' + mi, xpos, 250)
  
}

