function setup () {
  createCanvas(960, 500);
  fill(0);
  rect(0,0,960,500);
  this.generate();
}

function draw () {
  if (mouseIsPressed) {
    this.generate();
  }
}

//The white lines are generated randomly
function generate(){
	fill(0);
    rect(0,0,960,500);
	for (var i=0; i<20; i++) {
    for (var j=0; j<10; j++) {
      stroke(255);
      strokeWeight(3);
      if(random(5)<1){
      line(50*i,25+50*j,50+50*i,25+50*j);
      }
      if(random(5)<1){
        line(50*i,25+50*j,50+50*i,75+50*j);
      }
      if(random(5)<1){
        line(50*i,25+50*j,50*i,75+50*j);
      }
      if(random(5)<1){
        line(50*i,25+50*j,50+50*i,-25+50*j);
      }
      noStroke();
      if(j % 2 == 1 && i % 2 == 1){
        fill(255,255,255);
      }
      else if(i%2==1){
        fill(255,80,40);
      }
      else if(j%2==1){
        fill(40,255,80);
      }
      else{
        fill(255,255,40);
      }
      this.shape(50*i, 25+50*j, 25);
    }
  }
}

function shape(posX, posY, size){
  ellipse(posX, posY, size,size);
  fill(0);
  ellipse(posX, posY, size/2,size/2);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
