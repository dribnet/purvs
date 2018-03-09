const CANVAS_WIDTH = 900;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(04, 90, 90); // light gray background
  strokeWeight(2); // Stroke weight to 8 pixels
  ellipse(620, 150, 90, 190);
  // The rectangle draws on top of the ellipse
  // because it comes after in the code

for (var i = 0; i < height; i += 40) {
    fill(129, 129, 129);
    rect(i, 0, 10, height);
    rect(0, i, width, 10);
    fill(255);
  }


fill(50,128,128);
  rect(500, 280, 260, 400);
  rect(200, 280, 260, 100);

ellipse(50, 50, 80, 80);
arc(390, 260, 280, 280, 0, PI+HALF_PI);
beginShape();
fill(256,128,128);
vertex(180, 82);
 vertex(207, 36);
 vertex(214, 63);
 vertex(407, 11);
 vertex(412, 30);
 vertex(219, 82);
 vertex(226, 109);
endShape(CLOSE);
  point(100,100);
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
