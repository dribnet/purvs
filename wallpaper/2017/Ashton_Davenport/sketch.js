let size = 100;

var curRandomSeed;

var colour_red = [255,0,0];
var colour_green = [0,255,0];
var colour_blue = [0,0,255];

var colour_tree = [0, 200, 0];
var colour_tree_trunk = [139,69,19];

var colour_house_light = [110,69,19];
var colour_house_dark = [159,69,19];

var trees_xpos = new Array();
var trees_ypos = new Array();

let randomColourNum = 0;
let drawMode = 0;

function setup () {
  createCanvas(960, 500);
  randomColourNum = focusedRandom(0,3);
  noiseSeed(random(0,1000));
  noiseDetail(6,0.75);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function draw () {


  if (mouseIsPressed) {
    changeRandomSeed();
  }
  resetFocusedRandom(curRandomSeed);

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
    
    for(var i = 0; i < 200; i++){
      for(var j = 0; j < 100; j++){
        fill(255, 255, (105 * noise(i, j)) + 100);
        stroke(255,255, (105 * noise(i, j)) + 100);
        //fill(255,0,0);
        rect(i * 5, j * 5, 5, 5);
      }
    }

    for(var i = 0; i < 20; i++){
      for(var j = 0; j < 10; j++){
        // fill(255, 255, (105 * noise(i, j)) + 100);
        // stroke(255,255, (105 * noise(i, j)) + 100);
        // //fill(255,0,0);
        // rect(i * 50, j * 50, 50, 50);
        if(noise(i,j) > 0.7){
          drawTree((i*50) +20, j*50, 10);
        }
        else if(noise(i,j) < 0.5){
          drawHouse(i*50, j*50, 8);
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
  // push();
  // translate(xpos, ypos);
  // stroke(0,0,0);
  // fill(255, 255, 255);
  // rect(5 * size, 45 * size, 145 * size, 85 * size, 10, 10, 10, 10);
  // fill(colour_red);
  // stroke(colour_red);
  // rect(0, 0, 155 * size, 55 * size, 20, 20, 10, 10);
  // fill(colour_blue);
  // stroke(colour_blue);
  // rect(77 * size, 80 * size, 30 * size, 50 * size, 5, 5, 0, 0);
  // pop();
  push();
  translate(xpos, ypos);
  fill(colour_house_dark);
  stroke(colour_house_dark);

  rect(10,42,25,8);
  rect(10,26,25,8);
  rect(13,10,20,8);

  fill(colour_house_light);
  stroke(colour_house_light);

  rect(10,34,25,8);
  rect(10,18,25,8);
  rect(20,2,6,8);

  fill(colour_house_dark);
  stroke(colour_house_dark);

  ellipse(6, 22, size, size);
  ellipse(18, 10, size, size);
  ellipse(6, 22, size, size);
  ellipse(30, 10, size, size);
  ellipse(42, 22, size, size);
  ellipse(12, 38, size, size);
  ellipse(36, 38, size, size);
  ellipse(12, 22, size, size);
  ellipse(36, 22, size, size);
  fill(colour_house_light);
  stroke(colour_house_light);
  ellipse(12, 30, size, size);
  ellipse(12, 46, size, size);
  ellipse(36, 30, size, size);
  ellipse(36, 46, size, size);
  ellipse(12, 16, size, size);
  ellipse(36, 16, size, size);
  ellipse(24,4,size, size);
  pop();
}

function drawTree(xpos, ypos, size){
  push();
  var shiftX = focusedRandom(-40, 40, 6);
  var shiftY = focusedRandom(-40, 40, 6);
  translate(xpos + shiftX, ypos + shiftY);
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
