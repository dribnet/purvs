const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock


function draw(){
  scale(0.5,0.5);
  shearY(9);

  repeat();

}

function repeat(){
  background(1);
  for (var i = 0; i <=4; i ++) {
    drawRectangles(stroke(random(255),random(255),random(255)));
    translate(0,80);
    scale(0.5,0.5);



  }
}

function drawRectangles () {
  fill(1);
  strokeWeight(5);
  translate( 70, 500);
  
 

  //1
  rect(0, 0, 30, 210);
  rect(0, 0, 30, 180);
  rect(0, 0, 30, 150);
  rect(0, 0, 30, 120);
  rect(0, 0, 30, 90);
  rect(0, 0, 30, 60);
  rect(0, 0, 30, 30);

  //3  
  rect(90, 150, 30, 30);  
  rect(180, 180, 30, 30);
  rect(150, 180, 30, 30);
  rect(120, 180, 30, 30);
  rect(210, 150, 30, 30);
  rect(210, 120, 30, 30);
  rect(150, 90, 30, 30);
  rect(180, 90, 30, 30);
  rect(210, 60, 30, 30);
  rect(210, 30, 30, 30);
  rect(180, 0, 30, 30);
  rect(150, 0, 30, 30);
  rect(120, 0, 30, 30);
  rect(90, 30, 30, 30);

  //:
  rect(270, 60, 30, 30);
  rect(270, 120, 30, 30);

  //4
  rect(330, 120, 30, 30);
  rect(360, 90, 30, 30);
  rect(390, 60, 30, 30);
  rect(420, 30, 30, 30);
  rect(450, 0, 30, 30);
  rect(480, 0, 30, 30);
  rect(480, 30, 30, 30);
  rect(480, 60, 30, 30);
  rect(480, 90, 30, 30);
  rect(480, 120, 30, 30);
  rect(480, 150, 30, 30);
  rect(480, 180, 30, 30);
  rect(330, 150, 30, 30);
  rect(360, 150, 30, 30);
  rect(390, 150, 30, 30);
  rect(420, 150, 30, 30);
  rect(450, 150, 30, 30);
  rect(510, 150, 30, 30);
  
  //1
  rect(570, 0, 30, 210);
  rect(570, 0, 30, 180);
  rect(570, 0, 30, 150);
  rect(570, 0, 30, 120);
  rect(570, 0, 30, 90);
  rect(570, 0, 30, 60);
  rect(570, 0, 30, 30);

  //:
  rect(630, 60, 30, 30);
  rect(630, 120, 30, 30);

  //1
  rect(690, 0, 30, 210);
  rect(690, 0, 30, 180);
  rect(690, 0, 30, 150);
  rect(690, 0, 30, 120);
  rect(690, 0, 30, 90);
  rect(690, 0, 30, 60);
  rect(690, 0, 30, 30);

  translate(width / 1.4, height / 1000);
  //3
  rect(90, 150, 30, 30);  
  rect(180, 180, 30, 30);
  rect(150, 180, 30, 30);
  rect(120, 180, 30, 30);
  rect(210, 150, 30, 30);
  rect(210, 120, 30, 30);
  rect(150, 90, 30, 30);
  rect(180, 90, 30, 30);
  rect(210, 60, 30, 30);
  rect(210, 30, 30, 30);
  rect(180, 0, 30, 30);
  rect(150, 0, 30, 30);
  rect(120, 0, 30, 30);
  rect(90, 30, 30, 30);






  
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
