function setup () {
  createCanvas(960, 500);
}



function draw () {

  strokeWeight(2);
  stroke(255, 198, 203);
  fill(255);
  
  ellipseMode(CENTER);

  var x = 0;
  var y = 0;

  for (var x = 0; x <= width; x += 10) {
    for (var y = 0; y <= height; y += 10) {
     ellipse(x, y, 10, 10);  
    }     
  }

  var i = 0;
  
  stroke(255, 100);
  strokeWeight(75);
  for (var i = 0; i <= width + width/2; i += 200) {
    line(i - width/2, -50, 0 + i, height+50);   
  }

  for (var i = 0; i <= width + width/2; i += 200) {
    line(i, -50, -width/2 + i, height+50);   
  }

  stroke(255);
  strokeWeight(25);
  for (var i = 0; i <= width + width/2; i += 200) {
    line(i - width/2, -50, 0 + i, height+50);   
  }

  for (var i = 0; i <= width + width/2; i += 200) {
    line(i, -50, -width/2 + i, height+50);   
  }

  noLoop();

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
