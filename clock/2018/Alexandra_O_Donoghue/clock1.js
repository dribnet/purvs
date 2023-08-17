const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

function setup () {
  
  // create the drawing canvas, save the canvas element
  var main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(1); // light gray background
  fill(255);
  noStroke();
  
  var y = 450;
  var x = 300;
  var col = 100;
  for(var i = 1; i < 100; ++i)
   {
      x = x + 60;
      y = y - 75;
      
      //3
      rect(x, y, 10, 10);
      rect(x+10, y-10, 30, 10);
      rect(x+40, y, 10, 20);
      rect(x+20, y+20, 20, 10);
      rect(x+40, y+30, 10, 20);
      rect(x+10, y+50, 30, 10);
      rect(x, y+40, 10, 10);
    
      //:
      rect(x+80, y, 10, 10);
      rect(x+80, y+40, 10, 10);
    
      //5
      rect(x+120, y-10, 50, 10);
      rect(x+120, y, 10, 20);
      rect(x+130, y+10, 30, 10);
      rect(x+130, y+10, 30, 10);
      rect(x+160, y+20, 10, 30);
      rect(x+130, y+50, 30, 10);
      rect(x+120, y+40, 10, 10);
    
      //9
      rect(x+190, y-10, 30, 10);
      rect(x+180, y, 10, 30);
      rect(x+220, y, 10, 50);
      rect(x+190, y+30, 30, 10);
      rect(x+190, y+50, 30, 10);
	  
	  col = col + 30;
      fill(255, 100, col);
  }
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
