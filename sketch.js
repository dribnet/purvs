var Xaxis = 0;
var Yaxis = 0;
var num = 0;
var color1 = 56;
var color2 = 103;
var color3 = 200;

function setup () {
  createCanvas(960, 500);
}

function mousePressed(){
  fill(255);
    rect(0,0,1000,1000);
    Xaxis = 0;
}

function draw () {
  noStroke();
 
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

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
