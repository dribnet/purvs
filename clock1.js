const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;


function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  x = width/2;
  y = height/2;
  rot = PI;
  angle = 0;
  angle2 = 0;
  angle3=0;
  angle4=0;
  min = 0;

  frameRate(1);
 

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(0); // light gray background
  strokeWeight(8); // Stroke weight to 8 pixels

fill(255);

translate(width/2, height/2);
rotate(rot);
rect(100,100, 50, 50);
rect(-20, -20, 40, 40);
rot = rot + PI/60;



 /* fill(255);
  xx=150*cos(radians(angle)) + width/2;
  yy=150*sin(radians(angle)) + height/2;
  ellipse(xx, yy, 15, 15);
  angle = angle + 12;


  fill(255);
  xx=130*cos(radians(angle2)) + width/2;
  yy=130*sin(radians(angle2)) + height/2;
  ellipse(xx, yy, 20, 20);
  if (angle % 360 == 0){angle2 = angle2 +6;}
  

  fill(255);
  xx=100*cos(radians(angle3)) + width/2;
  yy=100*sin(radians(angle3)) + height/2;
  ellipse(xx, yy, 25, 25);
  if (angle % 21600 == 0){angle3 = angle3 + 6}
 

  fill(255);
  xx=70*cos(radians(angle4)) + width/2;
  yy=70*sin(radians(angle4)) + height/2;
  ellipse(xx, yy, 30, 30);
  if (angle % 1296000 == 0){angle4 = angle4 + 6}
 */
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
