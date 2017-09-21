var Xaxis = 0;
var Yaxis = 0;
var num = 0;
var color1 = 56;
var color2 = 103;
var color3 = 200;
var land = false;
var curRandomSeed;

function setup () { 
  curRandomSeed = int(focusedRandom(0, 100));
  createCanvas(960, 500);
  rectMode(CORNERS);
    fill(0);
    rect(0,0,1000,1000);
}
function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
}

function mousePressed(){
    changeRandomSeed();
  if (land == false){
    fill(0);
    rect(0,0,1000,1000);
  }
    else{
    fill(255);
    rect(0,0,1000,1000);
  }
  Xaxis = 0;
}

function colorFromValue(v) {
  if (v < 0.3) {
    return color(0, 0, 128);
  }
  if (v < 0.5) {
    return color(0, 0, 255);
  }
  else if (v < 0.7) {
    return color(0, 255, 0);
  }
  else {
    return color(255, 255, 255);
  }
}

function draw () {
  noStroke();
 // //WallPapper
  if (land == false){
      while (Xaxis < 1040){
      while(Yaxis < 580){

        num = focusedRandom(0,100);
        if(num < 0.5){
            fill(177,184,83);
          }else if(num < 2.5){
            fill(184,106,59);
          }else if(num < 5){
            fill(68,130,194);
          }else{
        fill(20 , 30, 56);}
        triangle(Xaxis, Yaxis, Xaxis, Yaxis + 20, Xaxis + 20, Yaxis + 10);

        num = focusedRandom(0,100);
        if(num < 0.5){
            fill(184,106,59);
          }else if(num < 2.5){
            fill(177,184,83);
          }else if(num < 5){
            fill(68,130,194);
          }else{
        fill(20 , 30, 56);}
        triangle(Xaxis + 20, Yaxis+ 20, Xaxis + 20 , Yaxis + 40, Xaxis , Yaxis+30 );

        Yaxis += 40;
      }
      Yaxis = 0
      Xaxis += 40;
    }
  } 
  else { 

  while(Xaxis < 1040){
    while(Yaxis < 580){

      num = focusedRandom(0,100);
      alpha = focusedRandom(0,120);
      fill(color1 , color2, color3, alpha);
      ellipse(Xaxis, Yaxis, 20, 20);

      num = focusedRandom(0,100);
      alpha = focusedRandom(0,120);
      fill(color1 , color2 , color3 , alpha);
      ellipse(Xaxis - 10, Yaxis - 10, 20, 20);

      num = focusedRandom(0,100);
      if (num < 50){
      num = focusedRandom(0,100);
      alpha = focusedRandom(50,120);
      fill(color1 + num, color2 + num, color3 + num, alpha);
      ellipse(Xaxis, Yaxis, 10, 10);
    }

      num = focusedRandom(0,100);
      if (num < 50){
      num = focusedRandom(0,100);
      alpha = focusedRandom(50,120);
      fill(color1 + num, color2 + num, color3 + num, alpha);
      ellipse(Xaxis - 10, Yaxis - 10, 10, 10);
    }
      Yaxis += 20;
    }

    Yaxis = 0;
    Xaxis+= 20;
  }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }  
  if (key == 'w'){
    fill(0);
    rect(0,0,1000,1000);
    land = false;
    mousePressed();
    draw();
  }
  if (key == 'l'){
    fill(255);
    rect(0,0,1000,1000);
    land = true;
    mousePressed();
    draw();
  }

}
