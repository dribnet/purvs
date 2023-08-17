const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
var ballSize = 10;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}


//var m = millis();
// Update this function to draw you own maeda clock
function draw () {

  var m = millis();
  //console.log(m); 
  background(0); // light gray background

  push();
  scale(2.5);
  translate(-50, -200);
    four(100, 300);
    four(220, 300);
    seven(310, 255);

    color(255);
    ellipse(190, 270, 10, 10);
    ellipse(190, 330, 10, 10);
    //ellipse(175, 315, 10, 10);

    if(m>2000 && m<2500){
      block(310, 255, 255);
    }
    if(m>2500 && m<3000){
      block(310, 255, 0);
      seven(310, 255);
    }
  pop();
}

// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

function four(x, y) {
  color(255);
  ellipse(x, y, 10, 10);
  ellipse(x, y + 15, 10, 10);
  ellipse(x + 15, y + 15, 10, 10);
  ellipse(x + 30, y + 15, 10, 10);
  ellipse(x + 45, y + 15, 10, 10);
  ellipse(x + 60, y + 15, 10, 10);
  ellipse(x + 45, y, 10, 10);
  ellipse(x + 45, y - 15, 10, 10);
  ellipse(x + 45, y - 30, 10, 10);
  ellipse(x + 45, y - 45, 10 ,10);
  ellipse(x + 30, y - 30, 10, 10);
  ellipse(x + 15, y - 15, 10, 10);
  ellipse(x + 45, y + 30, 10, 10);
  ellipse(x + 45, y + 45, 10, 10);
}

function seven(x, y){
  color(255);
  ellipse(x, y, 10, 10);
  ellipse(x + 15, y, 10, 10);
  ellipse(x + 30, y, 10, 10);
  ellipse(x + 45, y, 10, 10);
  ellipse(x + 60, y, 10, 10);
  ellipse(x + 60, y + 15, 10, 10);
  ellipse(x + 60, y + 30, 10, 10);
  ellipse(x + 45, y + 45, 10, 10);
  ellipse(x + 30, y + 60, 10, 10);
  ellipse(x + 30, y + 75, 10, 10);
  ellipse(x + 30, y + 90, 10, 10);
}

function block(x, y, c){
  color(c);
  for(var h=0; h<=60; h=h+15){
    ellipse(x+h, y+0, 10, 10)
    for(var v=0; v<=90; v=v+15){
      ellipse(x+h, y+v, 10, 10);
    }
  }

}
