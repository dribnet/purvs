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
  background(20);
  strokeWeight(2); 
  // 4 #1
  //horizontal line on 4 #1
  ellipse(230, 250, 15, 15);
  ellipse(250, 250, 20, 20);
  ellipse(275, 250, 25, 25);
  ellipse(305, 250, 30, 30);
  ellipse(335, 250, 25, 25);
  //vertical #2 line on 4 #1
  ellipse(305, 280, 30, 30);
  ellipse(305, 220, 30, 30);
  ellipse(305, 190, 30, 30);
  ellipse(305, 160, 30, 30);
  //vertical line #1 on 4 #1
  ellipse(230, 235, 15, 15);
  //diagonal line on 4 #1
  ellipse(250, 210, 20, 20);
  ellipse(275, 190, 25, 25);

  //dots 
  ellipse(370, 270, 20, 20);
  ellipse(370, 190, 20, 20);

  //4 #2
  //horizontal line
  ellipse(410, 250, 15, 15);
  ellipse(430, 250, 20, 20);
  ellipse(455, 250, 25, 25);
  ellipse(485, 250, 30, 30);
  ellipse(515, 250, 25, 25);
  //vertical #2 line 
  ellipse(485, 280, 30, 30);
  ellipse(485, 220, 30, 30);
  ellipse(485, 190, 30, 30);
  ellipse(485, 160, 30, 30);
  //vertical line #1 
  ellipse(410, 235, 15, 15);
  //diagonal line  
  ellipse(430, 210, 20, 20);
  ellipse(455, 190, 25, 25);

  // #8
  //vertical line #1
  ellipse(580, 250, 20, 20);
  ellipse(580, 270, 20, 20);
  ellipse(580, 210, 20, 20);
  ellipse(580, 190, 20, 20);
  //horizontal line #1
  ellipse(595, 170, 15, 15);
  ellipse(615, 170, 20, 20);
  ellipse(640, 170, 25, 25);
  //hortizontal line #2
  ellipse(595, 230, 15, 15);
  ellipse(615, 230, 20, 20);
  ellipse(640, 230, 25, 25);
  //hortizontal line #3
  ellipse(595, 285, 15, 15);
  ellipse(615, 285, 20, 20);
  ellipse(640, 285, 25, 25);
  //vertiacl line #2
  ellipse(665, 260, 30, 30);
  ellipse(665, 200, 30, 30);




  // The rectangle draws on top of the ellipse
  // because it comes after in the code

  
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
