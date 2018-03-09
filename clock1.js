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
  strokeWeight(2); // Stroke weight to 8 pixels
 

 //hour
 ellipse(200,300,30,30);
 ellipse(240,300,30,30);
 ellipse(280,300,30,30);
 ellipse(320,300,30,30);
 ellipse(360,300,30,30);
 ellipse(200,260,30,30);
 ellipse(240,220,30,30);
 ellipse(280,180,30,30);
 ellipse(320,140,30,30);
 ellipse(320,180,30,30);
 ellipse(320,220,30,30);
 ellipse(320,260,30,30);
 ellipse(320,300,30,30);
 ellipse(320,340,30,30);
 ellipse(320,380,30,30);

 //seperator
 ellipse(420,340,30,30);
 ellipse(420,180,30,30);

 //minutes
 
 ellipse(500,300,30,30);
 ellipse(540,300,30,30);
 ellipse(580,300,30,30);
 ellipse(620,300,30,30);
 ellipse(660,300,30,30);
 ellipse(500,260,30,30);
 ellipse(540,220,30,30);
 ellipse(580,180,30,30);
 ellipse(620,140,30,30);
 ellipse(620,180,30,30);
 ellipse(620,220,30,30);
 ellipse(620,260,30,30);
 ellipse(620,300,30,30);
 ellipse(620,340,30,30);
 ellipse(620,380,30,30);

 ellipse(720,140,30,30);
 ellipse(760,140,30,30);
 ellipse(800,140,30,30);
 ellipse(840,140,30,30);
 ellipse(880,140,30,30);
 ellipse(880,180,30,30);
 ellipse(880,220,30,30);
 ellipse(840,260,30,30);
 ellipse(800,300,30,30);
 ellipse(800,340,30,30);
 ellipse(800,380,30,30);








  
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
