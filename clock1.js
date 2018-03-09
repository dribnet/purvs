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
  // The rectangle draws on top of the ellipse
  // because it comes after in the code

  //Note I made this before we learned for loops and I was considering
  //trying to use them but I wanted to start off simply

  //Each of the push & pops is focussed around one centre point. In 
  //other words this is for the two seperate spiralling sections.
  push();
  translate(960,250); //sets the centre of the spiral making it
  //easier to move and manipulate.
  rotate(-0.2);// Does what it says on the box.
  fill (255); //Colours either singular cirlces or many depending
  //on when the next fill follow. This fill makes it White.
  ellipse(20, 40, 30, 30); //Each circle has a specific size or 
  //position away from the mid point
  ellipse(-20, 40, 30, 30);
  fill (238, 0, 140); //Majenta
  ellipse(40, 100, 60, 60);
  fill (45, 45, 148); //Dark Blue
  ellipse(-40, 100, 60, 60);
  fill (180); //Light Grey
  ellipse(80, 200, 120, 120);
  ellipse(-80, 200, 120, 120);
  fill (255); //White
  rotate(8.1);
  ellipse(20, 40, 30, 30);
  ellipse(-20, 40, 30, 30);
  fill (255, 244, 0); //Yellow
  ellipse(40, 100, 60, 60);
  fill (238, 0, 140); //Magenta
  ellipse(-40, 100, 60, 60);
  fill (180); //Light Grey
  ellipse(80, 200, 120, 120);
  fill (255); //White
  ellipse(-80, 200, 120, 120);
  pop();

  push();
  fill (255); //White
  translate(0,250);
  rotate(3.5);
  fill (180); //Light Grey
  ellipse(15, 30, 23, 23);
  ellipse(-15, 30, 23, 23);
  fill (255); //White
  ellipse(30, 75, 45, 45);
  fill (180); //Light Grey
  ellipse(-30, 75, 45, 45);
  fill (255); //White
  ellipse(60, 150, 90, 90);
  fill (180); //Light Grey
  ellipse(-60, 150, 90, 90);
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
