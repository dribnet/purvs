var canvasWidth = 960;
var canvasHeight = 500;
var button;
var curRandomSeed;
var overallScale;
var random_result;

function setup () {
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(focusedRandom(0, 100));

  randButton = createButton('randomize');
  randButton.mousePressed(changeRandomSeed);
  randButton.parent('selector1Container');

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}


function drawFace(x, y, w, h, width_value, tilt_value, eye_value, mouth_value, seed_value, leaf_value, twig_value, twig_value2, season_value) {
  //colour variables
  var leafColour1;
  var leafColour2;
  var faceColour;
  var twigColour;
  var eyeColour;

  if(season_value == 0){
    //summer
    leafColour1 = "#00673f";
    leafColour2 = "#219d23";
    faceColour1 = 213;
    faceColour2 = 236;
    faceColour3 = 187;
    twigColour = "#005533";
    eyeColour1 = 98; 
    eyeColour2 = 183;
    eyeColour3 = 88;
  } else if(season_value == 1){
    //spring
    leafColour1 = "#d7ff72";
    leafColour2 = "#a2d400";
    faceColour1 = 252;
    faceColour2 = 190;
    faceColour3 = 202;
    twigColour = "#8b6403";
    eyeColour1 = 251; 
    eyeColour2 = 135;
    eyeColour3 = 157;
  } else if(season_value == 2){
    //winter
    leafColour1 = "#6ebff7";
    leafColour2 = "#1f649d";
    faceColour1 = 192;
    faceColour2 = 241;
    faceColour3 = 255;
    twigColour = "#837981";
    eyeColour1 = 66; 
    eyeColour2 = 112;
    eyeColour3 = 208;
  } else if(season_value== 3){
    //autumn
    leafColour1 = "#c64e00";
    leafColour2 = "#ff902b";
    faceColour1 = 253;
    faceColour2 = 182;
    faceColour3 = 89;
    twigColour = "#722902";
    eyeColour1 = 172; 
    eyeColour2 = 61;
    eyeColour3 = 0;
  }

    


    


  push();
  rectMode(CENTER);
  translate(x, y);
  rotate(tilt_value);

  // rotate(width_value);

  var extent = 0;
  if(h < w) {
    extent = h / 2;
  }
  else {
    extent = w / 2;
  }
  var scale = extent / 220.0;
  overallScale = scale;

  stroke("#000000");
  strokeWeight(0.5);
  
  randomSeed(seed_value);
  
  
  

  //leaves
  for(var i=1; i<leaf_value; i++){
    leaf(random(-90 * scale, 90* scale), random(60 * scale, 90 * scale), leafColour1, leafColour2, random(0, 359));
  }

  for(var i=1; i<leaf_value; i++){
    leaf(random(-140 * scale, 140 * scale), random(-30 * scale, 30 * scale), leafColour1, leafColour2, random(0, 359));
  }

  for(var i=1; i<leaf_value; i++){
    leaf(random(-90 * scale, 90 * scale), random(-100 * scale, 0 * scale), leafColour1, leafColour2, random(0, 359));
  }

  //face

  noStroke();
  for(var i=1; i<=5; i++){
      noStroke();
      fill(faceColour1,faceColour2,faceColour3, 20+(i*50));
      ellipse(0, 0, 485*scale-(i*7), 435*scale-(i*7));
    }



  noFill();
  strokeWeight(4);

  //twigs
  for(var i=0; i<=twig_value2; i++){
    var z = random(-160 * scale, 160 * scale)
    var r;
    if(z<=0){
      r = random(z, 0)
    } else{
      r = random(0, z);
    }
    twig(z, random(-60 * scale, -30 * scale), twigColour, r);
  }
  for(var i=0; i<=twig_value; i++){
    var z =  random(-100 * scale, 100 * scale)
    var r;
    if(z<=0){
      r = random(z, 0)
    } else{
      r = random(0, z);
    }
    twig(z, random(-150 * scale, -60 * scale),twigColour, r);
  }
  

  stroke("#000000");
  strokeWeight(1);

  //mouth closed

  if(mouth_value ==0){
    push();
    translate(-10 * scale, 140 * scale);
    rotate(90);
    arc(0, 0, 20* scale, 20* scale, -70, 70);
    pop();

    push();
    translate(10 * scale, 140 * scale);
    rotate(90);
    arc(0, 0, 20* scale, 20* scale, -70, 70);
    pop();


  }

  //mouth open
  if(mouth_value ==1){

    push();
    fill("#ef7fbe");
    translate(0, 75.5*2 * scale);
    rotate(90);
    ellipse(0, 0, 10*scale, 10*scale);
    arc(0, 0, 20 * scale, 20* scale, -100, 100, OPEN);
    pop();

    push();
    translate(-10 * scale, 140 * scale);
    rotate(90);
    arc(0, 0, 20 * scale, 20 * scale, -70, 70);
    pop();

    push();
    translate(10 * scale, 140 * scale);
    rotate(90);
    arc(0, 0, 20 * scale, 20 * scale, -70, 70);
    pop();

    

  }

  // eyes closed
  if (eye_value ==0) {
    push();
    noFill();
    translate(-80 * scale, 80 * scale);
    rotate(90);
    arc(0, 0, 25 * scale, 25 * scale, -40, 40);
    pop();

    push();
    noFill();
    translate(80 * scale, 80 * scale);
    rotate(90);
    arc(0, 0, 25 * scale, 25 * scale, -40, 40);
    pop();
    
  }
  //eyes open
  if(eye_value ==1){
    for(var i=1; i<=5; i++){
      noStroke();
      fill(eyeColour1, eyeColour2, eyeColour3, i*50);
      ellipse(-80 * scale, 90 * scale, 60*scale-(i*2.5), 70*scale-(i*2.5));
      ellipse(80 * scale, 90 * scale, 60*scale-(i*2.5), 70*scale-(i*2.5) );
    }
    fill("#000000")
    ellipse(-80 * scale, 90 * scale, 20*scale, 30*scale);
    ellipse(80 * scale, 90 * scale, 20*scale, 30*scale);
  }

  

  
  pop();
  
}

function leaf(x, y, colour1, colour2, rotation){
  stroke("#000000");
  strokeWeight(1);
  push();
  translate(x, y);
  rotate(rotation);
  fill(colour1);
  curve(-75*overallScale*3, 5*overallScale*3, 0, 0, 0, 50*overallScale*3, -75*overallScale*3, 50*overallScale*3);
  fill(colour2);
  curve(75*overallScale*3, 5*overallScale*3, 0, 0, 0, 50*overallScale*3, 75*overallScale*3, 50*overallScale*3);
  //line(0, 0, 0, 100 * scale);
  pop();
}

function twig(x, y, colour, rotation){
  strokeWeight(2);
  stroke(colour);
  push();
  translate(x, y);
  rotate(rotation);
  line(0, 0, 0, -100*overallScale);
  line(0, -20*overallScale , 10*overallScale, -30*overallScale);
  line(0, -30*overallScale , -20*overallScale, -50*overallScale);
  line(0, -40*overallScale, 20*overallScale, -60*overallScale);
  line(0, -60*overallScale, 15*overallScale, -75*overallScale);
  line(0, -60*overallScale, -15*overallScale, -75*overallScale);
  line(0, -80*overallScale, -10*overallScale, -90*overallScale);
  line(0, -80*overallScale, 10*overallScale, -90*overallScale);
  pop();
}

function getRandomSeason(){
  random_result = focusedRandom(0, 100);
  if(random_result <50) {
    return 0;
  }
  if(random_result <75) {
    return 1;
  }
  if(random_result <90) {
    return 2;
  }
  else {
    return 3;
  }
}



function getRandomEyeValue(){
  random_result = focusedRandom(0, 100);
  if(random_result <90) {
    return 1;
  }
  if(random_result >=90) {
    return 0;
  }
}

function getRandomMouthValue(){
  random_result = focusedRandom(0, 100);
  if(random_result <90) {
    return 0;
  }
  if(random_result >=90) {
    return 1;
  }
}





function draw () {
  resetFocusedRandom(curRandomSeed);
  noStroke();
  background("#ffffff");
  var w = canvasWidth / 6;
  var h = canvasHeight / 4;
  for(var i=0; i<4; i++) {
    for(var j=0; j<6; j++) {
      var y = h/2+ h*i;
      var x = w/2 + w*j;
      tilt_value = int(focusedRandom(-50, 50));
      width_value = focusedRandom(0, 100);
      mouth_value = getRandomMouthValue();
      eye_value = getRandomEyeValue();
      seed_value = int(focusedRandom(1, 50));
      leaf_value = Math.floor(focusedRandom(10, 60, 5, 60));
      twig_value = int(focusedRandom(0, 3, 5, 3));
      twig_value2 = int(focusedRandom(0, 5, 5, 5));
      season_value = getRandomSeason();
      drawFace(x, y, w, h, width_value, tilt_value, eye_value, mouth_value, seed_value, leaf_value, twig_value, twig_value2, season_value);
    }
  }   
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}