const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(204); // light gray background
  strokeWeight(4); // Stroke weight to 4 pixels
  var c = color('red');
  fill(c); // Fill the color following var c
  noStroke(); // no stroke
  // Red S
  rect(548, 130, 25, 25); // The start of drawing S
  rect(520, 101, 25, 25); // The second rect
  rect(442, 72, 75, 25); // The top of S
  rect(413, 101, 25, 25); // The first rect of vertical line
  rect(385, 130, 25, 75); // The second rect of vertical line
  rect(413, 208, 25, 25); // The third rect of vertical line
  rect(442, 236, 45, 25);
  rect(490, 265, 25, 25);
  rect(519, 293, 25, 25);
  rect(519, 293, 25, 25);
  rect(548, 322, 25, 75);
  rect(520, 400, 25, 25);
  rect(442, 428, 75, 25);
  rect(415, 400, 25, 25);
  rect(388, 373, 25, 25);

  // black S
  var c2 = color('black');
  fill(c2); 
  rect(540, 130, 25, 25); // The start of drawing S
  rect(512, 101, 25, 25); // The second rect
  rect(434, 72, 75, 25); // The top of S
  rect(405, 101, 25, 25); // The first rect of vertical line
  rect(377, 130, 25, 75); // The second rect of vertical line
  rect(405, 208, 25, 25); // The third rect of vertical line
  rect(434, 236, 45, 25);
  rect(482, 265, 25, 25);
  rect(511, 293, 25, 25);
  rect(511, 293, 25, 25);
  rect(540, 322, 25, 75);
  rect(512, 400, 25, 25);
  rect(434, 428, 75, 25);
  rect(408, 400, 25, 25);
  rect(380, 373, 25, 25);

  // 11
  fill(333);
  noStroke();
  rect(410,170,40,200);
  rect(372,210,40,40);
  rect(446,330,40,40);
  rect(372,330,40,40);
  rect(530,170,40,200);
  rect(492,210,40,40);
  rect(566,330,40,40);
  rect(492,330,40,40);

 //03 
  var c3 = color('yellow');
fill(c3); 
rect(345,300,25,80);
rect (375,268,25,25);
rect (375,387,90,25);
rect (467,300,25,80);
rect (505,387,90,25);
rect (600,300,25,80);
rect (565,268,25,25);
rect(410, 130, 150, 30);
rect(382, 160, 30, 80);
rect(410, 240, 150, 30); 
rect(560, 160, 30, 80);  

// 7
fill(0); 
rect(670,185,60,15);
rect(730,185,15,55);
rect(715,240,15,15);
rect(670,200,15,15);
rect(700,255,15,50);

// 4

rect(220, 140, 30, 210);
  rect(190,170,30,30);
  rect(160,200,30,30);
  rect(140,230,30,30);
  rect(140,260,150,30);


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
