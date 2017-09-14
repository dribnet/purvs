let size = 100;

function setup () {
  createCanvas(960, 500);
}

function draw () {
  if (mouseIsPressed) {
    fill(0);
    drawShape(mouseX, mouseY, 100);
  }
  for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
      drawShape((i * 100), (j * 100), 100);
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

function drawShape(xpos, ypos, size){
  push();
  //print("Draw shape was called at: " + xpos + " , " + ypos);
  translate(xpos - (size * 0.5), ypos - (size * 0.5));
  line(size*0.5, 0, size*0.5, size);
  line(0, size*0.5, size, size*0.5);
  let middle = size * 0.5;
  let step = size * 0.05;
  for(i = 0; i < 10; i++){
    line(middle, i * step, middle - (step*i), middle); 
    line(middle, i * step, middle + (step*i), middle);
    line(middle, size - (i * step), middle - (step*i), middle);
    line(middle, size - (i * step), middle + (step*i), middle);
  }
  pop();
}
