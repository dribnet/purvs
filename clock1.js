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
  strokeWeight(8); // Stroke weight to 8 pixels
  ellipse(300, 250, 25, 25);
  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  fill(255,0,3)
  stroke(255)
  //horizontal 4
    ellipse(100, 250, 25, 25);
    ellipse(150, 250, 25, 25);
    ellipse(200, 250, 25, 25);
  ellipse(250, 250, 25, 25);
  //top of 4
    ellipse(100, 200, 25, 25);
     ellipse(150, 150, 25, 25);
       ellipse(200, 100, 25, 25);
         ellipse(250, 50, 25, 25);
 //vertical down 4
   ellipse(250, 100, 25, 25);
   ellipse(250, 150, 25, 25);
   ellipse(250, 200, 25, 25);
   ellipse(250, 300, 25, 25);
   ellipse(250, 350, 25, 25);
   //dots
      ellipse(350, 150, 25, 25);
        ellipse(350, 300, 25, 25);

        //second 4

          //horizontal 4
    ellipse(400, 250, 25, 25);
    ellipse(450, 250, 25, 25);
    ellipse(500, 250, 25, 25);
  ellipse(550, 250, 25, 25);
    ellipse(600, 250, 25, 25);
  //top of 4
    ellipse(400, 200, 25, 25);
     ellipse(450, 150, 25, 25);
       ellipse(500, 100, 25, 25);
         ellipse(550, 50, 25, 25);
 //vertical down 4
   ellipse(550, 100, 25, 25);
   ellipse(550, 150, 25, 25);
   ellipse(550, 200, 25, 25);
   ellipse(550, 300, 25, 25);
   ellipse(550, 350, 25, 25); 

   //seven

   ellipse(650, 50, 25, 25);
      ellipse(700, 50, 25, 25);
         ellipse(750, 50, 25, 25);
            ellipse(800, 50, 25, 25);
               ellipse(850, 50, 25, 25);

  ellipse(850, 100, 25, 25);
  ellipse(850, 150, 25, 25);

    ellipse(800, 200, 25, 25);

    ellipse(750, 250, 25, 25);
    ellipse(750, 300, 25, 25);
    ellipse(750, 350, 25, 25);        


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
