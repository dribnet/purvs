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
  angleMode(RADIANS);
  rectMode(CENTER);
	// arc(90, 60, 80, 80, 0, HALF_PI);
  background(0); // light gray background
  fill(0,0,0);
  stroke(50,150,200)
  strokeWeight(3); // Stroke weight to 8 pixels
  // ellipse(480, 250, 190, 190);
  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  // rect(500, 280, 260, 20);

  line(300,300,300,340);
  line(300,300,280,325);
  line(280,325,310,325);

stroke(30,100,150)
scale(.5)
translate(380,325)
  line(300+100,300,300+100,336);
  line(300+100,300,280+100,325);
  line(280+100,325,310+100,325);

      line(420,300,435,300); 
      line(417,303,417,315);
      line(438,303,438,315);
      line(420,318,435,318); 
        line(417,321,417,333);
        line(438,321,438,333);
        line(420,336,435,336); 
    

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
