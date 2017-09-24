let size = 100;

var colour_red = [255,0,0];
var colour_green = [0,255,0];
var colour_blue = [0,0,255];

var colour_tree = [0, 200, 0];
var colour_tree_trunk = [139,69,19];

var trees_xpos = new Array();
var trees_ypos = new Array();
var houses_xpos = new Array();
var houses_ypos = new Array();

let randomColourNum = 0;
let drawMode = 0;

function setup () {
  createCanvas(960, 500);
  randomColourNum = focusedRandom(0,3);
  noiseSeed(random(0,1000));
  noiseDetail(6,0.75);
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
    rect(10, 10, 10, 10);
    //var perlin_noise = noise(96, 50);
    for(var i = 0; i < 20; i++){
      for(var j = 0; j < 10; j++){
        console.log(noise(i,j));
        fill((255 * noise(i, j)), 0, 0);
        stroke((255 * noise(i, j)), 0, 0);
        //fill(255,0,0);
        rect(i * 50, j * 50, 50, 50);
        if(noise(i,j) > 0.5){
          drawTree((i*50) +20, j*50, 10);
        }
        else{
          drawHouse(i*50, j*50, 0.2);
        }
      }
    }
    //background(255,255,255);
    //drawHouse(30, 20, 2);
    //drawTree(200, 100, 40);
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
  push();
  pop();
}

function drawTree(xpos, ypos, size){
  push();
  translate(xpos, ypos);
  fill(colour_tree);
  stroke(colour_tree);
  triangle((size*0.5), 0, 0, (size * 2), size, (size * 2) );
  translate(0, size);
  triangle((size*0.5), 0, 0, (size * 2), size, (size * 2) );
  translate(0, size);
  triangle((size*0.5), 0, 0, (size * 2), size, (size * 2) );
  fill(colour_tree_trunk);
  stroke(colour_tree_trunk);
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
