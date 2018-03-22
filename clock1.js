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

  translate(420,250);
  background(204); // light gray background

  strokeWeight(4); // Stroke weight to 8 pixels
  
  let ovs = 25;

  ellipse(-240,50,ovs,ovs);
  ellipse(-200,10,ovs,ovs);
  ellipse(-160,-40,ovs,ovs);
  ellipse(-120,-80,ovs,ovs);
  ellipse(-180,50,ovs,ovs);
  ellipse(-120,50,ovs,ovs);
  ellipse(-60,70,ovs,ovs);
  ellipse(-60,-60,ovs,ovs);
  ellipse(-60,0,ovs,ovs);
  ellipse(-60,150,ovs,ovs);


  ellipse(50,-100,ovs+15,ovs+15);
  ellipse(50,100,ovs+15,ovs+15);

  ellipse(100,50,ovs,ovs);
  ellipse(140,50,ovs,ovs);
  ellipse(180,50,ovs,ovs);
  ellipse(220,50,ovs,ovs);
  ellipse(280,50,ovs,ovs);
  ellipse(120,20,ovs,ovs);
  ellipse(180,-30,ovs,ovs);
  ellipse(240,-80,ovs,ovs);
  ellipse(240,-30,ovs,ovs);
  ellipse(240,20,ovs,ovs);
  ellipse(240,70,ovs,ovs);
  ellipse(240,140,ovs,ovs);

  ellipse(310,-80,ovs,ovs);
  ellipse(340,-80,ovs,ovs);
  ellipse(370,-80,ovs,ovs);
  ellipse(400,-80,ovs.ovs);
  ellipse(440,-80,ovs,ovs);
  ellipse(420,-60,ovs,ovs);
  ellipse(400,-30,ovs,ovs);
  ellipse(380,0,ovs,ovs);
  ellipse(360,30,ovs,ovs);
  ellipse(330,60,ovs,ovs);
  ellipse(330,90,ovs,ovs);
  ellipse(330,140,ovs,ovs);
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
