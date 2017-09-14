


function setup () {
  createCanvas(960, 500);
}

function draw () {
  if (mouseIsPressed) {
	  
	rotate(mouseX);
    fill(mouseX, height, width);
	rectMode(CENTER);
	rect(mouseX, mouseY, 80, 80);
  }
  else {
    fill(mouseY,height,height);
	ellipse(mouseX, mouseY, 80, 80);
  }
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
