function setup() {
  createCanvas(960, 500);
  background(146, 179, 205);
  smooth();

  var xstart = random(10),
      xnoise = xstart,
      ynoise = random(10);


  for (var y = 0; y <= height; y+=5) {
    ynoise += 1;
    xnoise  = xstart;
    for (var x = 0; x <= width; x+=5) {
      xnoise += 0.01;
      drawPoint(x, y, noise(xnoise, ynoise));
    }
  }
}

var counter = 1000;
var spacer = 50;


function draw () {

// 1st set of circles
  fill(248, 198, 207);
  noStroke();
  ellipse(100, 100, 160, 160);
  ellipse(260, 210, 20, 20);
  
  fill(248, 198, 207, 30);
  ellipse(180, 160, 130, 130);
  ellipse(280, 110, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(130, 210, 120, 120);
  ellipse(200, 90, 20, 20);
  ellipse(210, 250, 5, 5);
  arc(50, 50, 80, 80, 50, PI+QUARTER_PI);
//

// 2nd set of circles
  fill(248, 198, 207);
  noStroke();
  ellipse(400, 100, 160, 160);
  ellipse(560, 210, 20, 20);
  
  fill(248, 198, 207, 30);
  ellipse(480, 160, 130, 130);
  ellipse(580, 110, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(430, 210, 120, 120);
  ellipse(500, 90, 20, 20);
  ellipse(510, 250, 5, 5);
  arc(350, 50, 80, 80, 50, PI+QUARTER_PI);
//

// 3rd set of circles
  fill(248, 198, 207);
  noStroke();
  ellipse(700, 100, 160, 160);
  ellipse(860, 210, 20, 20);
  
  fill(248, 198, 207, 30);
  ellipse(780, 160, 130, 130);
  ellipse(880, 110, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(730, 210, 120, 120);
  ellipse(800, 90, 20, 20);
  ellipse(810, 250, 5, 5);
  arc(650, 50, 80, 80, 50, PI+QUARTER_PI);
//

// 1st set 2nd row
  fill(248, 198, 207);
  noStroke();
  ellipse(300, 300, 160, 160);
  ellipse(460, 410, 20, 20);
  
  fill(248, 198, 207, 30);
  ellipse(380, 360, 130, 130);
  ellipse(480, 310, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(330, 410, 120, 120);
  ellipse(400, 290, 20, 20);
  ellipse(410, 450, 5, 5);
  arc(250, 250, 80, 80, 50, PI+QUARTER_PI);
//

// 2nd set 2nd row
  fill(248, 198, 207);
  noStroke();
  ellipse(600, 300, 160, 160);
  ellipse(760, 410, 20, 20);
  
  fill(248, 198, 207, 30);
  ellipse(680, 360, 130, 130);
  ellipse(780, 310, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(630, 410, 120, 120);
  ellipse(700, 290, 20, 20);
  ellipse(710, 450, 5, 5);
  arc(550, 250, 80, 80, 50, PI+QUARTER_PI);
//

// 3rd set 2nd row
  fill(248, 198, 207);
  noStroke();
  ellipse(900, 300, 160, 160);
  ellipse(1060, 410, 20, 20);
  
  fill(248, 198, 207, 30);
  ellipse(980, 360, 130, 130);
  ellipse(1080, 310, 10, 10);
  
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  ellipse(930, 410, 120, 120);
  ellipse(1000, 290, 20, 20);
  ellipse(1010, 450, 5, 5);
  arc(850, 250, 80, 80, 50, PI+QUARTER_PI);
//

// code inspired by codepen found at https://codepen.io/amritmazumder/pen/ZYRPNz.
  //background(248, 198, 207);
  for (i = 0; i < width; i+=spacer) {
    for (j = 0; j < height; j+=spacer) {
      
      fill(0);
    
      var maxDistance = dist(0,0,width,height);
      
      
      var size = dist(mouseX,mouseY,i,j);
      
      size = size / maxDistance * 5;
      
      stroke(255, 255,255, 100);
      //line(i, j, mouseX, mouseY);
      noStroke();
      fill(255,255,255);
      ellipse(i, j, size, size);

    }
  }
}

// code inspired by codepen found at https://codepen.io/sdras/pen/EgmOKV.
function drawPoint(x, y, noiseFactor) {
  push();
  translate(x, y);
  rotate(noiseFactor * radians(360));
  stroke(y*0.1 + 248, 198, 207, 95);
  line(0, 0, 7, 0);
  pop();
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
