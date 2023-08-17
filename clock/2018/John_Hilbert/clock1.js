const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

}

function draw () {
  background(0); 

translate(width/2, height/2); //Change Origin to center of screen for rotation
textAlign(CENTER);
fill(234, 242, 124, 250);
rotate(5.97);
textSize(400);
text('12' , 0, 135); // Hours 

fill(206, 137, 100, 225);
rotate(5.71);
textSize(300);
text('35' , 0, 100); // Mins 

rotate(4.71);
fill(131, 34, 50, 200);
textSize(200);
text('50' , 0, 65); // Seconds
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
