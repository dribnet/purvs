const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
const width = 50;



var r = 0;
var g = 0;
var b = 50;

var startX = 480;
var startY = 500;
var finishX = 960;
var finishY = 0;
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');


}


function draw () {
background(r,g,b);
r = map(startY,0,960,0,255); //changes blue on left to red on right
fill(255);


for(var i = 0; i<finishX;i++){

fill(255);

ellipse(startX,startY,50,50);
fill(0);
text("12",startX-8,startY);
text("58",startX-7,startY+15);



if(startY<250){startX = 480;startY = 250;}
else{startY = startY -0.001;}
}


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
