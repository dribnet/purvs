let size = 100;

var colour_red = [255,0,0];
var colour_green = [0,255,0];
var colour_blue = [0,0,255];

let randomColourNum = 0;
let drawMode = 0;

function setup () {
  createCanvas(960, 500);
  randomColourNum = focusedRandom(0,3);
}

function draw () {
  if(drawMode == 1){
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
  }
  else{
    background(255,255,255);
    drawHouse(30, 20, 2);
    drawTree(200, 100, 40);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if(key == 'L' || key == 'l'){
    drawMode = 0;
  }
  else if(key == 'W' || key == 'w'){
    drawMode = 1;
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

function drawHouse(xpos, ypos, size){
  push();
  translate(xpos, ypos);
  stroke(0,0,0);
  fill(255, 255, 255);
  rect(5 * size, 45 * size, 145 * size, 85 * size, 10, 10, 10, 10);
  fill(colour_red);
  stroke(colour_red);
  rect(0, 0, 155 * size, 55 * size, 20, 20, 10, 10);
  fill(colour_blue);
  stroke(colour_blue);
  rect(77 * size, 80 * size, 30 * size, 50 * size, 5, 5, 0, 0);
  pop();
}

function drawTree(xpos, ypos, size){
  push();
  translate(xpos, ypos);
  fill(colour_green);
  stroke(colour_green);
  triangle((size*0.5), 0, 0, (size * 2), size, (size * 2) );
  translate(0, size);
  triangle((size*0.5), 0, 0, (size * 2), size, (size * 2) );
  translate(0, size);
  triangle((size*0.5), 0, 0, (size * 2), size, (size * 2) );
  fill(colour_red);
  stroke(colour_red);
  rect(size * 0.35,size*2,size * 0.3,size);
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
