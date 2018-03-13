const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
const width = 50;


var r = 0;
var g = 50;
var b = 50;


function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

}

function draw () {
r = map(mouseX,0,960,0,255);



  fill(255);
  
  var x = 150;
  var y = 150;


  background(50);
  rect(x+100,y,40,100); //left 1
  rect(x+100,y+100,40,100);

  rect(x+200,y+30,50,50);//middle dots
  rect(x+200,y+130,50,50);

   fill(100);

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
