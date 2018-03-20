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
  stroke(0,0,0);
  strokeWeight(2); // Stroke weight to 8 pixels
  //main shape
 fill(212,175,55);
 ellipse(480,250,300,300);
 stroke(0,0,0);
 fill(0,0,255);
 ellipse(480,250,270,270);
 fill(255,255,255);
 ellipse(480,250,250,250);
 fill(0,0,0);
 ellipse(480,250,240,240);
 fill(255,255,255);
 ellipse(480,250,220,220);


 

//seconds circle
stroke(0,0,0);
strokeWeight(6);
noFill();
ellipse(530,270,120,120);
stroke(212,175,55);
strokeWeight(3);
noFill();
ellipse(530,270,120,120);
stroke(0,0,0);

//minute hand
line(480,250,480,120);

//hour hand
line(480,250,390,190);

//center 
stroke(0,0,255);
 strokeWeight(3);
 point(480,250,10);
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
