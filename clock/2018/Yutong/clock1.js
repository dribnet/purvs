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
  background(255,204,0); // light gray background
  strokeWeight(2); // Stroke weight to 8 pixels
  //Stroke(255);
 //noStroke();
  //fill(255,204,0);
  noFill();
  ellipse(200, 100, 25, 25);
  ellipse(225, 100, 25, 25);
  ellipse(250, 100, 25, 25);

  //push();
  //translate(5,0);
  //fill('red');
  //ellipse(200, 100, 25, 25);
  //ellipse(225, 100, 25, 25);
  //ellipse(250, 100, 25, 25);
  //pop();
  //fill('red');
  ellipse(175, 125, 25, 25);
  ellipse(175, 150, 25, 25);

  ellipse(275, 125, 25, 25);
  ellipse(275, 150, 25, 25);

  ellipse(200, 175, 25, 25);
  ellipse(225, 175, 25, 25);
  ellipse(250, 175, 25, 25);

  ellipse(275, 200, 25, 25);
  ellipse(275, 225, 25, 25);

  ellipse(175, 200, 25, 25);
  ellipse(175, 225, 25, 25);


  ellipse(200, 250, 25, 25);
  ellipse(225, 250, 25, 25);
  ellipse(250, 250, 25, 25);

  ellipse(300, 100, 25, 25);
  ellipse(325, 100, 25, 25);
  ellipse(350, 100, 25, 25);
  
  ellipse(300, 175, 25, 25);
  ellipse(325, 175, 25, 25);
  ellipse(350, 175, 25, 25);

  ellipse(375, 200, 25, 25);
  ellipse(375, 225, 25, 25);

  ellipse(300, 250, 25, 25);
  ellipse(325, 250, 25, 25);
  ellipse(350, 250, 25, 25);

  ellipse(400, 100, 25, 25);
  ellipse(425, 100, 25, 25);
  ellipse(450, 100, 25, 25);

  ellipse(375, 125, 25, 25);
  ellipse(375, 150, 25, 25);

  ellipse(400, 175, 25, 25);
  ellipse(425, 175, 25, 25);
  ellipse(450, 175, 25, 25);

  ellipse(475, 200, 25, 25);
  ellipse(475, 225, 25, 25);

  ellipse(400, 250, 25, 25);
  ellipse(425, 250, 25, 25);
  ellipse(450, 250, 25, 25);

  ellipse(475, 125, 25, 25);
  ellipse(475, 150, 25, 25);

  ellipse(500, 250, 25, 25);
  ellipse(525, 250, 25, 25);
  ellipse(550, 250, 25, 25);

  ellipse(500, 175, 25, 25);
  ellipse(525, 175, 25, 25);
  ellipse(550, 175, 25, 25);

  ellipse(500, 100, 25, 25);
  ellipse(525, 100, 25, 25);
  ellipse(550, 100, 25, 25);

  ellipse(575, 125, 25, 25);
  ellipse(575, 150, 25, 25);

  ellipse(575, 200, 25, 25);
  ellipse(575, 225, 25, 25);



  fill('red');
  ellipse(200, 100, 20, 20);
  ellipse(225, 100, 20, 20);
  ellipse(250, 100, 20, 20);

  ellipse(175, 125, 20, 20);
  ellipse(175, 150, 20, 20);

  ellipse(200, 175, 20, 20);
  ellipse(225, 175, 20, 20);
  ellipse(250, 175, 20, 20);

  ellipse(275, 200, 20, 20);
  ellipse(275, 225, 20, 20);
  
  ellipse(200, 250, 20, 20);
  ellipse(225, 250, 20, 20);
  ellipse(250, 250, 20, 20);



  fill('blue');
  ellipse(400, 100, 20, 20);
  ellipse(425, 100, 20, 20);
  ellipse(450, 100, 20, 20);

  ellipse(475, 125, 20, 20);
  ellipse(475, 150, 20, 20);

  ellipse(400, 175, 20, 20);
  ellipse(425, 175, 20, 20);
  ellipse(450, 175, 20, 20);

  ellipse(475, 200, 20, 20);
  ellipse(475, 225, 20, 20);

  ellipse(400, 250, 20, 20);
  ellipse(425, 250, 20, 20);
  ellipse(450, 250, 20, 20);



  ellipse(500, 100, 20, 20);
  ellipse(525, 100, 20, 20);
  ellipse(550, 100, 20, 20);

  ellipse(575, 125, 20, 20);
  ellipse(575, 150, 20, 20);

  ellipse(500, 175, 20, 20);
  ellipse(525, 175, 20, 20);
  ellipse(550, 175, 20, 20);

  ellipse(575, 200, 20, 20);
  ellipse(575, 225, 20, 20);

  ellipse(500, 250, 20, 20);
  ellipse(525, 250, 20, 20);
  ellipse(550, 250, 20, 20);






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
