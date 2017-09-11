var i = 0, startX = 0, startY = 0;
function setup () {
  createCanvas(960, 500);
  frameRate(1);
  startX = random(0, width); 
  startY = random(0, height);
}

function draw () {
  var to = color('#EF4623');
  var to = color('#f5ec25');
  var from = color('#1878B3');
  
  //angleMode(DEGREES);
  fill(255, 255, 255, 1);
  
  strokeWeight(0.1);
  translate(startX, startY);  
  // /print(width/12);
  var x = 0;
  var count = 0.05;
  while(x < width){
    var colour = lerpColor(from, to, count);
    stroke(colour);
    for (var i = 0; i < 16; i ++) {
      var rand = random(0,100);
      if(rand < 20){
        stroke(random(255), random(255), random(255));
      }
      rect(x, 20, 10, 1 * x);
      rotate(PI/8);
    }
    x = x + width/24;
    count = count + 0.05;
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
