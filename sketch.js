function setup () {
  createCanvas(960, 500);
}

function draw () {
  var Click = (PI+QUARTER_PI);
  if (mouseIsPressed) {
    Click = -Click;
  arc(mouseX+80, mouseY, 40-mouseY, 40-mouseY, Click, TWO_PI - mouseX);

  arc(mouseX+80-mouseY/10, mouseY+80-mouseY/50, 40-mouseY, 40-mouseY, Click, TWO_PI - mouseX);

  arc(mouseX+80-mouseY/50, mouseY+80-mouseY/50, 40-mouseY, 40-mouseY, Click, TWO_PI - mouseX);

  arc(mouseX+80-mouseY/50, mouseY+80-mouseY/50, 40-mouseY, 40-mouseY, Click, TWO_PI - mouseX);

  arc(mouseX+80-mouseY/50, mouseY+80-mouseY/50, 40-mouseY, 40-mouseY, Click, TWO_PI - mouseX);

  arc(mouseX+80-mouseY/50, mouseY+80-mouseY/50, 40-mouseY, 40-mouseY, Click, TWO_PI - mouseX);
  }
  else {
    Click = Click;
  }
  fill (255, mouseY*0.4);
  strokeWeight (mouseY/150);
  arc(mouseX, mouseY, 80-mouseY, 80-mouseY, Click, TWO_PI - mouseX);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
