let size = 100;

var colour_red = [255,0,0];
var colour_green = [0,255,0];
var colour_blue = [0,0,255];
let randomColourNum = 0;

function setup () {
  createCanvas(960, 500);
  randomColourNum = focusedRandom(0,3);
}

function draw () {

  if(mouseIsPressed){
    randomColourNum = focusedRandom(0,3);
  }

  background(255,255,225);

  for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
      drawShape((i * 100), (j * 100), 100);
    }
  }
  for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
      drawShape((i * 100) +50, (j * 100) + 50, 100);
    }
  }
  // for(var i = 0; i < 10; i++){
  //   for(var j = 0; j < 10; j++){
  //     drawShape((i * 100) +25, (j * 100) + 25, 100);
  //   }
  // }
  // for(var i = 0; i < 10; i++){
  //   for(var j = 0; j < 10; j++){
  //     drawShape((i * 100) +75, (j * 100) + 75, 100);
  //   }
  // }
  // for(var i = 0; i < 10; i++){
  //   for(var j = 0; j < 10; j++){
  //     drawShape((i * 100) +25, (j * 100) + 75, 100);
  //   }
  // }
  // for(var i = 0; i < 10; i++){
  //   for(var j = 0; j < 10; j++){
  //     drawShape((i * 100) +75, (j * 100) + 25, 100);
  //   }
  // }
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
    setColour(i);
    line(middle, i * step, middle - (step*i), middle); 
    line(middle, i * step, middle + (step*i), middle);
    line(middle, size - (i * step), middle - (step*i), middle);
    line(middle, size - (i * step), middle + (step*i), middle);
  }
  pop();
}

function setColour(index){

  if((randomColourNum * index) < 4){
    stroke(colour_red);
  }
  else if((randomColourNum * index) > 5 && (randomColourNum * index) < 9){
    stroke(colour_green);
  }
  else if((randomColourNum * index) > 9){
    stroke(colour_blue);
  }
}
