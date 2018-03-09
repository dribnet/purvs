const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
const width = 50;

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
 // light gray background
  //strokeWeight(2); // Stroke weight to 8 pixels
  
  // The rectangle draws on top of the ellipse
  // because it comes after in the code
  fill(255);
  //expand / decrease
  var x = 150;
  var y = 150;


  background(50);
  rect(x+100,y,40,100); //left 1
  rect(x+100,y+100,40,100);

  rect(x+200,y+30,50,50);//middle dots
  rect(x+200,y+130,50,50);

  rect(x+300,y,40,100);//right 1
  rect(x+300,y+100,40,100);

  rect(x+400,y,40,100);//right 0 left
  rect(x+400,y+100,40,100);

  rect(x+440,y+160,100,40);//right 0 bottom

  rect(x+540,y,40,100);//right 0 right
  rect(x+540,y+100,40,100);

  rect(x+440,y,100,40);//right 0 top
  

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
