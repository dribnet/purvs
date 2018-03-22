var time = 0
var x = 500;
var b = 200;
function setup() {
  createCanvas(600, 600);
  background(255);
  angleMode(DEGREES);
  circ();
  fill(178, 59, 119);
  
  saveFrames("MaryRichards_Final", "png", 10, 22);
  
}

function draw() {
  noStroke();
  background(97, 192, 255, 50);


  
  var i = 0;
  var radius = 250;
 
  
  translate(width/2, height/2);
  var sc = map(sin(time), -1, 1, 0, 1);
  scale(sc);
  
  while(i < 30){
  rotate(360/30);
  ellipse(radius, 0, 50, 50);
  i = i + 1;
  
  }
}




function circ(circX, circY){
  push();
  translate(-220, -224);
  scale(0.2);
fill(255, 60);
  ellipse(circX-63, circY+95, 138, 138);
  ellipse(circX+249, circY+95, 138, 138);
  ellipse(circX+100, circY+242, 138, 138);
  ellipse(circX+90, circY-60, 138, 138);
  fill(212, 116, 81, 40);
  ellipse(circX+96, circY-60, 233, 232);
  ellipse(circX+250, circY+90, 233, 232);
  ellipse(circX-60, circY+95, 233, 232);
  ellipse(circX+98, circY+230, 233, 232);
  ellipse(circX+201, circY+90, 233, 232);
  ellipse(circX-15, circY+98, 233, 232);
  ellipse(circX+91, circY-15, 233, 232);
  ellipse(circX+98, circY+270, 233, 232);
  pop();
  

}


