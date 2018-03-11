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
  background(0); // light gray background
  strokeWeight(0); // Stroke weight to 8 pixels
  fill(200);
  x=380;y=180;
  ellipse(10+x,10+y,15,15);
  ellipse(10+x,30+y,15,15);
  ellipse(10+x,50+y,15,15);
  ellipse(10+x,70+y,15,15);
  ellipse(10+x,90+y,15,15);
  ellipse(10+x,110+y,15,15);
  ellipse(10+x,130+y,15,15);
  ellipse(-10+x,90+y,15,15);
  ellipse(-30+x,90+y,15,15);
  ellipse(-50+x,90+y,15,15);
  ellipse(30+x,90+y,15,15);
  ellipse(-50+x,70+y,15,15);
  ellipse(-30+x,50+y,15,15);
  ellipse(-10+x,30+y,15,15);
  
  ellipse(70+x,110+y,15,15);
  ellipse(70+x,30+y,15,15);
  
  ellipse(170+x,10+y,15,15);
  ellipse(170+x,30+y,15,15);
  ellipse(170+x,50+y,15,15);
  ellipse(170+x,70+y,15,15);
  ellipse(170+x,90+y,15,15);
  ellipse(170+x,110+y,15,15);
  ellipse(170+x,130+y,15,15);
  
  ellipse(270+x,10+y,15,15);
  ellipse(290+x,10+y,15,15);
  ellipse(230+x,10+y,15,15);
  ellipse(250+x,10+y,15,15);
  ellipse(270+x,70+y,15,15);
  ellipse(290+x,70+y,15,15);
  ellipse(230+x,70+y,15,15);
  ellipse(250+x,70+y,15,15);
  ellipse(270+x,130+y,15,15);
  ellipse(290+x,130+y,15,15);
  ellipse(230+x,130+y,15,15);
  ellipse(250+x,130+y,15,15);
  ellipse(230+x,30+y,15,15);
  ellipse(230+x,50+y,15,15);
  ellipse(290+x,90+y,15,15);
  ellipse(290+x,110+y,15,15);
  
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
