var Xaxis = 0;
var Yaxis = 0;
var num = 0;
var color1 = 216;
var color2 = 103
var color3 = 7;
function setup () {
  createCanvas(960, 500);
}


function draw () {
  noFill();
  if (mouseIsPressed) {
    Xaxis = 0;
  }
  else {
    fill(255);
  }
  while(Xaxis < 1040){
    while(Yaxis < 580){
      num = focusedRandom(10,80);
      fill(color1 + num, color2 + num, color3 + num);
      ellipse(Xaxis, Yaxis, 80, 80);

      num = focusedRandom(10,80);
      fill(color1 + num, color2 + num, color3 + num);
      ellipse(Xaxis, Yaxis, 60, 60);

      num = focusedRandom(10,80);
      fill(color1 + num, color2 + num, color3 + num);
      ellipse(Xaxis, Yaxis, 40, 40);

      num = focusedRandom(10,80);
      fill(color1 + num, color2 + num, color3 + num);
      ellipse(Xaxis, Yaxis, 20, 20);
      Yaxis += 40
    }
    Yaxis = 0
    Xaxis+= 40
  }
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
